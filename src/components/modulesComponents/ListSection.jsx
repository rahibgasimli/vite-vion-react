import React from 'react'

const ListSection = () => {
  return (
    <section className="section-box mt-100 mb-140">
    <div className="container">
      <div className="row">
        <div className="col-lg-1 col-sm-1 col-12"></div>
        <div className="col-lg-10 col-sm-10 col-12 text-center">
          <h2 className="text-heading-1 color-gray-900 mb-10">Our approach to lasting impact</h2>
          <p className="text-body-lead-large color-gray-600 mt-20">Every project follows a clear path — from building the right foundations to creating measurable results and ensuring long- term sustainability.</p>
        </div>
        <div className="col-lg-1 col-sm-1 col-12"></div>
      </div>
    </div>
    <div className="container mt-40">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="list-icons mt-40 hover-up">
            <div className="item-icon"><span className="icon-left"><img src="assets/imgs/page/homepage2/lampIcon.svg" alt="Vion"/></span>
              <h4 className="text-heading-4">1. Discovery</h4>
              <p className="text-body-text color-gray-600 mt-15">We begin with a deep understanding of your business context and organizational challenges. Through workshops and analysis, we align on objectives and success metrics.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="list-icons mt-40 hover-up">
            <div className="item-icon"><span className="icon-left"><img src="assets/imgs/page/homepage2/defendIcon.svg" alt="Vion"/></span>
              <h4 className="text-heading-4">2. Execution</h4>
              <p className="text-body-text color-gray-600 mt-15">We design tailored solutions — whether in finance, technology, operations, or organization — and work closely with your teams to ensure effective implementation.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="list-icons mt-40 hover-up">
            <div className="item-icon"><span className="icon-left"><img src="assets/imgs/page/homepage2/settingsIcon.svg" alt="Vion"/></span>
              <h4 className="text-heading-4">3. Sustain</h4>
              <p className="text-body-text color-gray-600 mt-15">We embed tools, processes, and capabilities into your organization, enabling you to sustain improvements and scale success across markets and functions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ListSection