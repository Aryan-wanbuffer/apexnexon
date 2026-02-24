import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-[7.6923%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4 h-20 sm:h-24 md:h-28 lg:h-32 min-w-[140px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[220px]">
              <motion.span
                className="block h-full w-full bg-[#00FFD1]"
                style={{
                  WebkitMaskImage: 'url(/logo.png)',
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: 'url(/logo.png)',
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                }}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: [1, 1.04, 1] }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  opacity: { duration: 0.5, ease: 'easeOut' },
                  scale: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
                aria-hidden
              />
              <img src="/logo.png" alt="ApexNexon" className="sr-only" />
            </Link>
            <p className="body-muted mb-6">
              Where Intelligence Meets Automation. Building the future of business with AI and intelligent systems. Visit us at apexnexon.tech.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/apexnexon" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#00FFD1] transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/apexnexon" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#00FFD1] transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://github.com/apexnexon" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#00FFD1] transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="heading-3 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="body-muted hover:text-[#00FFD1] transition-colors">Home</Link></li>
              <li><Link to="/services" className="body-muted hover:text-[#00FFD1] transition-colors">Services</Link></li>
              <li><Link to="/solutions" className="body-muted hover:text-[#00FFD1] transition-colors">Solutions</Link></li>
              <li><Link to="/case-studies" className="body-muted hover:text-[#00FFD1] transition-colors">Case Studies</Link></li>
              <li><Link to="/about" className="body-muted hover:text-[#00FFD1] transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="heading-3 mb-4">Services</h3>
            <ul className="space-y-3">
              <li><span className="body-muted">AI & Machine Learning</span></li>
              <li><span className="body-muted">OCR & Automation</span></li>
              <li><span className="body-muted">Custom Software</span></li>
              <li><span className="body-muted">Web & Mobile Apps</span></li>
              <li><span className="body-muted">Cloud & DevOps</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="heading-3 mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[#00FFD1] mt-1 flex-shrink-0" />
                <a href="mailto:contact@apexnexon.tech" className="body-muted hover:text-[#00FFD1] transition-colors">contact@apexnexon.tech</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[#00FFD1] mt-1 flex-shrink-0" />
                <span className="body-muted">Available on request</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#00FFD1] mt-1 flex-shrink-0" />
                <span className="body-muted">Serving clients globally • apexnexon.tech</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="body-small text-white/60">
              © {currentYear} ApexNexon. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="body-small text-white/60 hover:text-[#00FFD1] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="body-small text-white/60 hover:text-[#00FFD1] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
