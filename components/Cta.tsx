import React from 'react';
import { Button } from './ui/Button';

export const Cta: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-900/20"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-transparent to-dark-900/90 z-0"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to supercharge your social revenue?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Join 2,000+ fast-growing brands using Verse to turn conversations into lifelong customers.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button variant="secondary" size="lg" className="w-full sm:w-auto px-12">
            Get Started for Free
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto px-12">
            Talk to Sales
          </Button>
        </div>
      </div>
    </section>
  );
};