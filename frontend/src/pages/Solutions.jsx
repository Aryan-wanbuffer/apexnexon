import React from 'react';
import { motion } from 'framer-motion';
import { usePageTitle } from '../hooks/usePageTitle';
import IndustryCard from '../components/IndustryCard';
import { industriesData } from '../data/mock';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Solutions = () => {
  usePageTitle('Solutions');
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
              <span className="body-medium text-[#00FFD1]">Industry Solutions</span>
            </motion.div>
            
            <h1 className="display-huge mb-6">
              Specialized Solutions for <span style={{ color: '#00FFD1' }}>Every Industry</span>
            </h1>
            <p className="body-large text-white/85 mb-8">
              Deep industry expertise combined with cutting-edge technology to solve your most complex business challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid - animate on load so content appears right away */}
      <section className="pb-24 relative">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {industriesData.map((industry, index) => (
              <motion.div
                key={industry.id}
                className="h-full"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.2 + index * 0.05 }}
              >
                <IndustryCard industry={industry} index={index} noScrollAnimation />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-24 relative bg-white/[0.02]">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="display-large mb-6">Why Industry-Specific Matters</h2>
            <p className="body-large text-white/85 max-w-[700px] mx-auto">
              Generic solutions don't work. We understand your industry's unique challenges and regulations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Domain Expertise',
                description: 'Years of experience working with industry leaders gives us deep understanding of sector-specific requirements and best practices.'
              },
              {
                title: 'Compliance Ready',
                description: 'Built-in compliance with HIPAA, SOC 2, GDPR, PCI-DSS, and other industry regulations from day one.'
              },
              {
                title: 'Proven Results',
                description: 'Average 300% ROI and 85% operational efficiency gains across all industries we serve.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8"
              >
                <h3 className="heading-2 mb-4 text-[#00FFD1]">{item.title}</h3>
                <p className="body-medium text-white/85">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-16 text-center overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00FFD1]/10 blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="display-large mb-6">Ready to See Industry-Specific Results?</h2>
              <p className="body-large text-white/85 mb-8 max-w-[700px] mx-auto">
                Let's discuss how our industry expertise can transform your operations.
              </p>
              <Link to="/contact" className="btn-primary">
                Schedule a Consultation
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
