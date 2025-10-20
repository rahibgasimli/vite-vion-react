import React from 'react'
import { Link } from 'react-router-dom'

const PromotionSection = ({ content }) => {
  return (

    <section className="section-box">
    <div className="container mt-90">
      <div className="row align-items-center">
        <div className="col-lg-5 col-sm-12 block-img-we-do">
          <div className="inner-image"><img className="img-responsive" src={`https://vion.make.az/storage/${content?.promotion_image}`} alt="Vion"/></div>
        </div>
        <div className="col-lg-7 col-sm-12 block-we-do-2">
          <h3 className="text-heading-1 mt-30">{content?.promotion_title}</h3>
          <p className="text-body-lead-large color-gray-600 mt-60">{content?.promotion_description}</p>
            <div className="mt-60"><Link className="btn btn-black shape-round icon-arrow-right-white" to={content?.promotion_button_url}>{content?.promotion_button_text}</Link></div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default PromotionSection