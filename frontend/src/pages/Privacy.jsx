import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { usePageTitle } from '../hooks/usePageTitle';

const Privacy = () => {
  usePageTitle('Privacy Policy');
  return (
    <div className="bg-black min-h-screen pt-[80px]">
      <section className="py-24 relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-[7.6923%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[800px]"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00FFD1]/10 border border-[#00FFD1]/30 mb-6">
              <Shield size={20} className="text-[#00FFD1]" />
              <span className="text-sm font-medium text-[#00FFD1]">Privacy Policy</span>
            </div>
            <h1 className="display-large mb-4">Privacy Policy</h1>
            <p className="body-medium text-white/70 mb-12">
              Last updated: January 2025. ApexNexon (“we”, “our”, “us”) operates apexnexon.tech.
            </p>

            <div className="space-y-10 text-white/85">
              <section>
                <h2 className="heading-2 mb-4" style={{ color: '#00FFD1' }}>1. Information We Collect</h2>
                <p className="body-medium mb-4">
                  When you use our website or contact us, we may collect:
                </p>
                <ul className="list-disc list-inside space-y-2 body-medium ml-2">
                  <li>Name, email address, company name, and phone number (when you submit the contact form)</li>
                  <li>Usage data such as pages visited and time on site (via analytics)</li>
                  <li>Device and browser information (e.g., IP address, user agent) for security and analytics</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-2 mb-4" style={{ color: '#00FFD1' }}>2. How We Use Your Information</h2>
                <p className="body-medium">
                  We use the information we collect to respond to your inquiries, improve our website and services, send relevant updates (with your consent), and comply with legal obligations. We do not sell your personal data.
                </p>
              </section>

              <section>
                <h2 className="heading-2 mb-4" style={{ color: '#00FFD1' }}>3. Cookies & Analytics</h2>
                <p className="body-medium">
                  We use cookies and similar technologies for analytics (e.g., Google Analytics) to understand how visitors use our site. You can control cookies through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="heading-2 mb-4" style={{ color: '#00FFD1' }}>4. Data Security & Retention</h2>
                <p className="body-medium">
                  We take reasonable measures to protect your data. Contact form submissions and related data are retained only as long as needed to fulfill the purpose for which they were collected or as required by law.
                </p>
              </section>

              <section>
                <h2 className="heading-2 mb-4" style={{ color: '#00FFD1' }}>5. Your Rights</h2>
                <p className="body-medium mb-4">
                  Depending on your location, you may have the right to access, correct, or delete your personal data. To exercise these rights or ask questions, contact us at{' '}
                  <a href="mailto:contact@apexnexon.tech" className="text-[#00FFD1] hover:underline">contact@apexnexon.tech</a>.
                </p>
              </section>

              <section>
                <h2 className="heading-2 mb-4" style={{ color: '#00FFD1' }}>6. Changes</h2>
                <p className="body-medium">
                  We may update this Privacy Policy from time to time. The “Last updated” date at the top will reflect the latest version. Continued use of our site after changes constitutes acceptance.
                </p>
              </section>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10">
              <Link to="/contact" className="text-[#00FFD1] hover:underline body-medium">
                Contact us →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
