import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, CheckCircle2, MessageCircle, Instagram, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-500/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/20 blur-[100px] rounded-full opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-400 text-sm font-medium mb-8">
                <span className="flex h-2 w-2 rounded-full bg-brand-500 mr-2 animate-pulse"></span>
                New: AI-Powered Recovery Agent
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                Turn Conversations into <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-200">Revenue.</span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                The operating system for social commerce. Automate sales, recover abandoned carts, and support customers on WhatsApp & Instagram.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Book a Demo
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-brand-500 mr-2" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-brand-500 mr-2" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-brand-500 mr-2" />
                  <span>Setup in 5 minutes</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual Content */}
          <div className="flex-1 w-full max-w-[600px] lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Main abstract phone UI */}
              <div className="relative z-10 bg-dark-800 border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">
                {/* Header of phone UI */}
                <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-emerald-600 flex items-center justify-center text-white font-bold">
                      V
                    </div>
                    <div>
                      <div className="text-white font-semibold">Verse Store</div>
                      <div className="text-xs text-brand-400">Active now</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="p-2 rounded-full bg-white/5"><MessageCircle size={18} className="text-gray-400" /></div>
                  </div>
                </div>

                {/* Chat Area */}
                <div className="space-y-4">
                   {/* Message 1 */}
                   <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0" />
                    <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-none text-sm text-gray-200 max-w-[80%]">
                      Hey! I left some items in my cart. Is the promo code still valid?
                    </div>
                   </div>

                   {/* Message 2 (Bot) */}
                   <div className="flex items-start gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-brand-600 flex-shrink-0 flex items-center justify-center text-xs">V</div>
                    <div className="bg-brand-600 p-3 rounded-2xl rounded-tr-none text-sm text-white max-w-[80%] shadow-lg shadow-brand-500/20">
                      Hi Sarah! 👋 Yes, your code <span className="font-mono bg-white/20 px-1 rounded">WELCOME20</span> is valid for 2 more hours! Check out now?
                    </div>
                   </div>

                   {/* Product Card inside chat */}
                   <div className="flex justify-end">
                      <div className="bg-dark-700 border border-white/5 p-3 rounded-xl max-w-[240px] shadow-xl">
                        <div className="h-32 bg-gray-600 rounded-lg mb-3 overflow-hidden relative group">
                          <img src="https://picsum.photos/400/300" alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute top-2 right-2 bg-black/50 px-2 py-1 rounded text-xs font-medium text-white backdrop-blur-sm">
                            -20%
                          </div>
                        </div>
                        <div className="text-white font-medium text-sm">Minimalist Watch</div>
                        <div className="text-gray-400 text-xs mb-3">Black / Leather Strap</div>
                        <button className="w-full bg-white text-dark-900 text-xs font-bold py-2 rounded-lg hover:bg-gray-100 transition-colors">
                          Buy for $120.00
                        </button>
                      </div>
                   </div>
                </div>

                {/* Floating Stats Card */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -right-4 md:-right-12 bottom-20 bg-dark-700 border border-white/10 p-4 rounded-xl shadow-2xl w-48 z-20"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-green-500/20 text-green-400">
                      <ShoppingBag size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Recovered</div>
                      <div className="text-sm font-bold text-white">$1,240.50</div>
                    </div>
                  </div>
                  <div className="h-1 w-full bg-gray-600 rounded-full overflow-hidden">
                    <div className="h-full w-[70%] bg-green-500 rounded-full"></div>
                  </div>
                </motion.div>

                 {/* Integration Icons */}
                <div className="absolute -left-6 -bottom-6 flex gap-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center shadow-lg border border-white/20">
                     <Instagram className="text-white h-6 w-6" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shadow-lg border border-white/20">
                     <MessageCircle className="text-white h-6 w-6" />
                  </div>
                </div>

              </div>
              
              {/* Background Blob behind phone */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};