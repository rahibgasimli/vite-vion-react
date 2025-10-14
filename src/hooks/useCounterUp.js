// hooks/useCounterUp.js
import { useState, useEffect, useRef } from 'react';

const useCounterUp = (end, options = {}) => {
  const {
    delay = 10,
    time = 600,
    start = 0,
    autoStart = true
  } = options;

  const [count, setCount] = useState(start);
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsInView(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current && autoStart) {
      observer.observe(elementRef.current);
    } else if (!autoStart) {
      setIsInView(true);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [autoStart]);

  useEffect(() => {
    if (!isInView) return;

    let counter = start;
    const increment = (end - start) / (time / delay);

    const timer = setInterval(() => {
      counter += increment;
      
      if (counter >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(counter));
      }
    }, delay);

    return () => clearInterval(timer);
  }, [isInView, end, start, delay, time]);

  const restart = () => {
    setCount(start);
    setIsInView(false);
    hasAnimated.current = false;
    
    setTimeout(() => {
      setIsInView(true);
    }, 100);
  };

  return { count, elementRef, restart };
};

// Named export olaraq export edin
export { useCounterUp };