
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
      }
    });
  }, { threshold: 0.1 });
  
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
  let current = start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  
  const timer = setInterval(() => {
    current += increment;
    element.textContent = `${prefix}${current}${suffix}`;
    
    if (current === end) {
      clearInterval(timer);
    }
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
