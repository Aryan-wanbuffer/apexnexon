import React from 'react';
import { motion } from 'framer-motion';
import { techStackData } from '../data/mock';
import { Target, Users, Zap, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
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
              <span className="body-medium text-[#00FFD1]">About ApexNexon</span>
            </motion.div>
            
            <h1 className="display-huge mb-6">
              Building the <span style={{ color: '#00FFD1' }}>Future of Business</span>
            </h1>
            <p className="body-large text-white/85 mb-8">
              Where Intelligence Meets Automation - We're on a mission to transform how businesses operate through AI and intelligent automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="pb-24 relative">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-12"
            >
              <Target size={48} className="text-[#00FFD1] mb-6" />
              <h2 className="display-medium mb-6">Our Vision</h2>
              <p className="body-large text-white/85">
                To be the global leader in AI-powered business transformation, empowering every organization to harness the full potential of intelligent automation and achieve unprecedented operational excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-12"
            >
              <Zap size={48} className="text-[#00FFD1] mb-6" />
              <h2 className="display-medium mb-6">Our Mission</h2>
              <p className="body-large text-white/85">
                To deliver enterprise-grade AI and automation solutions that drive measurable business results, combining deep technical expertise with industry knowledge to solve complex challenges and accelerate digital transformation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 relative bg-white/[0.02]">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="display-large mb-6">Our Values</h2>
            <p className="body-large text-white/85 max-w-[700px] mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation First',
                description: 'We push boundaries and embrace cutting-edge technologies to deliver solutions that set new industry standards.'
              },
              {
                title: 'Client Success',
                description: 'Your success is our success. We measure our achievements by the tangible results we deliver for your business.'
              },
              {
                title: 'Excellence Always',
                description: 'From code quality to customer service, we maintain the highest standards in everything we do.'
              },
              {
                title: 'Transparency',
                description: 'Clear communication, honest timelines, and no surprises. You always know where your project stands.'
              },
              {
                title: 'Agility',
                description: 'Fast iterations, quick pivots, and rapid delivery without compromising on quality or security.'
              },
              {
                title: 'Partnership',
                description: "We're not just a vendor, we're your long-term technology partner invested in your growth."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-[#00FFD1]/50 transition-all duration-400"
              >
                <h3 className="heading-2 mb-4 text-[#00FFD1]">{value.title}</h3>
                <p className="body-medium text-white/85">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 relative">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="display-large mb-6">Our Technology Stack</h2>
            <p className="body-large text-white/85 max-w-[700px] mx-auto">
              Enterprise-grade technologies and frameworks powering our solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStackData.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 text-center hover:bg-white/10 hover:border-[#00FFD1]/50 transition-all duration-300"
              >
                <p className="body-medium font-semibold text-white">{tech.name}</p>
                <p className="body-small text-white/60 mt-1">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 relative bg-white/[0.02]">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: '50+', label: 'Expert Team Members' },
              { icon: Globe, value: '15+', label: 'Countries Served' },
              { icon: Target, value: '100+', label: 'Projects Completed' },
              { icon: Zap, value: '99.9%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon size={48} className="text-[#00FFD1] mx-auto mb-4" />
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
              <h2 className="display-large mb-6">Join Us on the Journey</h2>
              <p className="body-large text-white/85 mb-8 max-w-[700px] mx-auto">
                Let's build the future of your business together with AI and intelligent automation.
              </p>
              <Link to="/contact" className="btn-primary">
                Get in Touch
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
