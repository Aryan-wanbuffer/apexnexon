import React from 'react';
import { motion } from 'framer-motion';
import CaseStudyCard from '../components/CaseStudyCard';
import { caseStudiesData } from '../data/mock';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
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
              <span className="body-medium text-[#00FFD1]">Success Stories</span>
            </motion.div>
            
            <h1 className="display-huge mb-6">
              Real Results, <span style={{ color: '#00FFD1' }}>Real Impact</span>
            </h1>
            <p className="body-large text-white/85 mb-8">
              Discover how we've helped businesses across industries achieve transformative results with AI and automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-24 relative">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <div className="grid lg:grid-cols-2 gap-12">
            {caseStudiesData.map((caseStudy, index) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 relative bg-white/[0.02]">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="display-large mb-6">Cumulative Impact</h2>
            <p className="body-large text-white/85 max-w-[700px] mx-auto">
              The collective results of our projects speak for themselves
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '$8.5M+', label: 'Annual Cost Savings' },
              { value: '87%', label: 'Avg Efficiency Gain' },
              { value: '99.2%', label: 'Avg System Uptime' },
              { value: '4.2 months', label: 'Avg ROI Timeline' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 text-center"
              >
                <div className="display-large text-[#00FFD1] mb-2">{stat.value}</div>
                <div className="body-medium text-white/85">{stat.label}</div>
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
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-16 text-center overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00FFD1]/10 blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="display-large mb-6">Your Success Story Starts Here</h2>
              <p className="body-large text-white/85 mb-8 max-w-[700px] mx-auto">
                Let's discuss how we can deliver similar transformative results for your business.
              </p>
              <Link to="/contact" className="btn-primary">
                Start Your Project
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
