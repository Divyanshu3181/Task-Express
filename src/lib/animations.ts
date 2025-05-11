
/**
 * Animation utility functions for Task Express website
 */

/**
 * Initializes the scroll animation observer to animate elements as they enter the viewport
 */
export const initScrollAnimations = () => {
  // Only run in browser environment
  if (typeof window === 'undefined') return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        
        // Add a slight delay between animations for a staggered effect
        const delay = parseFloat(entry.target.getAttribute('data-delay') || '0');
        if (delay > 0) {
          entry.target.style.transitionDelay = `${delay}s`;
        }
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
  
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(el => observer.observe(el));
  
  return () => {
    elements.forEach(el => observer.unobserve(el));
  };
};

/**
 * Animates count from start to end value with formatting
 * @param element - The element to update with the count
 * @param start - Starting count
 * @param end - Ending count
 * @param duration - Animation duration in milliseconds
 * @param prefix - Optional prefix before the number
 * @param suffix - Optional suffix after the number
 */
export const animateCount = (
  element: HTMLElement, 
  start: number, 
  end: number, 
  duration: number,
  prefix: string = '',
  suffix: string = ''
): void => {
  const range = end - start;
  const increment = end > start ? Math.ceil(range / 30) : Math.floor(range / 30);
  const stepTime = Math.abs(Math.floor(duration / 30));
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    
    // Make sure we don't exceed the end value
    if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
      current = end;
      clearInterval(timer);
    }
    
    element.textContent = `${prefix}${current}${suffix}`;
  }, stepTime);
};

/**
 * Adds a class to an element after a delay
 * @param element - The element to add the class to
 * @param className - The class name to add
 * @param delay - Delay in milliseconds
 */
export const addClassWithDelay = (
  element: HTMLElement,
  className: string,
  delay: number
): void => {
  setTimeout(() => {
    element.classList.add(className);
  }, delay);
};

/**
 * Creates a parallax scrolling effect
 * @param element - The element to apply parallax to
 * @param speed - Speed of the parallax effect (0-1)
 */
export const createParallaxEffect = (
  element: HTMLElement,
  speed: number = 0.5
): void => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const offset = scrollPosition * speed;
    element.style.transform = `translateY(${offset}px)`;
  };
  
  window.addEventListener('scroll', handleScroll);
  
  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

/**
 * Animates elements into view with stagger effect
 * @param containerSelector - CSS selector for the container
 * @param itemSelector - CSS selector for the items
 * @param staggerDelay - Delay between each item animation in milliseconds
 */
export const animateStaggeredItems = (
  containerSelector: string,
  itemSelector: string,
  staggerDelay: number = 100
): void => {
  const containers = document.querySelectorAll(containerSelector);
  
  containers.forEach(container => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll(itemSelector);
          
          items.forEach((item, index) => {
            setTimeout(() => {
              (item as HTMLElement).style.opacity = '1';
              (item as HTMLElement).style.transform = 'translateY(0)';
            }, index * staggerDelay);
          });
          
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(container);
  });
};

/**
 * Applies a 3D tilt effect to an element on mouse move
 * @param element - The element to apply the effect to
 * @param maxTilt - Maximum tilt in degrees
 */
export const applyTiltEffect = (
  element: HTMLElement,
  maxTilt: number = 10
): () => void => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = ((y - centerY) / centerY) * maxTilt;
    const tiltY = ((centerX - x) / centerX) * maxTilt;
    
    element.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  };
  
  const handleMouseLeave = () => {
    element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };
  
  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);
  
  // Return cleanup function
  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
};
