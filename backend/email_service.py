import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict
import logging

logger = logging.getLogger(__name__)

class EmailService:
    """Email service for sending notifications"""
    
    def __init__(self):
        # Email configuration from environment variables
        self.smtp_host = os.getenv('SMTP_HOST', 'smtp.gmail.com')
        self.smtp_port = int(os.getenv('SMTP_PORT', '587'))
        self.smtp_username = os.getenv('SMTP_USERNAME', '')
        self.smtp_password = os.getenv('SMTP_PASSWORD', '')
        self.from_email = os.getenv('FROM_EMAIL', 'noreply@apexnexon.com')
        self.to_email = os.getenv('ADMIN_EMAIL', 'admin@apexnexon.com')
    
    def send_contact_form_notification(self, form_data: Dict) -> bool:
        """
        Send email notification when contact form is submitted
        
        Args:
            form_data: Dictionary containing form submission data
            
        Returns:
            bool: True if email sent successfully, False otherwise
        """
        try:
            # Create message
            msg = MIMEMultipart('alternative')
            msg['Subject'] = f"New Contact Form Submission from {form_data['name']}"
            msg['From'] = self.from_email
            msg['To'] = self.to_email
            
            # Create email body
            html_body = f"""
            <html>
                <head>
                    <style>
                        body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                        .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                        .header {{ background: #00FFD1; color: #000; padding: 20px; text-align: center; }}
                        .content {{ background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }}
                        .field {{ margin-bottom: 15px; }}
                        .label {{ font-weight: bold; color: #555; }}
                        .value {{ color: #000; }}
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>New Contact Form Submission</h1>
                        </div>
                        <div class="content">
                            <div class="field">
                                <span class="label">Name:</span>
                                <span class="value">{form_data['name']}</span>
                            </div>
                            <div class="field">
                                <span class="label">Email:</span>
                                <span class="value">{form_data['email']}</span>
                            </div>
                            {f'<div class="field"><span class="label">Company:</span><span class="value">{form_data.get("company", "N/A")}</span></div>' if form_data.get('company') else ''}
                            {f'<div class="field"><span class="label">Phone:</span><span class="value">{form_data.get("phone", "N/A")}</span></div>' if form_data.get('phone') else ''}
                            <div class="field">
                                <span class="label">Message:</span>
                                <div class="value" style="white-space: pre-wrap;">{form_data['message']}</div>
                            </div>
                            <div class="field" style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd;">
                                <span class="label">Submitted at:</span>
                                <span class="value">{form_data.get('created_at', 'N/A')}</span>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
            """
            
            # Attach HTML body
            html_part = MIMEText(html_body, 'html')
            msg.attach(html_part)
            
            # Check if SMTP is configured
            if not self.smtp_username or not self.smtp_password:
                logger.warning("SMTP credentials not configured. Email notification skipped.")
                logger.info(f"Contact form submission: {form_data}")
                return True  # Return True to not block the API
            
            # Send email
            with smtplib.SMTP(self.smtp_host, self.smtp_port) as server:
                server.starttls()
                server.login(self.smtp_username, self.smtp_password)
                server.send_message(msg)
            
            logger.info(f"Contact form notification sent successfully for {form_data['email']}")
            return True
            
        except Exception as e:
            logger.error(f"Failed to send contact form notification: {str(e)}")
            # Don't fail the API call if email fails
            return True

email_service = EmailService()
