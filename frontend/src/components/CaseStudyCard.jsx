import React from 'react';
import { motion } from 'framer-motion';

const CaseStudyCard = ({ caseStudy, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-[#00FFD1]/50 transition-all duration-400"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={caseStudy.image} 
          alt={caseStudy.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <span className="px-3 py-1 bg-[#00FFD1]/20 border border-[#00FFD1]/50 text-[#00FFD1] body-small">
            {caseStudy.industry}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="heading-2 mb-2 group-hover:text-[#00FFD1] transition-colors duration-300">
          {caseStudy.title}
        </h3>
        <p className="body-small text-white/60 mb-4">{caseStudy.client}</p>

        {/* Problem */}
        <div className="mb-4">
          <h4 className="body-medium font-semibold text-white/90 mb-2">Challenge:</h4>
          <p className="body-small text-white/70">{caseStudy.problem}</p>
        </div>

        {/* Solution */}
        <div className="mb-4">
          <h4 className="body-medium font-semibold text-white/90 mb-2">Solution:</h4>
          <p className="body-small text-white/70">{caseStudy.solution}</p>
        </div>

        {/* Results */}
        <div className="mb-6">
          <h4 className="body-medium font-semibold text-[#00FFD1] mb-3">Results:</h4>
          <div className="grid grid-cols-2 gap-3">
            {caseStudy.results.map((result, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-3">
                <p className="body-small text-white/85">{result}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {caseStudy.technologies.map((tech, idx) => (
            <span key={idx} className="px-3 py-1 bg-[#00FFD1]/10 border border-[#00FFD1]/30 text-[#00FFD1] body-small">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;
