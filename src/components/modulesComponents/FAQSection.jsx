import React, { useState } from 'react'

const FAQSection = ({ content, data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section-box pb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-sm-1 col-12"></div>
          <div className="container text-center col-lg-8 col-sm-10 col-12 mt-150 mb-90">
            {content?.faq_title ? <h2 className="text-heading-1 color-gray-900">{content.faq_title}</h2> : null}
            {content?.faq_description ? <p className="text-body-lead-large color-gray-600 mt-20">{content.faq_description}</p> : null}
          </div>
          <div className="col-lg-2 col-sm-1 col-12"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion" id="accordionFAQ">
              {data.map((accordion, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={`heading-${index}`}>
                    <button
                      className={`accordion-button text-heading-5 ${activeIndex === index ? '' : 'collapsed'}`}
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={activeIndex === index}
                      aria-controls={`collapse-${index}`}
                    >
                      {accordion.question}
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                    id={`collapse-${index}`}
                    aria-labelledby={`heading-${index}`}
                  >
                    <div className="accordion-body">{accordion.answer}</div>
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

export default FAQSection