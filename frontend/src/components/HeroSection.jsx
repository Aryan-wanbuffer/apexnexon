import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 1px, transparent 1px, transparent 7.6923%),
              repeating-linear-gradient(-90deg, #fff, #fff 1px, transparent 1px, transparent 7.6923%)
            `,
            backgroundSize: '100% 100%'
          }}
        ></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-[7.6923%] w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-[#00FFD1]/10 border border-[#00FFD1]/30 mb-6"
            >
              <span className="body-medium text-[#00FFD1]">Where Intelligence Meets Automation</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="display-huge mb-6"
            >
              Transform Your Business with{' '}
              <span style={{ color: '#00FFD1' }}>AI & Automation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="body-large text-white/85 mb-8 max-w-[600px]"
            >
              Build intelligent systems, automate operations, and scale your business with cutting-edge AI, OCR, RPA, and custom software solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="btn-primary">
                Get Started
                <ArrowRight size={20} />
              </Link>
              <Link to="/case-studies" className="btn-secondary">
                View Case Studies
                <PlayCircle size={20} />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10"
            >
              <div>
                <div className="display-medium text-[#00FFD1] mb-2">50+</div>
                <div className="body-small text-white/60">Projects Delivered</div>
              </div>
              <div>
                <div className="display-medium text-[#00FFD1] mb-2">98%</div>
                <div className="body-small text-white/60">Client Satisfaction</div>
              </div>
              <div>
                <div className="display-medium text-[#00FFD1] mb-2">300%</div>
                <div className="body-small text-white/60">Avg ROI</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Spline Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[600px] lg:h-[700px] flex items-center justify-center"
          >
            <div className="w-full h-full relative" style={{ overflow: 'visible' }}>
              <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient Glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#00FFD1]/10 blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
