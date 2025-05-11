
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

// Service category data
const services = [
  {
    id: 1,
    name: "Plumbing",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    description: "Professional plumbing services for repairs, installations, and maintenance."
  },
  {
    id: 2,
    name: "Electrical Work",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description: "Reliable electricians for all your electrical needs and emergencies."
  },
  {
    id: 3,
    name: "Cleaning",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    ),
    description: "Professional home and office cleaning services for a spotless environment."
  },
  {
    id: 4,
    name: "Carpentry",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    description: "Expert carpentry services for furniture repairs, installations, and custom work."
  },
  {
    id: 5,
    name: "Painting",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    description: "Professional painting services for interior and exterior walls with quality finishes."
  },
  {
    id: 6,
    name: "Delivery",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    description: "Fast and reliable delivery helpers for moving items and packages."
  },
  {
    id: 7,
    name: "Appliance Repair",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    description: "Expert repair services for all types of home appliances and electronics."
  },
  {
    id: 8,
    name: "Gardening",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    description: "Professional gardening and landscaping services for home and office spaces."
  },
];

const categories = [
  "All",
  "Home Maintenance",
  "Cleaning", 
  "Delivery",
  "Beauty & Wellness"
];

const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleServices, setVisibleServices] = useState(6);
  
  const handleSeeMore = () => {
    setVisibleServices(services.length);
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Choose from our wide range of professional services, all delivered by verified experts in their field.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`rounded-full px-6 ${
                activeCategory === category 
                  ? "bg-brand-blue hover:bg-brand-dark text-white" 
                  : "border-gray-300 text-gray-700 hover:text-brand-blue hover:border-brand-blue"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.slice(0, visibleServices).map((service) => (
            <div
              key={service.id}
              className="service-card bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="service-icon text-brand-blue transition-all duration-300 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Button 
                variant="outline" 
                className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
              >
                Book Now
              </Button>
            </div>
          ))}
        </div>
        
        {visibleServices < services.length && (
          <div className="text-center mt-10">
            <Button 
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-medium rounded-full px-8"
              onClick={handleSeeMore}
            >
              See More Services
            </Button>
          </div>
        )}
        
        <div className="mt-16 bg-brand-light rounded-xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Need a Service Not Listed?</h3>
              <p className="text-gray-600 mb-4">
                Task Express offers 69+ service categories. Download our app to explore all available services in your area 
                or contact us for specific requirements.
              </p>
              <Button className="bg-brand-blue hover:bg-brand-dark text-white font-medium rounded-full px-8">
                Contact Us
              </Button>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white p-5 rounded-lg shadow-md flex gap-4 items-center">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Customized Services</h4>
                  <p className="text-sm text-gray-600">Tailored solutions for your specific needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
