import React from 'react'

const FeaturesSection = ({ content }) => {

  console.log(content)

  return (
    <section className="section-box">
      <div className="container mt-120">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-12 block-img-we-do"><img className="img-responsive" src="assets/imgs/page/about/3/img-2.svg" alt="Vion" /></div>
          <div className="col-lg-6 col-sm-12 block-we-do">
            <h3 className="text-heading-1 mt-30">{content.features_title}</h3>
            <p className="text-body-lead-large color-gray-600 mt-30">{content.features_description}</p>
            <div className="line-bd-green mt-50"></div>
            <div className="row">
              {content.features.map((feature, index) => (
                <div className="col-lg-5 col-sm-6 col-12 mt-50">
                  <h4 className="text-heading-6 icon-leaf">{feature.title}</h4>
                  <p className="text-body-excerpt color-gray-600 mt-15">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection