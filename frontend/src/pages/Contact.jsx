import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // This will be connected to backend API later
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('Message sent successfully! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black min-h-screen pt-[80px]">
      {/* Hero */}
      <section className="py-24 relative">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-[900px] mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block px-4 py-2 bg-[#00FFD1]/10 border border-[#00FFD1]/30 mb-6"
            >
              <span className="body-medium text-[#00FFD1]">Get in Touch</span>
            </motion.div>
            
            <h1 className="display-huge mb-6">
              Let's Build Something <span style={{ color: '#00FFD1' }}>Amazing Together</span>
            </h1>
            <p className="body-large text-white/85 mb-8">
              Ready to transform your business with AI and automation? Contact our team for a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-24 relative">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8"
            >
              <h2 className="display-medium mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="body-medium text-white/90 mb-2 block">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white body-medium focus:outline-none focus:border-[#00FFD1]/50 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="body-medium text-white/90 mb-2 block">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white body-medium focus:outline-none focus:border-[#00FFD1]/50 transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label className="body-medium text-white/90 mb-2 block">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white body-medium focus:outline-none focus:border-[#00FFD1]/50 transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="body-medium text-white/90 mb-2 block">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white body-medium focus:outline-none focus:border-[#00FFD1]/50 transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="body-medium text-white/90 mb-2 block">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white body-medium focus:outline-none focus:border-[#00FFD1]/50 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={20} />
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="space-y-8 mb-12">
                <div>
                  <h2 className="display-medium mb-8">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-[#00FFD1]/10 flex-shrink-0">
                        <Mail size={24} className="text-[#00FFD1]" />
                      </div>
                      <div>
                        <h3 className="heading-3 mb-2">Email</h3>
                        <a href="mailto:contact@apexnexon.com" className="body-medium text-white/85 hover:text-[#00FFD1] transition-colors">
                          contact@apexnexon.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-[#00FFD1]/10 flex-shrink-0">
                        <Phone size={24} className="text-[#00FFD1]" />
                      </div>
                      <div>
                        <h3 className="heading-3 mb-2">Phone</h3>
                        <a href="tel:+15551234567" className="body-medium text-white/85 hover:text-[#00FFD1] transition-colors">
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-[#00FFD1]/10 flex-shrink-0">
                        <MapPin size={24} className="text-[#00FFD1]" />
                      </div>
                      <div>
                        <h3 className="heading-3 mb-2">Office</h3>
                        <p className="body-medium text-white/85">
                          123 Innovation Drive<br />
                          San Francisco, CA 94105<br />
                          United States
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Placeholder */}
              <div className="bg-white/5 border border-white/10 h-[400px] relative overflow-hidden">
                <iframe
                  title="ApexNexon Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0867674069535!2d-122.39490668468177!3d37.790820479756826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807d3e5c0979%3A0x2c1aae0cde4c979e!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-24 relative bg-white/[0.02]">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="display-large mb-12">Business Hours</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-[800px] mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
                <h3 className="heading-2 mb-4 text-[#00FFD1]">Monday - Friday</h3>
                <p className="body-large text-white/85">9:00 AM - 6:00 PM PST</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
                <h3 className="heading-2 mb-4 text-[#00FFD1]">Emergency Support</h3>
                <p className="body-large text-white/85">24/7 Available</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
