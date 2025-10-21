import React from 'react'

const FullWidthMultipleImagesSection = ({ content }) => {
  return (
    <section className="section-box mt-100 bg-green-900 pt-90 pb-90">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-12 col-12 block-gallery-1">
            <div className="row">
              <div className="col-lg-6" key={index}>
                {content.fwmi_images.map((image, index) => {
                  return index !== 2 && <img className="img-responsive" src={`https://vion.make.az/storage/${image}`} alt="Vion" />
                })}
              </div>
              <div className="col-lg-6" key={index}>
                {content.fwmi_images.map((image, index) => {
                  return index === 2 && <img className="img-responsive" src={`https://vion.make.az/storage/${image}`} alt="Vion" />
                })}
              </div>

            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-12">
            <h2 className="text-heading-1 color-white mb-30 mt-20">{content.fwmi_title}</h2>
            <p className="text-inter-lg">{content.fwmi_description}</p>
            <div className="mt-30"><a className="btn reading-btn btn-black text-body-text" href="page-service-2.html">{content.fwmi_button_text}</a></div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default FullWidthMultipleImagesSection