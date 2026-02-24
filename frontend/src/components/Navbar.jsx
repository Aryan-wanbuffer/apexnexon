import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-white/10 transition-all duration-300 ${isScrolled ? 'backdrop-blur-xl bg-black/95' : 'bg-black'}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-[7.6923%] flex items-center justify-between h-20 sm:h-24 md:h-28 lg:h-32">
        <Link to="/" className="flex items-center z-50 h-20 sm:h-24 md:h-28 lg:h-32">
          <motion.span
            className="block h-full min-w-[140px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[220px] bg-[#00FFD1]"
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
            animate={{
              opacity: 1,
              scale: [1, 1.04, 1],
            }}
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

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-base font-medium transition-colors duration-300 ${
                isActive(link.path) 
                  ? 'text-[#00FFD1]' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 z-50 hover:bg-white/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="lg:hidden fixed top-20 sm:top-24 md:top-28 lg:top-32 left-0 right-0 bg-black border-b border-white/10 z-40 max-h-[calc(100vh-5rem)] sm:max-h-[calc(100vh-6rem)] md:max-h-[calc(100vh-7rem)] lg:max-h-[calc(100vh-8rem)] overflow-y-auto">
            <div className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xl font-medium py-3 transition-colors duration-300 ${
                    isActive(link.path) 
                      ? 'text-[#00FFD1]' 
                      : 'text-white/80 hover:text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-primary mt-4 justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
