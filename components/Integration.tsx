import React from 'react';

const Integrations: React.FC = () => {
  const brands = [
    { name: 'Shopify', logo: 'https://logo.clearbit.com/shopify.com' },
    { name: 'WooCommerce', logo: 'https://logo.clearbit.com/woocommerce.com' },
    { name: 'Magento', logo: 'https://logo.clearbit.com/magento.com' },
    { name: 'WhatsApp', logo: 'https://logo.clearbit.com/whatsapp.com' },
    { name: 'Instagram', logo: 'https://logo.clearbit.com/instagram.com' },
    { name: 'Salesforce', logo: 'https://logo.clearbit.com/salesforce.com' },
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-brand-400 uppercase tracking-wider">Works with your stack</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand, idx) => (
            <div key={idx} className="flex items-center justify-center transition-opacity hover:opacity-100">
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="h-8 md:h-10 w-auto invert brightness-0 hover:invert-0 hover:brightness-100 transition-all duration-300" 
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="ml-3 text-lg font-semibold text-gray-500 hidden hover:block group-hover:text-white">{brand.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
            <p className="text-gray-400">And 50+ other native integrations via API.</p>
        </div>
      </div>
    </section>
  );
};

export default Integrations;