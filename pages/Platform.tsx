import React from 'react';
import { Button } from '../components/ui/Button';
import { MessageSquare, ShoppingCart, BarChart, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const Platform: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-dark-900">
       <section className="py-20 text-center px-4">
          <div className="inline-block p-2 rounded-full bg-brand-500/10 border border-brand-500/20 mb-6">
              <span className="text-brand-400 text-sm font-semibold px-2">The Verse Platform</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            One platform, <br className="hidden md:block"/> infinite possibilities.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Discover the tools that turn your social channels into your highest performing sales channels.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            className="w-full max-w-5xl mx-auto rounded-2xl border border-white/10 shadow-2xl opacity-80"
            alt="Dashboard Preview"
          />
       </section>

       {/* Feature 1 */}
       <section className="py-24 border-t border-white/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1 space-y-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                        <MessageSquare size={24} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Unified Inbox</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Stop switching between apps. Respond to WhatsApp, Instagram DMs, Facebook Messenger, and SMS from one collaborative dashboard. Assign conversations to agents, leave internal notes, and never miss a sale.
                    </p>
                    <ul className="space-y-3">
                        {['Multi-agent support', 'Quick replies', 'Automatic routing'].map(item => (
                            <li key={item} className="flex items-center text-gray-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 bg-dark-800 p-8 rounded-3xl border border-white/10">
                    {/* Placeholder for inbox UI */}
                    <div className="space-y-4">
                         {[1, 2, 3].map(i => (
                             <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5">
                                 <div className="w-10 h-10 rounded-full bg-gray-700" />
                                 <div className="flex-1">
                                     <div className="h-3 w-24 bg-gray-600 rounded mb-2" />
                                     <div className="h-2 w-full bg-gray-700 rounded" />
                                 </div>
                                 <div className="text-xs text-gray-500">2m</div>
                             </div>
                         ))}
                    </div>
                </div>
            </div>
         </div>
       </section>

       {/* Feature 2 */}
       <section className="py-24 border-t border-white/5 bg-white/[0.02]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
                <div className="flex-1 space-y-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center text-brand-400">
                        <ShoppingCart size={24} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Abandoned Cart Recovery</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Don't let sales slip away. Verse detects when a customer leaves checkout and automatically sends a friendly reminder on WhatsApp. It's not spammy—it's helpful, and it converts 5x better than email.
                    </p>
                    <ul className="space-y-3">
                        {['Personalized messages', 'One-click checkout links', 'Dynamic discount codes'].map(item => (
                            <li key={item} className="flex items-center text-gray-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mr-3" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1">
                     <div className="bg-gradient-to-br from-brand-900/50 to-dark-900 p-1 rounded-3xl border border-brand-500/30">
                        <div className="bg-dark-900 rounded-[22px] p-6 h-[400px] flex flex-col justify-center items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-brand-500 flex items-center justify-center mb-6 animate-pulse">
                                <ShoppingCart className="text-white" />
                            </div>
                            <div className="text-white text-xl font-bold mb-2">Cart Recovered!</div>
                            <div className="text-gray-400">+$145.00 Revenue</div>
                        </div>
                     </div>
                </div>
            </div>
         </div>
       </section>
       
       <section className="py-24 text-center">
         <div className="max-w-2xl mx-auto px-4">
             <h2 className="text-3xl font-bold text-white mb-6">Ready to see it in action?</h2>
             <Button size="lg" variant="secondary">Book a Demo</Button>
         </div>
       </section>
    </div>
  );
};