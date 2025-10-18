import React from 'react'

const ContactSection = () => {
    return (
        <section className="section-box mb-200">
            <div className="container mb-20 mt-140">
                <div className="bdrd-58 box-gray-100  bg-7">
                    <div className="row">
                        <div className="col-lg-12 mb-60"><span className="text-body-capitalized text-uppercase">Contact us</span>
                            <h2 className="text-heading-3 color-gray-900 mt-10">Let’s talk about your next move</h2>
                            <p className="text-body-text col-lg-4 color-gray-600 mt-20">Every great strategy begins with a conversation. Contact us and let’s make your ideas happen.</p>
                        </div>
                        <div className="col-lg-4 mb-40">
                            <h4 className="text-heading-6 col-lg-6 color-gray-900 mb-10 mt-10"><span className="color-green-900">VION</span> - Strategic Management Consulting</h4>
                            <p className="text-body-text col-lg-5 color-gray-600 mb-30">Heydar Aliyev Ave 92A Baku, Azerbaijan AZ1072</p>
                            <p className="text-body-text color-gray-600"><a className="underline color-gray-600" href="tel: +99455 283 8494">(+99455) 283 8494</a></p>
                            <p className="text-body-text color-gray-600"><a className="underline color-gray-600" href="mailto:office@vion.az">office@vion.az</a></p>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input className="form-control" type="text" value="" placeholder="Enter your name"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input className="form-control" type="text" value="" placeholder="Company (optional)"></input>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input className="form-control" type="text" value="" placeholder="Your email"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input className="form-control" type="text" value="" placeholder="Phone number"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Tell us about yourself"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mt-15">
                                        <button className="btn btn-black icon-arrow-right-white mr-40 mb-20" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection