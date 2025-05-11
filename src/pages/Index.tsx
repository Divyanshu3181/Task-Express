
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DownloadSection from "@/components/DownloadSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StructuredData from "@/components/StructuredData";
import { initScrollAnimations } from "@/lib/animations";

const Index = () => {
  // Implement scroll animation observer
  useEffect(() => {
    // Initialize scroll animations
    const cleanup = initScrollAnimations();
    
    // Set meta tags for SEO
    const metaTags = [
      { name: 'description', content: 'Task Express - Your one-stop solution for blue-collar services across India. Connect with verified plumbers, electricians, cleaners, carpenters, and more in just 30 seconds.' },
      { name: 'keywords', content: 'blue-collar services, home services app, service professionals, plumber app, electrician booking, India service app' },
      { property: 'og:title', content: 'Task Express - Blue-Collar Services Marketplace' },
      { property: 'og:description', content: 'Connect with verified professionals across India for plumbing, electrical work, cleaning, carpentry, and 69+ more service categories.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:title', content: 'Task Express - Blue-Collar Services Marketplace' },
      { name: 'twitter:description', content: 'Connect with verified professionals across India for plumbing, electrical work, cleaning, carpentry, and 69+ more service categories.' }
    ];
    
    metaTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const newTag = document.createElement('meta');
        if (tag.property) {
          newTag.setAttribute('property', tag.property);
        } else {
          newTag.setAttribute('name', tag.name);
        }
        newTag.setAttribute('content', tag.content);
        document.head.appendChild(newTag);
      }
    });
    
    // Update document title
    document.title = "Task Express - Your One-Stop Solution for Blue-Collar Services";
    
    return cleanup;
  }, []);
  
  return (
    <div className="min-h-screen overflow-hidden">
      <StructuredData />
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <DownloadSection />
        <ContactSection />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
