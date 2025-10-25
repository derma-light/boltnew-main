import { useEffect } from 'react';

const DropdownScript = () => {
  useEffect(() => {
    const dropdownContainers = document.querySelectorAll('.dropdown-container-hybrid');
    
    const handleDropdownClick = (container: Element, trigger: Element) => {
      return (e: Event) => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          
          // Close other dropdowns
          dropdownContainers.forEach(other => {
            if (other !== container) {
              other.classList.remove('mobile-active');
              const otherTrigger = other.querySelector('.dropdown-trigger-hybrid');
              if (otherTrigger) {
                otherTrigger.setAttribute('aria-expanded', 'false');
              }
            }
          });
          
          // Toggle current dropdown
          container.classList.toggle('mobile-active');
          
          // Update aria-expanded
          const isExpanded = container.classList.contains('mobile-active');
          trigger.setAttribute('aria-expanded', isExpanded.toString());
        }
      };
    };

    const handleOutsideClick = (e: Event) => {
      const target = e.target as Element;
      if (!target.closest('.dropdown-container-hybrid')) {
        dropdownContainers.forEach(container => {
          container.classList.remove('mobile-active');
          const trigger = container.querySelector('.dropdown-trigger-hybrid');
          if (trigger) {
            trigger.setAttribute('aria-expanded', 'false');
          }
        });
      }
    };

    // Add event listeners
    const clickHandlers: Array<() => void> = [];
    
    dropdownContainers.forEach(container => {
      const trigger = container.querySelector('.dropdown-trigger-hybrid');
      
      if (trigger) {
        const handler = handleDropdownClick(container, trigger);
        trigger.addEventListener('click', handler);
        clickHandlers.push(() => trigger.removeEventListener('click', handler));
      }
    });
    
    document.addEventListener('click', handleOutsideClick);
    
    // Cleanup function
    return () => {
      clickHandlers.forEach(cleanup => cleanup());
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default DropdownScript;