
import React from 'react';
import { Button } from '@/components/ui/button';

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-brand-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How Task Express Works</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Connect with skilled professionals in just a few simple steps
          </p>
        </div>

        <div className="flex flex-col  lg:flex-row gap-20">
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative px-10 py-5"> 
              <div className="relative z-10 rounded-xl shadow-xl overflow-hidden border border-gray-100">
                <img
                  src="appview.jpeg"
                  alt="Task Express mobile app showcasing service booking process"
                  className="h-[80vh] w-[50vh] rounded-xl mx-auto"
                />
              </div>
              <div className="absolute top-5 -left-5 bg-white p-4 rounded-lg shadow-lg animate-float z-20">
                <p className="font-semibold text-brand-blue text-center">4.8</p>
                <p className="text-xs text-gray-500">App Rating</p>
              </div>
              <div className="absolute bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg animate-float z-20" style={{ animationDelay: '1.2s' }}> 
                <p className="font-semibold text-brand-orange text-center">30s</p>
                <p className="text-xs text-gray-500">App Rating</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Simple 4-Step Process</h3>

              <div className="space-y-8">
                <div className="flex gap-6 items-start animate-on-scroll">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-lg">1</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800">Browse Services</h4>
                    <p className="text-gray-600">
                      Explore our wide range of 69+ service categories and select the service you need from verified professionals near you.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-lg">2</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800">Book Professionals</h4>
                    <p className="text-gray-600">
                      Select your preferred time slot, provide service details, and confirm your booking in just 30 seconds.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start animate-on-scroll" style={{ transitionDelay: '0.4s' }}>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-lg">3</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800">Service Completion</h4>
                    <p className="text-gray-600">
                      The professional arrives at your location, completes the service with quality assurance, and addresses all your requirements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start animate-on-scroll" style={{ transitionDelay: '0.6s' }}>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-lg">4</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800">Payment & Rating</h4>
                    <p className="text-gray-600">
                      Make secure payments through the app and provide feedback to help maintain our service quality standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm animate-on-scroll" style={{ transitionDelay: '0.8s' }}>
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="sm:w-1/2">
                  <h4 className="text-xl font-semibold mb-2 text-brand-orange">Special Subscription Offer</h4>
                  <p className="text-gray-600 mb-4">
                    Get unlimited access to all services with zero convenience fees for 3 months at just ₹99!
                  </p>
                  <Button
                    className="bg-brand-orange hover:bg-brand-orange/90 text-white font-medium rounded-full px-6"
                  >
                    Subscribe Now (Coming Soon)
                  </Button>
                </div>
                <div className="sm:w-1/2 text-center">
                  <div className="text-4xl font-bold text-brand-orange">₹99</div>
                  <div className="text-base text-gray-600 mt-1">for 3 months</div>
                  <div className="text-sm text-brand-blue mt-1">Regular: ₹299</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
