import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "Verse transformed our Instagram DM strategy. We went from manually replying to 100s of messages to automating 80% of our sales conversations.",
    author: "Sarah Jenkins",
    role: "Marketing Director",
    company: "Lumina Fashion",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "The abandoned cart recovery on WhatsApp is a game changer. Our recovery rate jumped from 5% on email to 22% with Verse.",
    author: "David Chen",
    role: "Founder",
    company: "TechGear Pro",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "Setting up was incredibly easy. The support team, led by Peter, really understands the African market nuances.",
    author: "Amara Okeke",
    role: "Head of Sales",
    company: "BeautyBox",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by modern brands
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See why fast-growing companies switch to Verse to power their social commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-dark-800 p-8 rounded-2xl border border-white/5 relative hover:border-brand-500/20 transition-colors">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.author} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="text-white font-medium text-sm">{t.author}</div>
                  <div className="text-gray-500 text-xs">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};