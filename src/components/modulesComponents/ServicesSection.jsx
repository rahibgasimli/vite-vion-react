import React from 'react'

const ServicesSection = ({ content }) => {
  return (
    <section className="section-box">
    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-sm-1 col-12"></div>
        <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
          <h2 className="text-heading-1 color-gray-900">Strategies that inspire trust and drive results</h2>
          <p className="text-body-lead-large color-gray-600 mt-20">Across industries, we deliver strategies and transformations that stand the test of time.</p>
        </div>
        <div className="col-lg-2 col-sm-1 col-12"></div>
      </div>
    </div>
    <div className="container">
      <div className="text-center mt-90">
        <ul className="nav" role="tablist">
          <li><a className="btn btn-default btn-bd-green-hover btn-select active" href="#tab-1" data-bs-toggle="tab" role="tab" aria-controls="tab-1" aria-selected="true">Sales & Marketing</a></li>
          <li><a className="btn btn-default btn-bd-green-hover btn-select" href="#tab-2" data-bs-toggle="tab" role="tab" aria-controls="tab-2" aria-selected="true">Digital & Technology</a></li>
          <li><a className="btn btn-default btn-bd-green-hover btn-select" href="#tab-3" data-bs-toggle="tab" role="tab" aria-controls="tab-3" aria-selected="true">Finance & Investments</a></li>
          <li><a className="btn btn-default btn-bd-green-hover btn-select" href="#tab-4" data-bs-toggle="tab" role="tab" aria-controls="tab-4" aria-selected="true">Organization & Transformation</a></li>
          <li><a className="btn btn-default btn-bd-green-hover btn-select" href="#tab-5" data-bs-toggle="tab" role="tab" aria-controls="tab-5" aria-selected="true">Strategy</a></li>
          <li><a className="btn btn-default btn-bd-green-hover btn-select" href="#tab-6" data-bs-toggle="tab" role="tab" aria-controls="tab-6" aria-selected="true">Operations Management</a></li>
        </ul>
      </div>
    </div>
    <div className="container">
      <div className="tab-content">
        {content?.services.map((service,index) => (
                  <div className="tab-pane fade active show" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                  <div className="bg-8 panel-box mt-50">
                    <div className="row">
                      
                      <div className="col-lg-7 col-md-12 order-lg-1 order-2">
                        <div className="row">
                          <div className="col-lg-9 col-md-12 box-optimized">
                            <h3 className="text-heading-2">{service.title}</h3>
                            <p className="text-body-excerpt mt-30">{service.caption}</p>
                            <div className="mt-40"><a className="btn btn-default btn-white icon-arrow-right" href={service.button_url}>{service.button_text}</a></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-12 order-lg-2 order-1">
                        <div className="icon-pattern crop-box">
                          <img className="img-responsive" src="assets/imgs/page/homepage1/img-1.svg" alt="Vion"/>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default ServicesSection