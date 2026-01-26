import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-[7.6923%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4" style={{ color: '#00FFD1' }}>
              ApexNexon
            </div>
            <p className="body-muted mb-6">
              Where Intelligence Meets Automation. Building the future of business with AI and intelligent systems.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#00FFD1] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#00FFD1] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#00FFD1] transition-colors">
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
                <span className="body-muted">contact@apexnexon.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[#00FFD1] mt-1 flex-shrink-0" />
                <span className="body-muted">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#00FFD1] mt-1 flex-shrink-0" />
                <span className="body-muted">San Francisco, CA, USA</span>
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
