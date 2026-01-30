import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { usePageTitle } from '../hooks/usePageTitle';

const Terms = () => {
  usePageTitle('Terms of Service');
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
              <FileText size={20} className="text-[#00FFD1]" />
              <span className="text-sm font-medium text-[#00FFD1]">Terms of Service</span>
            </div>
            <h1 className="display-large mb-4">Terms of Service</h1>
            <p className="body-medium text-white/70 mb-12">
              Last updated: January 2025. Please read these terms before using apexnexon.tech.
            </p>

            <div className="space-y-10 text-white/85">
              <section>
                <h2 className="heading-2 mb-4" style={{ color: '#00FFD1' }}>1. Acceptance of Terms</h2>
                <p className="body-medium">
                  By accessing or using the ApexNexon website (apexnexon.tech), you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our site.
                </p>
              </section>

              <section>
                <h2 className="heading-2 mb-4" style={{ color: '#00FFD1' }}>2. Use of the Website</h2>
                <p className="body-medium mb-4">
                  You agree to use this website only for lawful purposes. You may not:
                </p>
                <ul className="list-disc list-inside space-y-2 body-medium ml-2">
                  <li>Use the site in any way that violates applicable laws or regulations</li>
                  <li>Attempt to gain unauthorized access to our systems or other users’ data</li>
                  <li>Transmit malware, spam, or any harmful or offensive content</li>
                  <li>Scrape or automate access to the site without our permission</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-2 mb-4" style={{ color: '#00FFD1' }}>3. Intellectual Property</h2>
                <p className="body-medium">
                  All content on this website (text, graphics, logos, and design) is owned by ApexNexon or its licensors and is protected by intellectual property laws. You may not copy, modify, or distribute our content without written permission.
                </p>
              </section>

              <section>
                <h2 className="heading-2 mb-4" style={{ color: '#00FFD1' }}>4. Contact Form & Inquiries</h2>
                <p className="body-medium">
                  When you submit a contact form or inquiry, you consent to us using your information to respond and to communicate about our services. Our use of your data is further described in our{' '}
                  <Link to="/privacy" className="text-[#00FFD1] hover:underline">Privacy Policy</Link>.
                </p>
              </section>

              <section>
                <h2 className="heading-2 mb-4" style={{ color: '#00FFD1' }}>5. Disclaimer</h2>
                <p className="body-medium">
                  This website and its content are provided “as is.” We do not guarantee uninterrupted or error-free access. Case studies and results described on the site are for illustration and may not reflect outcomes for every client.
                </p>
              </section>

              <section>
                <h2 className="heading-2 mb-4" style={{ color: '#00FFD1' }}>6. Limitation of Liability</h2>
                <p className="body-medium">
                  To the fullest extent permitted by law, ApexNexon shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.
                </p>
              </section>

              <section>
                <h2 className="heading-2 mb-4" style={{ color: '#00FFD1' }}>7. Changes</h2>
                <p className="body-medium">
                  We may update these Terms from time to time. The “Last updated” date will reflect the latest version. Your continued use of the site after changes constitutes acceptance of the updated Terms.
                </p>
              </section>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-6">
              <Link to="/privacy" className="text-[#00FFD1] hover:underline body-medium">
                Privacy Policy →
              </Link>
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

export default Terms;
