// components/CounterSection.jsx
import React from 'react';
import { useCounterUp } from '../../hooks/useCounterUp'; // Named import

const CounterSection = ({countersData}) => {
  const stats = [
    {
      value: 120,
      suffix: "+",
      title: "Completed projects",
      description: "Delivered strategic and operational projects across diverse industries."
    },
    {
      value: 15,
      suffix: "+",
      title: "Years of expertise",
      description: "Our consultants bring extensive local and international experience."
    },
    {
      value: 25,
      suffix: "+",
      title: "Skilled experts",
      description: "Professionals specialized in strategy, finance, digital, and operations."
    },
    {
      value: 20,
      suffix: "+",
      title: "Trusted clients",
      description: "Organizations that partnered with VION for lasting impact."
    }
  ];

  const CounterItem = ({ value, suffix, title, description }) => {
    const { count, elementRef } = useCounterUp(value, {
      delay: 10,
      time: 600
    });

    console.log(countersData)

    return (
      <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center">
        <span className="text-display-3 color-green-900">
          <span ref={elementRef} className="count">
            {count}
          </span>
          {suffix}
        </span>
        <div className="text-body-quote">{title}</div>
        <p className="text-body-text color-gray-500 mt-10">
          {description}
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
                {/* {countersData.map((counter, index) => (
                  // <CounterItem
                  //   key={index}
                  //   value={counter.counter_value}
                  //   suffix={stat.suffix}
                  //   title={stat.title}
                  //   description={stat.description}
                  // />

                  <div class="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center"><span class="text-display-3 color-green-900"><span class="count">{counter.counter_value}</span>+</span>
                    <div class="text-body-quote">Completed projects</div>
                    <p class="text-body-text color-gray-500 mt-10">Delivered strategic and operational projects across diverse industries.</p>
                  </div>
                ))} */}
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