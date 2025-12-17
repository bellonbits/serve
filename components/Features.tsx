import React from 'react';
import { MessageSquare, Zap, BarChart3, Users, Globe, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Zap className="h-6 w-6 text-yellow-400" />,
    title: "Automated Recovery",
    description: "Automatically recover up to 25% of abandoned carts via WhatsApp and SMS sequences that feel personal."
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-brand-400" />,
    title: "Unified Inbox",
    description: "Manage WhatsApp, Instagram DM, and Facebook Messenger conversations from a single collaborative dashboard."
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-purple-400" />,
    title: "Revenue Analytics",
    description: "Track exactly how much revenue each conversation generates. Attribute sales directly to support agents."
  },
  {
    icon: <Users className="h-6 w-6 text-blue-400" />,
    title: "Customer Segmentation",
    description: "Send broadcast campaigns to specific customer segments based on their purchase history and behavior."
  },
  {
    icon: <Globe className="h-6 w-6 text-pink-400" />,
    title: "Multi-Language AI",
    description: "Our AI understands and responds in 50+ languages, helping you scale globally without hiring more agents."
  },
  {
    icon: <Lock className="h-6 w-6 text-emerald-400" />,
    title: "Enterprise Security",
    description: "GDPR compliant, end-to-end encryption, and role-based access control for your entire team."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-dark-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Everything you need to scale social sales
          </h2>
          <p className="text-lg text-gray-400">
            Stop losing customers to slow responses. Verse gives you the tools to engage, convert, and retain customers on their favorite apps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-900/50 border border-white/5 p-8 rounded-2xl hover:bg-dark-900 hover:border-brand-500/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};