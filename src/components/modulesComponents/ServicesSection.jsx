import React, { useState } from 'react';

const ServicesSection = ({ content }) => {
  const [aktivTab, setAktivTab] = useState(0);

  const tabClick = (index) => {
    setAktivTab(index);
  };

  return (
    <section className="section-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-sm-1 col-12"></div>
          <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
            <h2 className="text-heading-1 color-gray-900">
              {content?.services_title}
            </h2>
            <p className="text-body-lead-large color-gray-600 mt-20">
              {content?.services_caption}
            </p>
          </div>
          <div className="col-lg-2 col-sm-1 col-12"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="text-center mt-90">
          <ul className="nav" role="tablist">
            {content?.services?.map((service, index) => (
              <li key={index}>
                <button
                  className={`btn btn-default btn-bd-green-hover btn-select ${aktivTab === index ? 'active' : ''}`}
                  onClick={() => tabClick(index)}
                  role="tab"
                  aria-selected={aktivTab === index}
                >
                  {service.service_name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="container">
        <div className="tab-content">
          {content?.services?.map((service, index) => (
            <div 
              key={index}
              className={`tab-pane fade ${aktivTab === index ? 'active show' : ''}`}
              role="tabpanel"
            >
              <div className={`bg-${index + 1} panel-box mt-50`}>
                <div className="row">
                  <div className="col-lg-7 col-md-12 order-lg-1 order-2">
                    <div className="row">
                      <div className="col-lg-9 col-md-12 box-optimized">
                        <h3 className="text-heading-2">{service.title}</h3>
                        <p className="text-body-excerpt mt-30">{service.caption}</p>
                        <div className="mt-40">
                          <a className="btn btn-default btn-white icon-arrow-right" href={service.button_url}>
                            {service.button_text}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-5 col-md-12 order-lg-2 order-1">
                    <div className="icon-pattern crop-box">
                      <img 
                        className="img-responsive" 
                        src={`https://vion.make.az/storage/${service.image}`} 
                        alt={service.service_name}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;