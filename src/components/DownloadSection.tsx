
import React from 'react';
import { Button } from '@/components/ui/button';

const DownloadSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Download Task Express App (Coming Soon) </h2>
            <p className="text-xl mb-6 text-blue-100">
              Get instant access to 69+ services with verified professionals across 50+ Indian cities
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">30-Second Booking</h3>
                  <p className="text-blue-100">
                    Book verified professionals in your area with just a few taps
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Verified Professionals</h3>
                  <p className="text-blue-100">
                    All service providers undergo thorough background verification
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Affordable Subscription</h3>
                  <p className="text-blue-100">
                    ₹99 for 3 months with zero convenience fees
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-white hover:bg-white/90 text-brand-blue font-semibold rounded-full px-8 py-6 text-lg animate-pulse-light"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.523 9.794c-.154-.307-.394-.604-.703-.803l-3.571-2.315c-.456-.297-1.102-.047-1.102.498v4.518c0 .545.646.795 1.102.498l3.571-2.312c.308-.2.549-.496.703-.804.404-.803.404-1.687 0-2.491zm-5.9 5.97c-.19.087-.399.131-.623.131-.263 0-.528-.06-.768-.182l-3.732-1.926c-.531-.275-.856-.82-.856-1.426v-3.931c0-.606.325-1.151.856-1.426l3.732-1.926c.481-.245 1.063-.213 1.516.085.179.116.33.268.444.433.114.165.2.356.242.568.071.313.024.645-.116.952-.14.308-.366.555-.648.719l-2.639 1.503c-.309.176-.309.615 0 .791l2.639 1.503c.519.294.826.88.762 1.487-.064.605-.489 1.108-1.095 1.299-.089.026-.179.049-.27.069-.133.026-.267.039-.399.039-.084 0-.168-.005-.251-.016-.1-.007-.173-.03-.249-.048l-5.51 5.528v-3.75l2.081-2.086c.395-.394.395-1.033 0-1.427-.395-.394-1.034-.394-1.428 0l-.653.654v-1.549l.624-.625c.395-.394.395-1.034 0-1.428-.395-.394-1.034-.394-1.428 0l-5.075 5.091c-.394.394-.394 1.034 0 1.428l11.947 11.979c.394.394 1.034.394 1.428 0l11.946-11.979c.394-.394.394-1.034 0-1.428l-3.843-3.853z" />
                </svg>
                Play Store (Coming Soon)
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-brand-blue hover:bg-white/10 hover:text-white font-semibold rounded-full px-8 py-6 text-lg"
              >
                Scan QR Code (Coming Soon)
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-white/5 rounded-3xl transform rotate-6"></div>
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Task Express app home screen" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                    alt="Task Express app booking screen" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <div className="mt-6 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="flex-1">
                    <h4 className="font-semibold">Special Launch Offer</h4>
                    <p className="text-sm text-blue-100">Limited time: ₹99 for 3 months</p>
                  </div>
                  <div className="text-2xl font-bold text-brand-orange">₹99</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
