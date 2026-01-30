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

const IndustryCard = ({ industry, index, noScrollAnimation }) => {
  const IconComponent = iconMap[industry.icon] || Briefcase;

  const cardClass = "group relative h-full flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-[#00FFD1]/50 transition-all duration-400";

  const cardContent = (
    <>
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon */}
        <div className="w-14 h-14 mb-6 flex items-center justify-center bg-[#00FFD1]/10 group-hover:bg-[#00FFD1]/20 transition-colors duration-400 shrink-0">
          <IconComponent size={28} className="text-[#00FFD1]" />
        </div>

        {/* Name */}
        <h3 className="heading-2 mb-4 group-hover:text-[#00FFD1] transition-colors duration-300 shrink-0">
          {industry.name}
        </h3>

        {/* Description - flex-1 so solutions sit at bottom */}
        <p className="body-medium mb-6 text-white/85 flex-1 min-h-0">
          {industry.description}
        </p>

        {/* Solutions */}
        <div className="flex flex-wrap gap-2 shrink-0">
          {industry.solutions.map((solution, idx) => (
            <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 body-small text-white/70">
              {solution}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  if (noScrollAnimation) {
    return (
      <div className={cardClass}>
        {cardContent}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cardClass}
    >
      {cardContent}
    </motion.div>
  );
};

export default IndustryCard;
