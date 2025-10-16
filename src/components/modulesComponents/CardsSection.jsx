import React from 'react'

import cardImg from "../../assets/imgs/page/homepage1/right-arrow.svg"

const CardsSection = ({ content }) => {
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
                    {content.cards.map((card, index) => (
                        <div className="col-lg-4 col-sm-12 d-flex" key={index}>
                            <div className="card-grid-1 bg-6  hover-up">
                                <div className="grid-1-img"><i className={`${card.icon} size-80`}></i></div>
                                <h3 className="text-heading-3 mt-20">{card.title}</h3>
                                <p className="text-body-excerpt mt-20">{card.description}</p>
                                <div className="mt-30"><a className="btn btn-default btn-white icon-arrow-right" href={card.button_url}>{card.button_text}</a></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CardsSection