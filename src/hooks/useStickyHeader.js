import { useEffect, useState } from 'react';

export const useStickyHeader = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (scrollY < 200) {
        setIsSticky(false);
        // Header-style-2 için class'ları kaldır
        document.querySelectorAll('.header-style-2 .categories-dropdown-active-large, .header-style-2 .categories-button-active')
          .forEach(element => element.classList.remove('open'));
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isSticky;
};