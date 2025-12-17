import React from 'react';
import { Linkedin, Twitter, Globe, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-dark-900">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-900/10 blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            We're building the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-200">Operating System</span> for Social Commerce
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Verse empowers businesses to turn social interactions into revenue. We believe the future of commerce is conversational, personal, and instant.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-dark-800 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 flex justify-center md:justify-end"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4E03AQGfChE1JzMpKQ/profile-displayphoto-shrink_800_800/B4EZpvSmDsGoAY-/0/1762803738423?e=2147483647&v=beta&t=7oFZxzWcOIpv1KUSNqsP9uoL8UCaa_LRLb5-xow2WmA" 
                  alt="Peter Gatitu Mwangi" 
                  className="relative w-80 h-80 object-cover rounded-2xl shadow-2xl border border-white/10"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-dark-900/90 backdrop-blur-md p-4 rounded-xl border border-white/10">
                   <div className="text-white font-bold text-lg">Peter Gatitu Mwangi</div>
                   <div className="text-brand-400 text-sm">Founder & CEO</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Meet the Founder</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Peter is a visionary entrepreneur dedicated to solving the disconnect between social engagement and e-commerce transactions in emerging markets.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                With deep expertise in product development and market expansion, Peter founded Verse to give businesses the tools they need to automate sales where their customers already are: WhatsApp, Instagram, and SMS.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://x.com/gatitu_mwangi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-dark-700 hover:bg-dark-600 text-white rounded-full transition-colors font-medium border border-white/5"
                >
                  <Twitter size={18} />
                  Follow on X
                </a>
                <a 
                  href="https://ke.linkedin.com/in/petergat2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors font-medium"
                >
                  <Linkedin size={18} />
                  Connect on LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/5">
              <div className="text-4xl font-bold text-white mb-2">2,000+</div>
              <div className="text-brand-400 font-medium mb-4">Merchants</div>
              <p className="text-gray-400 text-sm">Empowering businesses across the continent to sell more.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/5">
              <div className="text-4xl font-bold text-white mb-2">$50M+</div>
              <div className="text-brand-400 font-medium mb-4">Revenue Processed</div>
              <p className="text-gray-400 text-sm">Helping our merchants grow their GMV year over year.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/5">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-brand-400 font-medium mb-4">Languages Supported</div>
              <p className="text-gray-400 text-sm">Breaking language barriers with AI-driven conversations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};