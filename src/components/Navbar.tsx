
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm dark:shadow-gray-800/20">
  <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    <div className="flex items-center">
      <a href="#" className="flex items-center space-x-2">
        <img 
          src="/Logo.jpeg" 
          alt="TaskExpress Logo" 
          className="w-10 h-10 rounded-lg object-cover"
        />
        <span className="text-2xl font-poppins font-bold">
          <span className="text-brand-blue dark:text-blue-400">Task</span>
          <span className="text-brand-orange">Express</span>
        </span>
      </a>
    </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-blue-400 transition-colors font-medium text-sm">
            Home
          </a>
          <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-blue-400 transition-colors font-medium text-sm">
            About
          </a>
          <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-blue-400 transition-colors font-medium text-sm">
            Services
          </a>
          <a href="#how-it-works" className="text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-blue-400 transition-colors font-medium text-sm">
            How it Works
          </a>
          <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-blue-400 transition-colors font-medium text-sm">
            Testimonials
          </a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-blue-400 transition-colors font-medium text-sm">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <DarkModeToggle />
          <Button 
            variant="default" 
            className="bg-brand-blue hover:bg-brand-dark text-white font-medium rounded-full px-5"
          >
            Coming Soon
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <DarkModeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 animate-slide-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-blue-400 transition-colors font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-blue-400 transition-colors font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a 
                href="#services" 
                className="text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-blue-400 transition-colors font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a 
                href="#how-it-works" 
                className="text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-blue-400 transition-colors font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                How it Works
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-blue-400 transition-colors font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-blue-400 transition-colors font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <Button 
                variant="default" 
                className="bg-brand-blue hover:bg-brand-dark text-white font-medium rounded-full px-5 mt-2"
              >
                Coming Soon
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
