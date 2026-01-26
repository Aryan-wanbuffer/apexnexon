import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, Truck, DollarSign, ShoppingCart, Book, Briefcase
} from 'lucide-react';

const iconMap = {
  heart: Heart,
  truck: Truck,
  'dollar-sign': DollarSign,
  'shopping-cart': ShoppingCart,
  book: Book,
  briefcase: Briefcase
};

const IndustryCard = ({ industry, index }) => {
  const IconComponent = iconMap[industry.icon] || Briefcase;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-[#00FFD1]/50 transition-all duration-400"
    >
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-14 h-14 mb-6 flex items-center justify-center bg-[#00FFD1]/10 group-hover:bg-[#00FFD1]/20 transition-colors duration-400">
          <IconComponent size={28} className="text-[#00FFD1]" />
        </div>

        {/* Name */}
        <h3 className="heading-2 mb-4 group-hover:text-[#00FFD1] transition-colors duration-300">
          {industry.name}
        </h3>

        {/* Description */}
        <p className="body-medium mb-6 text-white/85">
          {industry.description}
        </p>

        {/* Solutions */}
        <div className="flex flex-wrap gap-2">
          {industry.solutions.map((solution, idx) => (
            <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 body-small text-white/70">
              {solution}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default IndustryCard;
