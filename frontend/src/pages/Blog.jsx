import React from 'react';
import { motion } from 'framer-motion';
import { blogPostsData } from '../data/mock';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
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
              <span className="body-medium text-[#00FFD1]">Insights & Updates</span>
            </motion.div>
            
            <h1 className="display-huge mb-6">
              ApexNexon <span style={{ color: '#00FFD1' }}>Blog</span>
            </h1>
            <p className="body-large text-white/85 mb-8">
              Insights on AI, automation, and digital transformation from our expert team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24 relative">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPostsData.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-[#00FFD1]/50 transition-all duration-400 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-[#00FFD1]/20 border border-[#00FFD1]/50 text-[#00FFD1] body-small">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-white/60">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="body-small">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span className="body-small">{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="heading-2 mb-3 group-hover:text-[#00FFD1] transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="body-medium text-white/85 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-[#00FFD1] group-hover:gap-4 transition-all duration-300">
                    <span className="body-medium font-medium">Read More</span>
                    <ArrowRight size={20} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 relative bg-white/[0.02]">
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
              <h2 className="display-large mb-6">Stay Updated</h2>
              <p className="body-large text-white/85 mb-8 max-w-[700px] mx-auto">
                Subscribe to our newsletter for the latest insights on AI, automation, and digital transformation.
              </p>
              <div className="max-w-[500px] mx-auto flex gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/5 border border-white/10 text-white body-medium focus:outline-none focus:border-[#00FFD1]/50"
                />
                <button className="btn-primary">Subscribe</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
