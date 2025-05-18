
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Delhi",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "I found a plumber within minutes using Task Express! The service was prompt, professional, and very affordable. I'm never going back to searching for services the old way."
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Mumbai",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "As a working mother, I don't have time to search for reliable help. Task Express has been a lifesaver—their verified professionals are trustworthy and skilled. The subscription is worth every rupee!"
  },
  {
    id: 3,
    name: "Arjun Singh",
    location: "Bangalore",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 4,
    text: "I needed urgent electrical work done in my new apartment. Task Express connected me with an electrician who arrived within an hour. The work quality was excellent and the pricing transparent."
  }
];

const workerTestimonials = [
  {
    id: 1,
    name: "Mohan Das",
    profession: "Electrician",
    experience: "8 years",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "Joining Task Express has transformed my business. I now get consistent work and have built a loyal customer base through my profile ratings. My income has increased by 30%."
  },
  {
    id: 2,
    name: "Lakshmi Patel",
    profession: "House Cleaner",
    experience: "5 years",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    text: "Before Task Express, finding regular clients was a challenge. Now, I manage my schedule through the app and have doubled my monthly earnings. The platform respects our work and skills."
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'customers' | 'workers'>('customers');
  
  return (
    <section id="testimonials" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Success Stories</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Hear from our satisfied customers and empowered service professionals
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-full p-1 border border-gray-200">
            <Button
              variant="ghost"
              className={`rounded-full px-8 ${
                activeTab === 'customers'
                  ? 'bg-brand-blue text-white hover:bg-brand-blue hover:text-white'
                  : 'text-gray-600 hover:text-brand-blue'
              }`}
              onClick={() => setActiveTab('customers')}
            >
              Customers
            </Button>
            <Button
              variant="ghost"
              className={`rounded-full px-8 ${
                activeTab === 'workers'
                  ? 'bg-brand-orange text-white hover:bg-brand-orange hover:text-white'
                  : 'text-gray-600 hover:text-brand-orange'
              }`}
              onClick={() => setActiveTab('workers')}
            >
              Service Providers
            </Button>
          </div>
        </div>
        
        {activeTab === 'customers' ? (
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-on-scroll"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-brand-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Verified Customer
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {workerTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 animate-on-scroll"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 bg-brand-blue/10 p-6 flex flex-col items-center justify-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-24 h-24 rounded-full mb-4 border-4 border-white"
                    />
                    <h4 className="font-semibold text-center text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-center text-brand-orange font-medium">{testimonial.profession}</p>
                    <p className="text-xs text-center text-gray-500">{testimonial.experience} experience</p>
                  </div>
                  
                  <div className="md:w-3/5 p-6">
                    <div className="flex mb-3">
                      <div className="px-3 py-1 bg-brand-orange/10 rounded-full text-xs text-brand-orange font-medium">
                        Success Story
                      </div>
                    </div>
                    
                    <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                    
                    <div className="flex items-center text-sm text-brand-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Verified Professional
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm border border-gray-100 animate-on-scroll">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Join Our Growing Community Today
              </h3>
              <p className="text-gray-600">
                {activeTab === 'customers'
                  ? "Experience the convenience of booking reliable service professionals with just a few taps. Download the Task Express app now!"
                  : "Are you a skilled professional? Join Task Express to find more clients and grow your business. Register on our app today!"
                }
              </p>
            </div>
            <div>
              <Button 
                className="bg-brand-orange hover:bg-brand-orange/90 text-white font-medium rounded-full px-8 py-6 text-lg animate-pulse-light"
              >
                Coming Soon
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
