import { useEffect, useRef } from 'react';

const useScrollReveal = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const delay = parseFloat(element.dataset.revealDelay) || 0;
            
            setTimeout(() => {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
            }, delay);
            
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    elementsRef.current.forEach((el) => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const revealRef = (index) => (el) => {
    if (el) {
      el.dataset.revealDelay = (index * 100).toString();
      elementsRef.current.push(el);
    }
  };

  return { revealRef };
};

export default useScrollReveal;
