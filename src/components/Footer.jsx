import React from 'react'

import FooterLogo from "../assets/imgs/template/logo.svg"

const Footer = () => {
  return (
    <footer className="footer mt-50">
      <div className="container">
        <div className="footer-top">
          <div className="row align-items-center">
            <div className="col-md-4 col-sm-6 text-center text-md-start"><a href="index.html"><img alt="Vion" src={FooterLogo}/></a></div>
            <div className="col-md-8 col-sm-6 text-center text-md-end color-green-900">
              <div className="footer-bottom color-green-900"><div className="footer-social"><a className="icon-socials icon-facebook" href="https://facebook.com" target="_blank"></a><a className="icon-socials icon-instagram" href="https://www.instagram.com" target="_blank"></a><a className="icon-socials icon-linkedin" href="https://www.linkedin.com" target="_blank"></a><a className="icon-socials icon-twitter" href="https://youtube.com" target="_blank"></a></div></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 width-20 mb-30">
            <h4 className="text-heading-5">Company</h4>
            <ul className="menu-footer mt-20">
              <li><a className="color-gray-900" href="#">About Us</a></li>
              <li><a className="color-gray-900" href="#">Our Team</a></li>
              <li><a className="color-gray-900" href="page-career.html">Careers</a></li>
              <li><a className="color-gray-900" href="#">Newsroom</a></li>
            </ul>
          </div>
          <div className="col-lg-3 width-20 mb-30">
            <h4 className="text-heading-5"></h4>
            <ul className="menu-footer mt-20">
              <li><a className="color-gray-900" href="#">Industries</a></li>
              <li><a className="color-gray-900" href="">Our work</a></li>
              <li><a className="color-gray-900" href="page-career.html">Insights</a></li>
              <li><a className="color-gray-900" href="#">Contacts</a></li>
            </ul>
          </div>
          <div className="col-lg-3 width-20 mb-30">
            <h4 className="text-heading-5">Services</h4>
            <ul className="menu-footer mt-20 color-gray-500">
              <li><a href="blog-2.html">Sales & Marketing</a></li>
              <li><a href="page-pricing-1.html">Digital & Technology</a></li>
              <li><a href="#">Finance & Investments</a></li>
            </ul>
          </div>
          <div className="col-lg-3 width-20 mb-30">
            <h4 className="text-heading-5"></h4>
            <ul className="menu-footer mt-20">
              <li><a href="page-faqs-1.html">Organization & Transformation</a></li>
              <li><a href="#">Strategy</a></li>
              <li><a href="#">Operations Management</a></li>
            </ul>
          </div>
          <div className="col-lg-3 width-16">
            <h4 className="text-heading-5">Contact</h4>
            <ul className="menu-footer mt-20 color-gray-600">
              <li>
                <a href="https://maps.google.com/?q=Heydar Aliyev Ave 92A Baku, Azerbaijan AZ1072">
                  Heydar Aliyev Ave 92A, Baku, Azerbaijan AZ1072
                </a>
              </li>
              <li><a className="underline" href="tel: +99455 283 8494">(+99455) 283 8494</a></li>
              <li><a className="underline" href="mailto:office@vion.az">office@vion.az</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottomm mt-20">
          <div className="row align-items-center d-flex ">
            <div className="col-md-6"><span className="color-gray-400 text-body-lead">&copy; VION 2025. All rights reserved.</span></div>
            <div className="col-md-6 text-center text-lg-end text-md-end"><img src="assets/imgs/page/homepage2/make-logo.svg" alt="" /></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer