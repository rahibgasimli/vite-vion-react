import React from 'react'

const FeaturesSection = () => {
  return (
    <section className="section-box">
    <div className="container mt-120">
      <div className="row align-items-center">
        <div className="col-lg-6 col-sm-12 block-img-we-do"><img className="img-responsive" src="assets/imgs/page/about/3/img-2.svg" alt="Vion"/></div>
        <div className="col-lg-6 col-sm-12 block-we-do">
          <h3 className="text-heading-1 mt-30">Why clients choose us</h3>
          <p className="text-body-lead-large color-gray-600 mt-30">Trusted expertise, tailored solutions, and measurable impact for organizations that aim higher.</p>
          <div className="line-bd-green mt-50"></div>
          <div className="row">
            <div className="col-lg-5 col-sm-6 col-12 mt-50">
              <h4 className="text-heading-6 icon-leaf">Proven Expertise</h4>
              <p className="text-body-excerpt color-gray-600 mt-15">Years of cross-industry experience and deep local insights ensure our strategies are both visionary and practical.</p>
            </div>
            <div className="col-lg-5 col-sm-6 col-12 mt-50">
              <h4 className="text-heading-6 icon-leaf">End-to-End Support</h4>
              <p className="text-body-excerpt color-gray-600 mt-15">From diagnosis to execution, we stay engaged until clear, measurable results are achieved.</p>
            </div>
            <div className="col-lg-5 col-sm-6 col-12 mt-50">
              <h4 className="text-heading-6 icon-leaf">Agile & Adaptive</h4>
              <p className="text-body-excerpt color-gray-600 mt-15">We build solutions that quickly adjust to market shifts, new technologies, and evolving customer needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FeaturesSection