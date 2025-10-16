import React, { useEffect, useState, useRef } from 'react';

// Counter animasiyası üçün custom hook
const useCounterAnimation = (targetValue, duration = 600, delay = 10) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = targetValue / (duration / delay);
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, delay);

    return () => clearInterval(timer);
  }, [isVisible, targetValue, duration, delay]);

  return { count, elementRef };
};

const CounterSection = ({ content }) => {
  console.log(content);

  // CounterItem komponenti
  const CounterItem = ({ counter }) => {
    const { count, elementRef } = useCounterAnimation(counter.counter_value, 600, 10);

    return (
      <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center">
        <span className="text-display-3 color-green-900" ref={elementRef}>
          <span className="count">{count}</span>+
        </span>
        <div className="text-body-quote">{counter.counter_title}</div>
        <p className="text-body-text color-gray-500 mt-10">
          {counter.counter_description}
        </p>
      </div>
    );
  };

  return (
    <div className="section-box mt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div className="pb-20 text-mb-center">
              <div className="row">
                {content.counters.map((counter, index) => (
                  <CounterItem key={index} counter={counter} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;