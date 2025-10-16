import React from 'react'

import Banner1 from "../../assets/imgs/page/homepage7/banner-1.svg"
import Banner2 from "../../assets/imgs/page/homepage7/banner-2.svg"

const SlidersSection = ({ content }) => {

    console.log(content.slides)

    if (!content.slides || content.slides === 0) {
        return null;
    }

    return (
        <section className="section-box">
            <div className="container">
                {
                    content.slides.map((slide, index) => (
                        <div key={index}>
                            <div className="row">
                                <div className="col-lg-6 mt-30">
                                 <h1 className="text-display-4"><span className="color-green-900">{slide.colored_header_text}</span> {slide.header_text}</h1>
                                </div>
                                <div className="col-lg-5 offset-xl-1 mt-30">
                                    <p className="text-body-lead-large color-gray-500">{slide.description}</p>
                                    <div className="mt-40"><a className="btn btn-black shape-round icon-arrow-right-white" href="#">{slide.button_text}</a></div>
                                </div>
                            </div>
                            <div className="row mt-110">
                                <div className="col-lg-7"><img src={slide.image} /></div>
                                <div className="col-lg-5"><img src={Banner2} /></div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}

export default SlidersSection