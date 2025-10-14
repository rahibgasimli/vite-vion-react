// components/ServicesTabs.jsx
import React from 'react';
import { useTabSystem } from '../../hooks/useTabSystem'

const ServicesSection = () => {
  const { activeTab, handleTabClick } = useTabSystem('tab-1');

  const tabs = [
    { id: 'tab-1', label: 'Sales & Marketing' },
    { id: 'tab-2', label: 'Digital & Technology' },
    { id: 'tab-3', label: 'Finance & Investments' },
    { id: 'tab-4', label: 'Organization & Transformation' },
    { id: 'tab-5', label: 'Strategy' },
    { id: 'tab-6', label: 'Operations Management' }
  ];

  const tabContents = {
    'tab-1': {
      bgClass: 'bg-8',
      title: 'Build stronger sales engines and smarter marketing',
      description: 'VION helps organizations design sales funnels that convert, optimize marketing spend, and align go-to-market strategies with business growth. From digital campaigns to sales enablement, we turn leads into loyal customers.',
      image: 'assets/imgs/page/homepage1/img-1.svg',
      layout: 'split',
      hasVideo: false
    },
    'tab-2': {
      bgClass: 'bg-1',
      title: 'Design Studios That Everyone Should Know',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '',
      layout: 'full',
      hasVideo: false
    },
    'tab-3': {
      bgClass: 'bg-3',
      title: 'We can blend colors multiple ways',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'assets/imgs/page/homepage1/img-1-3.jpg',
      layout: 'split',
      hasVideo: true
    },
    // Diğer tab'lar için benzer şekilde devam edin...
  };

  const renderTabContent = (tabId) => {
    const content = tabContents[tabId];
    if (!content) return null;

    const isActive = activeTab === tabId;
    const showClass = isActive ? 'active show' : '';

    return (
      <div 
        className={`tab-pane fade ${showClass}`} 
        id={tabId} 
        role="tabpanel" 
        aria-labelledby={tabId}
        key={tabId}
      >
        <div className={`${content.bgClass} panel-box mt-50`}>
          <div className="row">
            {content.layout === 'split' ? (
              <>
                <div className="col-lg-7 col-md-12 order-lg-1 order-2">
                  <div className="row">
                    <div className="col-lg-9 col-md-12 box-optimized">
                      <h3 className="text-heading-2">{content.title}</h3>
                      <p className="text-body-excerpt mt-30">{content.description}</p>
                      <div className="mt-40">
                        <a className="btn btn-default btn-white icon-arrow-right" href="page-service-1.html">
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12 order-lg-2 order-1">
                  <div className="icon-pattern crop-box">
                    {content.hasVideo ? (
                      <div className="block-video icon-pattern">
                        <a className="popup-youtube btn-play-video" href="https://www.youtube.com/watch?v=oRI37cOPBQQ"></a>
                        <img className="img-responsive" src={content.image} alt="Vion" />
                      </div>
                    ) : (
                      <img className="img-responsive" src={content.image} alt="Vion" />
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="col-lg-6 col-sm-12">
                <div className="box-optimized">
                  <h3 className="text-heading-2">{content.title}</h3>
                  <p className="text-body-excerpt mt-30">{content.description}</p>
                  <div className="mt-40">
                    <a className="btn btn-default btn-white icon-arrow-right" href="page-service-1.html">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="section-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-sm-1 col-12"></div>
          <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
            <h2 className="text-heading-1 color-gray-900">
              Strategies that inspire trust and drive results
            </h2>
            <p className="text-body-lead-large color-gray-600 mt-20">
              Across industries, we deliver strategies and transformations that stand the test of time.
            </p>
          </div>
          <div className="col-lg-2 col-sm-1 col-12"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="text-center mt-90">
          <ul className="nav" role="tablist">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  className={`btn btn-default btn-bd-green-hover btn-select ${
                    activeTab === tab.id ? 'active' : ''
                  }`}
                  onClick={(e) => handleTabClick(tab.id, e)}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={tab.id}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="container">
        <div className="tab-content">
          {tabs.map(tab => renderTabContent(tab.id))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;