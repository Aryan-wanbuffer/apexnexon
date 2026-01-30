import React from 'react';
import { motion } from 'framer-motion';
import { usePageTitle } from '../hooks/usePageTitle';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { servicesData, testimonialsData, whyChooseUsData, industriesData } from '../data/mock';
import { 
  ShieldCheck, Cpu, Rocket, Layers, TrendingUp, Headphones, ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  'shield-check': ShieldCheck,
  cpu: Cpu,
  rocket: Rocket,
  layers: Layers,
  'trending-up': TrendingUp,
  headphones: Headphones
};

const Home = () => {
  usePageTitle('AI & Automation Solutions');
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <HeroSection />

      {/* Trusted By */}
      <section className="py-12 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm font-medium text-white/50 uppercase tracking-wider mb-8"
          >
            Trusted by teams worldwide
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-white/40"
          >
            <span className="text-lg font-semibold tracking-tight">Enterprise</span>
            <span className="text-lg font-semibold tracking-tight">Startups</span>
            <span className="text-lg font-semibold tracking-tight">Healthcare</span>
            <span className="text-lg font-semibold tracking-tight">Finance</span>
            <span className="text-lg font-semibold tracking-tight">Logistics</span>
            <span className="text-lg font-semibold tracking-tight">E‑commerce</span>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 relative">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="display-large mb-6">Our Services</h2>
            <p className="body-large text-white/85 max-w-[700px] mx-auto">
              Comprehensive AI, automation, and software solutions designed to transform your business operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 6).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link to="/services" className="btn-primary">
              View All Services
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative bg-white/[0.02]">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="display-large mb-6">Why Choose ApexNexon</h2>
            <p className="body-large text-white/85 max-w-[700px] mx-auto">
              Partner with a team that combines deep technical expertise with proven business results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsData.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-400"
                >
                  <div className="w-14 h-14 mb-6 flex items-center justify-center bg-[#00FFD1]/10 group-hover:bg-[#00FFD1]/20 transition-colors duration-400">
                    <IconComponent size={28} className="text-[#00FFD1]" />
                  </div>
                  <h3 className="heading-2 mb-4 group-hover:text-[#00FFD1] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="body-medium text-white/85">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 relative">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="display-large mb-6">Industries We Serve</h2>
            <p className="body-large text-white/85 max-w-[700px] mx-auto">
              Delivering specialized solutions across multiple sectors with proven industry expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesData.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-[#00FFD1]/50 transition-all duration-400"
              >
                <h3 className="heading-2 mb-3 group-hover:text-[#00FFD1] transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="body-medium text-white/85">{industry.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link to="/solutions" className="btn-primary">
              Explore Solutions
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative bg-white/[0.02]">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="display-large mb-6">What Our Clients Say</h2>
            <p className="body-large text-white/85 max-w-[700px] mx-auto">
              Trusted by leading companies across industries to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-16 text-center overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00FFD1]/10 blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="display-large mb-6">Ready to Transform Your Business?</h2>
              <p className="body-large text-white/85 mb-8 max-w-[700px] mx-auto">
                Let's discuss how AI and automation can drive your business forward. Book a free consultation with our experts today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary">
                  Book a Consultation
                  <ArrowRight size={20} />
                </Link>
                <Link to="/case-studies" className="btn-secondary">
                  View Our Work
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
