import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import { servicesData } from '../data/mock';
import {
  Brain,
  FileText,
  Code,
  Smartphone,
  Zap,
  Layers,
  Cloud,
  Store,
  Globe,
  ArrowRight,
  CheckCircle2,
  Target,
  BarChart3,
  Shield
} from 'lucide-react';

const iconMap = {
  brain: Brain,
  'file-text': FileText,
  code: Code,
  smartphone: Smartphone,
  zap: Zap,
  layers: Layers,
  cloud: Cloud,
  store: Store,
  globe: Globe
};

// Default content when service has no extended fields
function getServiceDetail(service) {
  const longDescription =
    service.longDescription ||
    `${service.description} We work with enterprises to design, implement, and scale solutions that integrate with your existing systems and deliver measurable results. Our approach combines proven methodologies with industry best practices.`;
  const benefits =
    service.benefits ||
    service.features.map((f) => `Comprehensive ${f} tailored to your requirements and scale.`);
  const outcomes = service.outcomes || [
    { label: 'Time to value', value: '8–12 weeks' },
    { label: 'Client satisfaction', value: '98%' },
    { label: 'Avg ROI', value: '300%' }
  ];
  const approach = service.approach || [
    { title: 'Discovery', description: 'Deep dive into your needs, data, and success criteria.' },
    { title: 'Design & build', description: 'Architecture, development, and integration with your stack.' },
    { title: 'Deploy & launch', description: 'Production rollout with monitoring and support.' },
    { title: 'Optimize', description: 'Continuous improvement and scaling.' }
  ];
  return { longDescription, benefits, outcomes, approach };
}

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => String(s.id) === id);

  usePageTitle(service ? service.title : 'Service');

  if (!service) {
    return (
      <div className="bg-[#050508] min-h-screen pt-[80px] flex items-center justify-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <h1 className="text-3xl font-bold text-white mb-4">Service not found</h1>
          <p className="text-white/70 mb-8">
            The service you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00FFD1]/10 border border-[#00FFD1]/30 text-[#00FFD1] hover:bg-[#00FFD1]/20 transition-colors"
          >
            View all services
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    );
  }

  const IconComponent = iconMap[service.icon] || Code;
  const { longDescription, benefits, outcomes, approach } = getServiceDetail(service);

  return (
    <div className="min-h-screen pt-[80px] relative bg-[#050508]">
      {/* Page-level gradient for depth */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#08080c] to-black opacity-90" />
        <div className="absolute top-0 left-0 w-full h-1/2" style={{ background: 'radial-gradient(ellipse 80% 50% at 80% 20%, rgba(0,255,209,0.06), transparent 70%)' }} />
        <div className="absolute bottom-1/3 right-0 w-1/2 h-1/2 opacity-60" style={{ background: 'radial-gradient(ellipse 60% 60% at 100% 80%, rgba(0,255,209,0.04), transparent 70%)' }} />
      </div>

      {/* Hero — large enterprise-style */}
      <section className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 2px),
                repeating-linear-gradient(-90deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 2px)`,
              backgroundSize: '48px 48px'
            }}
          />
        </div>
        {/* Hero glow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[400px] bg-[#00FFD1]/08 blur-[120px] pointer-events-none" aria-hidden="true" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-[7.6923%] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[900px]"
          >
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 mb-10 sm:mb-12">
              <div className="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 bg-[#00FFD1]/10 border border-[#00FFD1]/30 shrink-0">
                <IconComponent size={48} className="text-[#00FFD1] sm:w-14 sm:h-14" />
              </div>
              <div className="inline-block px-4 py-2 bg-[#00FFD1]/10 border border-[#00FFD1]/30">
                <span className="text-sm font-medium text-[#00FFD1]">Our Services</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-white mb-8 sm:mb-10">
              {service.title}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-[800px] leading-relaxed">
              {longDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why enterprises choose us */}
      <section className="py-20 sm:py-24 lg:py-28 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-white/[0.03] to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0,255,209,0.08), transparent 50%)' }} aria-hidden="true" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-[7.6923%] relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Why enterprises choose us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-white/75 max-w-[720px] mb-16"
          >
            We combine deep technical expertise with enterprise delivery standards to deliver outcomes that scale.
          </motion.p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {benefits.slice(0, 4).map((benefit, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex gap-4 p-6 lg:p-8 bg-white/[0.06] backdrop-blur-sm border border-white/10 hover:border-white/15 transition-colors"
              >
                <CheckCircle2 size={28} className="text-[#00FFD1] shrink-0 mt-1" />
                <span className="text-base lg:text-lg text-white/90 leading-relaxed">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* What we deliver — features in large cards */}
      <section className="py-20 sm:py-24 lg:py-28 relative z-10">
        <div className="absolute inset-0 bg-white/[0.015]" aria-hidden="true" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(255,255,255,0.02) 80px, rgba(255,255,255,0.02) 81px),
          repeating-linear-gradient(-90deg, transparent, transparent 80px, rgba(255,255,255,0.02) 80px, rgba(255,255,255,0.02) 81px)` }} aria-hidden="true" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-[7.6923%] relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            What we deliver
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-white/75 max-w-[720px] mb-16"
          >
            End-to-end capabilities tailored to your industry and scale.
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="p-8 lg:p-10 bg-white/[0.06] backdrop-blur-sm border border-white/10 group hover:border-[#00FFD1]/30 hover:bg-white/[0.08] transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-[#00FFD1]/10 mb-6 group-hover:bg-[#00FFD1]/20 transition-colors">
                  <Target size={28} className="text-[#00FFD1]" />
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3">{feature}</h3>
                <p className="text-base text-white/75 leading-relaxed">
                  Enterprise-grade {feature.toLowerCase()} designed for reliability, scale, and integration with your existing systems.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes / stats */}
      <section className="py-20 sm:py-24 lg:py-28 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#00FFD1]/05 blur-[100px] pointer-events-none" aria-hidden="true" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-[7.6923%] relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-16 text-center"
          >
            Proven outcomes
          </motion.h2>
          <div className="grid sm:grid-cols-3 gap-8 lg:gap-12">
            {outcomes.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center p-8 lg:p-12 border border-white/10 bg-white/[0.06] backdrop-blur-sm hover:border-[#00FFD1]/20 hover:bg-white/[0.08] transition-all duration-300"
              >
                <BarChart3 size={40} className="text-[#00FFD1] mx-auto mb-4" />
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00FFD1] mb-2">
                  {item.value}
                </div>
                <div className="text-base lg:text-lg text-white/80">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="py-20 sm:py-24 lg:py-28 relative z-10">
        <div className="absolute inset-0 bg-white/[0.015]" aria-hidden="true" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-[7.6923%] relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Our approach
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-white/75 max-w-[720px] mb-16"
          >
            A structured, transparent process from discovery to optimization.
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative"
              >
                <div className="text-5xl lg:text-6xl font-bold text-white/10 mb-4">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-base text-white/75 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security / trust (optional enterprise touch) */}
      <section className="py-16 lg:py-20 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/[0.02]" aria-hidden="true" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-[7.6923%] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col md:flex-row items-center gap-8 p-8 lg:p-12 border border-white/10 bg-white/[0.06] backdrop-blur-sm overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FFD1]/05 blur-[80px] pointer-events-none" aria-hidden="true" />
            <div className="relative z-10 flex items-center justify-center w-20 h-20 bg-[#00FFD1]/10 shrink-0">
              <Shield size={40} className="text-[#00FFD1]" />
            </div>
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Enterprise-grade security and compliance
              </h3>
              <p className="text-lg text-white/80 max-w-[720px]">
                Our solutions are built with security and governance in mind. We follow industry standards and can align with your compliance requirements (SOC 2, HIPAA, GDPR, and more).
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 lg:py-28 relative z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-[7.6923%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white/[0.06] backdrop-blur-sm border border-white/10 p-16 lg:p-24 text-center overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00FFD1]/12 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-[#00FFD1]/06 blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 max-w-[900px] mx-auto leading-tight">
                Ready to get started with {service.title}?
              </h2>
              <p className="text-lg lg:text-xl text-white/85 mb-10 max-w-[640px] mx-auto">
                Tell us about your project. Our team will work with you to define scope, timeline, and success metrics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00FFD1] text-black font-semibold hover:bg-[#00FFD1]/90 transition-colors text-lg"
                >
                  Get in touch
                  <ArrowRight size={22} />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white hover:bg-white/10 transition-colors text-lg"
                >
                  View case studies
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to services */}
      <section className="pb-24 relative z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-[7.6923%] text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-white/70 hover:text-[#00FFD1] transition-colors text-base lg:text-lg"
          >
            <ArrowRight size={20} className="rotate-180" />
            View all services
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
