import React from 'react'

const PartnersSection = ({ content, data }) => {
  return (
    <section className="section-box">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-2 col-sm-1 col-12"></div>
          <div className="container text-center col-lg-8 col-sm-10 col-12 mt-150">
            {content?.partners_title ? <h2 className="text-heading-1 color-gray-900">{content?.partners_title}</h2> : null}
            {content?.partners_description ? <p className="text-body-lead-large color-gray-600 mt-20">{content?.partners_description}</p> : null}
          </div>
          <div className="col-lg-2 col-sm-1 col-12"></div>
        </div>
      </div>
      <div className="container mt-70">
        <div className="row  justify-content-center">
          <div className="container-fluid row col-lg-10 col-sm-10 col-12">
            {data.map((partner, index) => (
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center" key={index}><a target='blank_' className="item-logo box-hover-shadow hover-up" href={partner.website}><img alt={partner.name} src={`https://vion.make.az/storage/${partner.logo}`} /></a></div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default PartnersSection