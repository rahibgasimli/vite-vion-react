import React from 'react'

import cardImg from "../../assets/imgs/page/homepage1/right-arrow.svg"

const CardsSection = () => {
  return (
    <section className="section-box">
    <div className="container">
        <div className="row">
            <div className="col-lg-2 col-sm-1 col-12"></div>
            <div className="container text-center col-lg-8 col-sm-10 col-12 mt-100">
                <h2 className="text-heading-1 color-gray-900">Inside <span className="color-green-900">VION</span> — values,people and career growth</h2>
                <p className="text-body-lead-large color-gray-600 mt-20">Learn more about who we are, how we work, and the people behind our impact. &quot;outside the box&quot; thinking.</p>
            </div>
            <div className="col-lg-2 col-sm-1 col-12"></div>
        </div>
    </div>
    <div className="container mt-70">
        <div className="row">
            <div className="col-lg-4 col-sm-12 d-flex">
                <div className="card-grid-1 bg-6  hover-up">
                    <div className="grid-1-img"><img src={cardImg} alt="Vion" /></div>
                    <h3 className="text-heading-3 mt-20">About VION</h3>
                    <p className="text-body-excerpt mt-20">We bring clarity to complexity. Our story is built on a mission to empower organizations with strategies that drive measurable results. With values rooted in integrity, we deliver impact that lasts.</p>
                    <div className="mt-30"><a className="btn btn-default btn-white icon-arrow-right" href="page-about-1.html">Learn more</a></div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-12  d-flex">
                <div className="card-grid-1 bg-2 hover-up">
                    <div className="grid-1-img"><img src={cardImg} alt="Vion" /></div>
                    <h3 className="text-heading-3 mt-20">Careers</h3>
                    <p className="text-body-excerpt mt-20">Joining VION means more than just a job — it is an opportunity to grow, learn, and create meaningful change. We invest in people and provide the environment for ambitious consultants to thrive.</p>
                    <div className="mt-30"><a className="btn btn-default btn-white icon-arrow-right" href="page-about-2.html">Learn more</a></div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-12  d-flex">
                <div className="card-grid-1 bg-3 hover-up">
                    <div className="grid-1-img"><img src={cardImg} alt="Vion" /></div>
                    <h3 className="text-heading-3 mt-20">Our Team</h3>
                    <p className="text-body-excerpt mt-20">Behind every strategy is a team of passionate professionals committed to delivering results. Our experts combine industry knowledge with innovative thinking.</p>
                    <div className="mt-30"><a className="btn btn-default btn-white icon-arrow-right" href="page-about-3.html">Learn more</a></div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default CardsSection