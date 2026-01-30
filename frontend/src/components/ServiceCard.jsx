import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, FileText, Code, Smartphone, Zap, Layers, Cloud, Store,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  brain: Brain,
  'file-text': FileText,
  code: Code,
  smartphone: Smartphone,
  zap: Zap,
  layers: Layers,
  cloud: Cloud,
  store: Store
};

const ServiceCard = ({ service, index }) => {
  const IconComponent = iconMap[service.icon] || Brain;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-400 overflow-hidden"
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#00FFD1]/20 blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-16 h-16 mb-6 flex items-center justify-center bg-[#00FFD1]/10 group-hover:bg-[#00FFD1]/20 transition-colors duration-400">
          <IconComponent size={32} className="text-[#00FFD1]" />
        </div>

        {/* Title */}
        <h3 className="heading-2 mb-4 group-hover:text-[#00FFD1] transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="body-medium mb-6 text-white/85">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {service.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 body-small text-white/70">
              <div className="w-1 h-1 bg-[#00FFD1]"></div>
              {feature}
            </li>
          ))}
        </ul>

        {/* Learn More */}
        <div className="flex items-center gap-2 text-[#00FFD1] group-hover:gap-4 transition-all duration-300 cursor-pointer">
          <span className="body-medium font-medium">Learn More</span>
          <ArrowRight size={20} />
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
