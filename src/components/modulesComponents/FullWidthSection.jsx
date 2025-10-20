import React from "react";
import { Link } from "react-router-dom";

const FullWidthSection = ({ content }) => {
  return (
    <section className="section-box mt-100 bg-green-900 pt-100 pb-100">
      <div className="container">
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-lg-8 col-sm-12">
            <h2 className="text-heading-2 color-white mb-60">
              {content.fwt_description}
            </h2>
            <div className="">
              <Link
                className="btn btn-white hover-up icon-arrow-right"
                to={`/${content.fwt_button_url}`}
              >
                {content.fwt_button_text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullWidthSection;
