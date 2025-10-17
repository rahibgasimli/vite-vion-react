import React from 'react'
import { Link } from 'react-router-dom'

const NewsSection = ({ content, data }) => {
    return (
        <section className="section-box">
            <div className="container mt-60">
                <div className="row">

                    <div className="col-lg-8 col-12 order-1 order-lg-1 mb-30">
                        {content?.news_title ? <h2 className="text-heading-1 color-gray-900 mb-10">{content?.news_title}</h2> : null}
                        {content?.news_description ? <p className="text-body-lead-large color-gray-600 mt-20 mb-10">{content?.news_description}</p> : null}
                    </div>

                    <div className="col-lg-4 col-12 order-5 order-lg-2 d-flex justify-content-lg-end justify-content-start align-items-center">
                        <div className="mt-20 mb-30 text-lg-end text-start">
                            {content?.news_button_text ? <Link className="btn btn-black icon-arrow-right-white" to={content?.news_button_url}>{content?.news_button_text}</Link> : null}
                        </div>
                    </div>
                    {data?.map((card, index) => (
                        <div className="col-lg-4 col-sm-12 pr-30 mb-50 order-2 order-lg-3" key={index}>
                            <div className="card-grid-style-4"><span className="tag-dot">{card.published_at}</span><Link className="text-heading-4" to={card.slug}>{card.title}</Link>
                                <div className="grid-4-img"><Link to={card.slug}><img src={`https://vion.make.az/storage/${card.image}`} alt="Vion" /></Link></div>
                            </div>
                        </div>
                    ))}




                </div>
            </div>
        </section>
    )
}

export default NewsSection