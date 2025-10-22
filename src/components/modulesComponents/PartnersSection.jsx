import React from "react";

const PartnersSection = ({ content, data }) => {
  return (
    <section className="section-box partner-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-2 col-sm-1 col-12"></div>
          <div className="container text-center col-lg-8 col-sm-10 col-12">
            {content?.partners_title ? (
              <h2 className="text-heading-1 color-gray-900">
                {content?.partners_title}
              </h2>
            ) : null}
            {content?.partners_description ? (
              <p className="text-body-lead-large color-gray-600 mt-20">
                {content?.partners_description}
              </p>
            ) : null}
          </div>
          <div className="col-lg-2 col-sm-1 col-12"></div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-wrap justify-content-center" style={{ rowGap: "90px", columnGap: "120px" }}>
            {data.map((partner, index) => (
              <a target="blank_" href={partner.website} key={index}>
                <img
                  alt={partner.name}
                  src={`/storage/${partner.logo}`}
                  style={{ width: "100px", height: "100px", objectFit: "contain" }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
