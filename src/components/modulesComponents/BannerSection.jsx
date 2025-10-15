import React from 'react'

const BannerSection = ({ content }) => {

  console.log(content)

  return (
    <section className="section-box">
    <div className="banner-hero banner-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="text-heading-1">
              <span className="color-green-900">{content.banner_colored_title} </span> {content.banner_title}</h1>
            <p className="text-body-lead-large mt-60 pr-40">{content.banner_description}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default BannerSection