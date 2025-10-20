import React from 'react'

const ContactSection = ({ content }) => {
    return (
        <section class="section-box mb-200">
        <div class="container mb-20 mt-140">
          <div class="bdrd-58 box-gray-100  bg-7">
            <div class="row">
              <div class="col-lg-12 mb-60"><span class="text-body-capitalized text-uppercase">Contact us</span>
                <h2 class="text-heading-3 color-gray-900 mt-10">Let’s talk about your next move</h2>
                <p class="text-body-text col-lg-4 color-gray-600 mt-20">Every great strategy begins with a conversation. Contact us and let’s make your ideas happen.</p>
              </div>
              <div class="col-lg-4 mb-40">
                <h4 class="text-heading-6 col-lg-6 color-gray-900 mb-10 mt-10">{content?.company_name}</h4>
                <p class="text-body-text col-lg-5 color-gray-600 mb-30">{content?.company_address}</p>
                <p class="text-body-text color-gray-600"><a class="underline color-gray-600" href={content?.phone}>{content?.phone}</a></p>
                <p class="text-body-text color-gray-600"><a class="underline color-gray-600" href={`mailto:${content?.email}`}>{content?.email}</a></p>
              </div>
              <div class="col-lg-8">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <input class="form-control" type="text" value="" placeholder="Enter your name"/>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <input class="form-control" type="text" value="" placeholder="Company (optional)"/>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <input class="form-control" type="text" value="" placeholder="Your email"/>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <input class="form-control" type="text" value="" placeholder="Phone number"/>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <textarea class="form-control" placeholder="Tell us about yourself"></textarea>
                    </div>
                  </div>
                  <div class="col-lg-12 mt-15">
                    <button class="btn btn-black icon-arrow-right-white mr-40 mb-20" type="submit">Send Message</button><br class="d-lg-none d-block"/>
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