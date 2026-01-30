import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-[#00FFD1]/50 transition-all duration-400"
    >
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={20} fill="#00FFD1" stroke="#00FFD1" />
        ))}
      </div>

      {/* Content */}
      <p className="body-medium text-white/85 mb-6 italic">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-white/10">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="body-medium font-semibold text-white">{testimonial.name}</div>
          <div className="body-small text-white/60">{testimonial.position}, {testimonial.company}</div>
          <div className="body-small text-white/50 mt-1">Case study client · As told to ApexNexon</div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
