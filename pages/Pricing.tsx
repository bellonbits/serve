import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: 29,
    description: "Perfect for small brands just getting started with social commerce.",
    features: [
      "500 Monthly Conversations",
      "1 WhatsApp Number",
      "Basic Automation",
      "Abandoned Cart Recovery",
      "Email Support"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Growth",
    price: 99,
    description: "For scaling brands that need advanced automation and analytics.",
    features: [
      "5,000 Monthly Conversations",
      "3 Team Seats",
      "Advanced AI Agent",
      "Broadcast Campaigns",
      "Shopify & WooCommerce Sync",
      "Priority Support"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Scale",
    price: 299,
    description: "Enterprise-grade power for high-volume merchants.",
    features: [
      "Unlimited Conversations",
      "Unlimited Team Seats",
      "Custom AI Training",
      "Dedicated Account Manager",
      "API Access",
      "Custom Integration Support"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Simple, transparent pricing</h1>
          <p className="text-xl text-gray-400 mb-8">
            Choose the plan that's right for your business. No hidden fees.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button 
              onClick={() => setAnnual(!annual)}
              className="w-14 h-8 bg-dark-700 rounded-full p-1 relative transition-colors duration-200 border border-white/10"
            >
              <div className={`w-6 h-6 bg-brand-500 rounded-full shadow-lg transform transition-transform duration-200 ${annual ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm font-medium ${annual ? 'text-white' : 'text-gray-500'}`}>
              Yearly <span className="text-brand-500 text-xs ml-1 font-bold">SAVE 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`rounded-3xl p-8 border ${
                plan.popular 
                  ? 'bg-dark-800 border-brand-500 ring-1 ring-brand-500/50 shadow-[0_0_30px_rgba(34,197,94,0.1)]' 
                  : 'bg-dark-900/50 border-white/10'
              } flex flex-col relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -mt-3 -mr-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-500 text-white shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm h-10">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">$</span>
                  <span className="text-5xl font-bold text-white tracking-tight">
                    {annual ? Math.round(plan.price * 0.8) : plan.price}
                  </span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                {annual && (
                  <div className="text-brand-400 text-sm mt-2">
                    Billed ${Math.round(plan.price * 0.8) * 12} yearly
                  </div>
                )}
              </div>

              <Button 
                variant={plan.popular ? 'secondary' : 'outline'} 
                className="w-full mb-8"
              >
                {plan.cta}
              </Button>

              <div className="flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-brand-500 shrink-0 mr-3" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Need a custom solution?</h3>
            <p className="text-gray-400 mb-6">
                We offer tailored packages for large enterprises with high volume needs.
            </p>
            <Button variant="outline" size="sm">Contact Enterprise Sales</Button>
        </div>

      </div>
    </div>
  );
};