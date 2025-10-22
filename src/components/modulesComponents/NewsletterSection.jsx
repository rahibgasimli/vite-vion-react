import React from 'react'

const NewsletterSection = ({ content }) => {
  return (
    <section className="section-box overflow-visible">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div className="bg-2 box-newsletter position-relative">
            <div className="row">
              <div className="col-lg-5 col-md-7">
                {content?.newsletter_aption ? <span className="text-body-capitalized color-gray-500 text-uppercase">{content?.newsletter_aption}</span> : null}
                {content?.newsletter_title ? <h4 className="text-heading-2 mb-10 mt-10">{content?.newsletter_title}</h4> : null}
                <div className="box-form-newsletter mt-60">
                  <form className="form-newsletter">
                    <input className="input-newsletter" type="text" value="" placeholder={content?.newsletter_placeholder_text}></input>
                    <button className="btn btn-send"></button>
                  </form>
                </div>
              </div>
              <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                <img className="img-responsive img-newsletter" src={`https://vionadvisory.com/storage/${content.newsletter_image}`} alt="Vion"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default NewsletterSection