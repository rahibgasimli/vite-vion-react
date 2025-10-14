import React from 'react'

const NewsSection = () => {
  return (
    <section className="section-box">
    <div className="container mt-60">
        <div className="row">

            <div className="col-lg-8 col-12 order-1 order-lg-1 mb-30">
                <h2 className="text-heading-1 color-gray-900 mb-10">Latest News</h2>
                <p className="text-body-lead-large color-gray-600 mt-20 mb-10">From Our Blog And Event Fanpage</p>
            </div>

            <div className="col-lg-4 col-12 order-5 order-lg-2 d-flex justify-content-lg-end justify-content-start align-items-center">
                <div className="mt-20 mb-30 text-lg-end text-start">
                    <a className="btn btn-black icon-arrow-right-white" href="blog-2.html">View More</a>
                </div>
            </div>

            <div className="col-lg-4 col-sm-12 pr-30 mb-50 order-2 order-lg-3">
                <div className="card-grid-style-4"><span className="tag-dot">26.08.2025</span><a className="text-heading-4" href="blog-single.html">Shaping growth strategies in uncertain times</a>
                    <div className="grid-4-img"><a href="blog-single.html"><img src="assets/imgs/page/homepage1/img-news-1.png" alt="Vion" /></a></div>
                </div>
            </div>

            <div className="col-lg-4 col-sm-12 pr-30 mb-50 order-3 order-lg-4">
                <div className="card-grid-style-4"><span className="tag-dot">25.08.2025</span><a className="text-heading-4" href="blog-single.html">The future of digital transformation in Azerbaijan</a>
                    <div className="grid-4-img"><a href="blog-single.html"><img src="assets/imgs/page/homepage1/img-news-2.png" alt="Vion" /></a></div>
                </div>
            </div>

            <div className="col-lg-4 col-sm-12 pr-30 mb-50 order-4 order-lg-5">
                <div className="card-grid-style-4"><span className="tag-dot">22.08.2025</span><a className="text-heading-4" href="blog-single.html">Smart operations: from supply chains to cost optimization</a>
                    <div className="grid-4-img"><a href="blog-single.html"><img src="assets/imgs/page/homepage1/img-news-3.png" alt="Vion" /></a></div>
                </div>
            </div>

        </div>
    </div>
</section>
  )
}

export default NewsSection