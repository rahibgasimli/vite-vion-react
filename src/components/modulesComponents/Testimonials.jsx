import React from 'react'
import { Link } from 'react-router-dom'

const Testimonials = ({ content }) => {

  console.log(content)

  return (
    <section className="section-box pt-100 pb-100 mt-180 bg-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mb-30">
            {content?.testimonial_title ? <h3 className="text-heading-1 mt-30">{content?.testimonial_title}</h3> : null}
            {content?.testimonial_description ? <p className="text-body-lead-large color-gray-600 mt-30">{content?.testimonial_description}</p> : null}
            {content?.testimonial_button_text ? <div className="mt-40"><Link className="btn btn-default btn-white icon-arrow-right" to={content?.testimonial_button_url}>{content?.testimonial_button_text}</Link></div> : null}
          </div>
          <div className="col-lg-7">
            <div className="row" data-masonry="{&quot;percentPosition&quot;: true }">
              {content?.testimonials.map((card, index) => (
                <div className="col-lg-6 col-md-12 col-sm-12" key={index}>
                  <div className="card-grid-style-2 card-square hover-up mb-20">
                    <p className="text-body-text color-gray-600 text-comment">{card.text}</p>
                    <div className="box-img-user">
                      <div className="img-user img-user-round"><img src={`https://vion.make.az/storage/${card.image}`} alt="Vion" /></div>
                      <h4 className="text-body-lead color-gray-900 mb-5">{card.name}</h4>
                      <p className="text-body-text-md">{card.workplace}</p>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>


  )
}

export default Testimonials