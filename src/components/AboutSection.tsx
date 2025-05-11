
import React, { useEffect, useRef } from 'react';

const AboutSection: React.FC = () => {
  const aboutContentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-blue">About Task Express</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Digitizing India's blue-collar workforce while providing customers with fast, reliable, and affordable solutions.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div ref={aboutContentRef} className="md:w-1/2">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h3>
              <p className="mb-6 text-gray-600">
                At Task Express, we're on a mission to transform the blue-collar service industry in India by creating 
                a platform that connects verified professionals with customers in need of quality services. We believe 
                in empowering workers with technology while providing customers with reliable, affordable solutions.
              </p>
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Vision</h3>
              <p className="mb-6 text-gray-600">
                We envision a future where every blue-collar professional in India has the opportunity to connect directly 
                with customers, build a digital reputation, and grow their business through technology. By digitizing this 
                workforce, we aim to create a more efficient and transparent service ecosystem.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="animate-on-scroll bg-white p-6 rounded-lg shadow-md" style={{ transitionDelay: '0.4s' }}>
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Trust</h4>
                <p className="text-gray-600">We verify every professional on our platform to ensure reliability and quality service.</p>
              </div>
              
              <div className="animate-on-scroll bg-white p-6 rounded-lg shadow-md" style={{ transitionDelay: '0.6s' }}>
                <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Efficiency</h4>
                <p className="text-gray-600">Our platform connects you with nearby professionals in just 30 seconds.</p>
              </div>
              
              <div className="animate-on-scroll bg-white p-6 rounded-lg shadow-md" style={{ transitionDelay: '0.8s' }}>
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Affordability</h4>
                <p className="text-gray-600">Our subscription model offers great value with zero convenience fees.</p>
              </div>
              
              <div className="animate-on-scroll bg-white p-6 rounded-lg shadow-md" style={{ transitionDelay: '1s' }}>
                <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Empowerment</h4>
                <p className="text-gray-600">We help skilled workers build digital reputations and grow their businesses.</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="animate-on-scroll relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-brand-blue/5 rounded-full"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-orange/5 rounded-full"></div>
              
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Worker using Task Express app" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              
              <div className="absolute bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg animate-float">
                <p className="font-semibold text-brand-blue">5,000+</p>
                <p className="text-sm text-gray-600">Verified Professionals</p>
              </div>
              
              <div className="absolute top-6 -left-6 bg-white p-4 rounded-lg shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <p className="font-semibold text-brand-orange">50+</p>
                <p className="text-sm text-gray-600">Cities Covered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
