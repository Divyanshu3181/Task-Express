
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const countRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start the count animation
          entry.target.classList.add('after:animate-count-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => {
      if (countRef.current) observer.unobserve(countRef.current);
    };
  }, []);

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 animated-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Your One-Stop Solution for <span className="text-brand-blue">Blue-Collar Services</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-600 max-w-lg">
              Connect with verified professionals across India for plumbing, electrical work, cleaning, carpentry, and 
              <span 
                ref={countRef}
                className="font-semibold relative text-brand-orange ml-1 after:content-['69+'] after:absolute after:top-0 after:left-0 after:text-brand-orange"
              > </span> more service categories.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                className="bg-brand-orange hover:bg-brand-orange/90 text-white font-medium rounded-full px-8 py-6 text-lg animate-pulse-light"
              >
                Download App
              </Button>
              <Button 
                variant="outline" 
                className="border-brand-blue text-brand-blue hover:text-white hover:bg-brand-blue font-medium rounded-full px-8 py-6 text-lg"
              >
                Our Services
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 text-center">
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <p className="text-3xl font-bold text-brand-blue">30s</p>
                <p className="text-sm text-gray-600">Instant Connection</p>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <p className="text-3xl font-bold text-brand-blue">5000+</p>
                <p className="text-sm text-gray-600">Verified Workers</p>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <p className="text-3xl font-bold text-brand-blue">50+</p>
                <p className="text-sm text-gray-600">Indian Cities</p>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
                <p className="text-3xl font-bold text-brand-orange">₹99</p>
                <p className="text-sm text-gray-600">3 Month Subscription</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-brand-blue/10 rounded-full animate-float"></div>
              <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-brand-orange/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative bg-white p-3 rounded-2xl shadow-xl">
                <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Professional electrician fixing a circuit board" 
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg animate-float">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">JD</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Electrician arrived</p>
                        <p className="text-xs text-gray-500">Estimated: 30 mins ago</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                    <p className="text-xs font-medium text-brand-blue">4.9 <span className="text-yellow-400">★★★★★</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <a 
            href="#about" 
            className="flex flex-col items-center text-gray-400 hover:text-brand-blue transition-colors"
          >
            <span className="text-sm font-medium mb-1">Scroll Down</span>
            <ArrowDown className="animate-bounce" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
