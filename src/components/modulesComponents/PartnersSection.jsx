import React from 'react'

import partnerLogo from "../../assets/imgs/slider/logo/sample-logo-1.svg"

const PartnersSection = () => {
  return (
    <section className="section-box overflow-visible mt-180">
    <div className="container">
        <div className="row justify-content-md-center">
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center"><a className="item-logo box-hover-shadow hover-up" href="#"><img alt="Vion" src={partnerLogo} /></a></div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center"><a className="item-logo box-hover-shadow hover-up" href="#"><img alt="Vion" src={partnerLogo} /></a></div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center"><a className="item-logo box-hover-shadow hover-up" href="#"><img alt="Vion" src={partnerLogo} /></a></div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center"><a className="item-logo box-hover-shadow hover-up" href="#"><img alt="Vion" src={partnerLogo} /></a></div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center"><a className="item-logo box-hover-shadow hover-up" href="#"><img alt="Vion" src={partnerLogo} /></a></div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center"><a className="item-logo box-hover-shadow hover-up" href="#"><img alt="Vion" src={partnerLogo} /></a></div>
        </div>
    </div>
</section>
  )
}

export default PartnersSection