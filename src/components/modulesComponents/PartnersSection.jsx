import React from 'react'

const PartnersSection = ({ content, data }) => {
  return (
    <section class="section-box">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-2 col-sm-1 col-12"></div>
          <div class="container text-center col-lg-8 col-sm-10 col-12 mt-150">
            {content?.partners_title ? <h2 class="text-heading-1 color-gray-900">{content?.partners_title}</h2> : null}
            {content?.partners_description ? <p class="text-body-lead-large color-gray-600 mt-20">{content?.partners_description}</p> : null}
          </div>
          <div class="col-lg-2 col-sm-1 col-12"></div>
        </div>
      </div>
      <div class="container mt-70">
        <div class="row  justify-content-center">
          <div class="container-fluid row col-lg-10 col-sm-10 col-12">
            {data.map((partner, index) => (
              <div class="col-lg-2 col-md-3 col-sm-4 col-6 text-center"><a class="item-logo box-hover-shadow hover-up" href={partner.website}><img alt={partner.name} src="assets/imgs/slider/logo/sample-logo-1.svg" /></a></div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default PartnersSection