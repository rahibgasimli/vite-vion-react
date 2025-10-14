import React from 'react'
import Banner1 from "../assets/imgs/page/homepage7/banner-1.svg"
import Banner2 from "../assets/imgs/page/homepage7/banner-2.svg"

const Home = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mt-30">
                        <h1 className="text-display-4"><span className="color-green-900">Strategic consulting</span> for lasting growth</h1>
                    </div>
                    <div className="col-lg-5 offset-xl-1 mt-30">
                        <p className="text-body-lead-large color-gray-500">We help companies navigate complexity and achieve measurable results through tailored strategies and hands-on expertise.</p>
                        <div className="mt-40"><a className="btn btn-black shape-round icon-arrow-right-white" href="#">Explore Services</a></div>
                    </div>
                </div>
            </div>
            <section className="container">
                <div className="row">
                    <div className="col-lg-7"><img src={Banner1} /></div>
                    <div className="col-lg-5"><img src={Banner2} /></div>
                </div>
            </section>

            <div className="section-box mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <div className="pb-20 text-mb-center">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center"><span className="text-display-3 color-green-900"><span className="count">120</span>+</span>
                                        <div className="text-body-quote">Completed projects</div>
                                        <p className="text-body-text color-gray-500 mt-10">Delivered strategic and operational projects across diverse industries.</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center"><span className="text-display-3 color-green-900"><span className="count">15</span>+</span>
                                        <div className="text-body-quote">Years of expertise</div>
                                        <p className="text-body-text color-gray-500 mt-10">Our consultants bring extensive local and international experience.</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center"><span className="text-display-3 color-green-900"><span className="count">25</span>+</span>
                                        <div className="text-body-quote">Skilled experts</div>
                                        <p className="text-body-text color-gray-500 mt-10">Professionals specialized in strategy, finance, digital, and operations.</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center"><span className="text-display-3 color-green-900"><span className="count">20</span>+</span>
                                        <div className="text-body-quote">Trusted clients</div>
                                        <p className="text-body-text color-gray-500 mt-10">Organizations that partnered with VION for lasting impact.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                </div>
            </div>

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
                                <div className="grid-1-img"><img src="assets/imgs/page/homepage1/right-arrow.svg" alt="Vion" /></div>
                                <h3 className="text-heading-3 mt-20">About VION</h3>
                                <p className="text-body-excerpt mt-20">We bring clarity to complexity. Our story is built on a mission to empower organizations with strategies that drive measurable results. With values rooted in integrity, we deliver impact that lasts.</p>
                                <div className="mt-30"><a className="btn btn-default btn-white icon-arrow-right" href="page-about-1.html">Learn more</a></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12  d-flex">
                            <div className="card-grid-1 bg-2 hover-up">
                                <div className="grid-1-img"><img src="assets/imgs/page/homepage1/right-arrow.svg" alt="Vion" /></div>
                                <h3 className="text-heading-3 mt-20">Careers</h3>
                                <p className="text-body-excerpt mt-20">Joining VION means more than just a job — it is an opportunity to grow, learn, and create meaningful change. We invest in people and provide the environment for ambitious consultants to thrive.</p>
                                <div className="mt-30"><a className="btn btn-default btn-white icon-arrow-right" href="page-about-2.html">Learn more</a></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12  d-flex">
                            <div className="card-grid-1 bg-3 hover-up">
                                <div className="grid-1-img"><img src="assets/imgs/page/homepage1/right-arrow.svg" alt="Vion" /></div>
                                <h3 className="text-heading-3 mt-20">Our Team</h3>
                                <p className="text-body-excerpt mt-20">Behind every strategy is a team of passionate professionals committed to delivering results. Our experts combine industry knowledge with innovative thinking.</p>
                                <div className="mt-30"><a className="btn btn-default btn-white icon-arrow-right" href="page-about-3.html">Learn more</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-sm-1 col-12"></div>
                        <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                            <h2 className="text-heading-1 color-gray-900">Strategies that inspire trust and drive results</h2>
                            <p className="text-body-lead-large color-gray-600 mt-20">Across industries, we deliver strategies and transformations that stand the test of time.</p>
                        </div>
                        <div className="col-lg-2 col-sm-1 col-12"></div>
                    </div>
                </div>
                <div className="container">
                    <div className="text-center mt-90">
                        <ul className="nav" role="tablist">
                            <li><a className="btn btn-default btn-bd-green-hover btn-select active" href="#tab-1" data-bs-toggle="tab" role="tab" aria-controls="tab-1" aria-selected="true">Sales & Marketing</a></li>
                            <li><a className="btn btn-default btn-bd-green-hover btn-select" href="#tab-2" data-bs-toggle="tab" role="tab" aria-controls="tab-2" aria-selected="true">Digital & Technology</a></li>
                            <li><a className="btn btn-default btn-bd-green-hover btn-select" href="#tab-3" data-bs-toggle="tab" role="tab" aria-controls="tab-3" aria-selected="true">Finance & Investments</a></li>
                            <li><a className="btn btn-default btn-bd-green-hover btn-select" href="#tab-4" data-bs-toggle="tab" role="tab" aria-controls="tab-4" aria-selected="true">Organization & Transformation</a></li>
                            <li><a className="btn btn-default btn-bd-green-hover btn-select" href="#tab-5" data-bs-toggle="tab" role="tab" aria-controls="tab-5" aria-selected="true">Strategy</a></li>
                            <li><a className="btn btn-default btn-bd-green-hover btn-select" href="#tab-6" data-bs-toggle="tab" role="tab" aria-controls="tab-6" aria-selected="true">Operations Management</a></li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div className="tab-content">
                        <div className="tab-pane fade active show" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                            <div className="bg-8 panel-box mt-50">
                                <div className="row">

                                    <div className="col-lg-7 col-md-12 order-lg-1 order-2">
                                        <div className="row">
                                            <div className="col-lg-9 col-md-12 box-optimized">
                                                <h3 className="text-heading-2">Build stronger sales engines and smarter marketing</h3>
                                                <p className="text-body-excerpt mt-30">VION helps organizations design sales funnels that convert, optimize marketing spend, and align go-to-market strategies with business growth. From digital campaigns to sales enablement, we turn leads into loyal customers.</p>
                                                <div className="mt-40"><a className="btn btn-default btn-white icon-arrow-right" href="page-service-1.html">Learn more</a></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-5 col-md-12 order-lg-2 order-1">
                                        <div className="icon-pattern crop-box">
                                            <img className="img-responsive" src="assets/imgs/page/homepage1/img-1.svg" alt="Vion" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
                            <div className="bg-1 panel-box mt-50">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="box-optimized">
                                            <h3 className="text-heading-2">Design Studios That Everyone Should Know</h3>
                                            <p className="text-body-excerpt mt-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                            <div className="mt-40"><a className="btn btn-default btn-white icon-arrow-right" href="page-service-1.html">Learn more</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
                            <div className="bg-3 panel-box mt-50">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="box-optimized">
                                            <h3 className="text-heading-2">We can blend colors multiple ways</h3>
                                            <p className="text-body-excerpt mt-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                            <div className="mt-40"><a className="btn btn-default btn-white icon-arrow-right" href="page-service-1.html">Learn more</a></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="block-video icon-pattern"><a className="popup-youtube btn-play-video" href="https://www.youtube.com/watch?v=oRI37cOPBQQ"></a><img className="img-responsive" src="assets/imgs/page/homepage1/img-1-3.jpg" alt="Vion" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-4" role="tabpanel" aria-labelledby="tab-4">
                            <div className="bg-4 panel-box mt-50">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="box-optimized">
                                            <h3 className="text-heading-2">Choose The Best Plan That's For You</h3>
                                            <p className="text-body-excerpt mt-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                            <div className="mt-40"><a className="btn btn-default btn-white icon-arrow-right" href="page-service-1.html">Learn more</a></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="block-video icon-pattern"><a className="popup-youtube btn-play-video" href="https://www.youtube.com/watch?v=oRI37cOPBQQ"></a><img className="img-responsive" src="assets/imgs/page/homepage1/img-1-4.jpg" alt="Vion" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-5" role="tabpanel" aria-labelledby="tab-5">
                            <div className="bg-5 panel-box mt-50">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="box-optimized">
                                            <h3 className="text-heading-2">Subscribe our newsletter to get gift</h3>
                                            <p className="text-body-excerpt mt-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                            <div className="mt-40"><a className="btn btn-default btn-white icon-arrow-right" href="page-service-1.html">Learn more</a></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="block-video icon-pattern"><a className="popup-youtube btn-play-video" href="https://www.youtube.com/watch?v=oRI37cOPBQQ"></a><img className="img-responsive" src="assets/imgs/page/homepage1/img-1-5.jpg" alt="Vion" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-6" role="tabpanel" aria-labelledby="tab-6">
                            <div className="bg-6 panel-box mt-50">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="box-optimized">
                                            <h3 className="text-heading-2">Ready to get started? Create and Account</h3>
                                            <p className="text-body-excerpt mt-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                            <div className="mt-40"><a className="btn btn-default btn-white icon-arrow-right" href="page-service-1.html">Learn more</a></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="block-video icon-pattern"><a className="popup-youtube btn-play-video" href="https://www.youtube.com/watch?v=oRI37cOPBQQ"></a><img className="img-responsive" src="assets/imgs/page/homepage1/img-1-6.jpg" alt="Vion" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box overflow-visible mt-180">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center"><a className="item-logo box-hover-shadow hover-up" href="#"><img alt="Vion" src="assets/imgs/slider/logo/sample-logo-1.svg" /></a></div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center"><a className="item-logo box-hover-shadow hover-up" href="#"><img alt="Vion" src="assets/imgs/slider/logo/sample-logo-1.svg" /></a></div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center"><a className="item-logo box-hover-shadow hover-up" href="#"><img alt="Vion" src="assets/imgs/slider/logo/sample-logo-1.svg" /></a></div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center"><a className="item-logo box-hover-shadow hover-up" href="#"><img alt="Vion" src="assets/imgs/slider/logo/sample-logo-1.svg" /></a></div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center"><a className="item-logo box-hover-shadow hover-up" href="#"><img alt="Vion" src="assets/imgs/slider/logo/sample-logo-1.svg" /></a></div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center"><a className="item-logo box-hover-shadow hover-up" href="#"><img alt="Vion" src="assets/imgs/slider/logo/sample-logo-1.svg" /></a></div>
                    </div>
                </div>
            </section>

            <section className="section-box pt-100 pb-100 mt-180 bg-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mb-30">
                            <h3 className="text-heading-1 mt-30">The impact of our work, told by our clients</h3>
                            <p className="text-body-lead-large color-gray-600 mt-30">Organizations across industries trust VION to deliver clarity, strategy, and measurable results.</p>
                            <div className="mt-40"><a className="btn btn-default btn-white icon-arrow-right" href="page-service-2.html">Learn More</a></div>
                        </div>
                        <div className="col-lg-7">
                            <div className="row" data-masonry="{&quot;percentPosition&quot;: true }">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="card-grid-style-2 card-square hover-up mb-20">
                                        <p className="text-body-text color-gray-600 text-comment">&quot;VION helped us rethink our growth strategy. Team combined deep industry knowledge with practical solutions, and the results exceeded our expectations.&quot;</p>
                                        <div className="box-img-user">
                                            <div className="img-user img-user-round"><img src="assets/imgs/page/homepage2/user-1.png" alt="Vion" /></div>
                                            <h4 className="text-body-lead color-gray-900 mb-5">Leyla Mammadova</h4>
                                            <p className="text-body-text-md">Bank Respublika</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="card-grid-style-2 card-square hover-up mb-20">
                                        <p className="text-body-text color-gray-600 text-comment">&quot;Their consultants challenged our way of thinking and helped us redesign our organizational structure. Today, our teams are more agile and performance-driven than ever.&quot;</p>
                                        <div className="box-img-user">
                                            <div className="img-user img-user-round"><img src="assets/imgs/page/homepage2/user-2.png" alt="Vion" /></div>
                                            <h4 className="text-body-lead color-gray-900 mb-5">Barak Obama</h4>
                                            <p className="text-body-text-md">Bonaqua</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="card-grid-style-2 card-square hover-up mb-20">
                                        <p className="text-body-text color-gray-600 text-comment">&quot;Working with VION gave us a clear roadmap for digital transformation. They guided our ERP implementation and analytics setup, making the transition smooth and impactful.&quot;</p>
                                        <div className="box-img-user">
                                            <div className="img-user img-user-round"><img src="assets/imgs/page/homepage2/user-3.png" alt="Vion" /></div>
                                            <h4 className="text-body-lead color-gray-900 mb-5">Rasul Sardarov</h4>
                                            <p className="text-body-text-md">Bakcell</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="card-grid-style-2 card-square hover-up mb-20">
                                        <p className="text-body-text color-gray-600 text-comment">&quot;We partnered with VION on a market entry project. The strategic insights and hands-on support we received gave us confidence to expand successfully.&quot;</p>
                                        <div className="box-img-user">
                                            <div className="img-user img-user-round"><img src="assets/imgs/page/homepage2/user-4.png" alt="Vion" /></div>
                                            <h4 className="text-body-lead color-gray-900 mb-5">Ramil Samadov</h4>
                                            <p className="text-body-text-md">Make Agency</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
        </main>
    )
}

export default Home 