// components/modulesComponents/FullWidthImageSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const FullWidthImageSection = ({ content, module_type }) => {

  // Əgər bu Image modulu-dursa, heç nə göstərmə - bu artıq ImageSection tərəfindən idarə olunur
  if (module_type === "Image") {
    return null;
  }

  // Əgər bu Full-Width Image Section-dursa (köhnə funksionallıq)
  return (
    <section className="section-box mt-100 bg-3 pt-90 justify-content-center">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5 col-sm-12 col-12 ">
              {content.fwi_title ? <h2 className="text-heading-1 mb-30 mt-20">{content.fwi_title}</h2> : null}
              {content.fwi_description ? <p className="text-body-normal">{content.fwi_description}</p> : null}
              {content.fwi_button_text ? <div className="mt-30"><a className="btn btn-black text-body-capitalized icon-arrow-right-white" href={`mailto:${content.fwi_button_url}`}>{content.fwi_button_text}</a></div> : null}
            
          </div>
          <div className="col-lg-6 col-sm-12 col-12 block-gallery-1">
            <div className="row">
              <div className="col-lg-10 crop-box">
                <img 
                  className="img-responsive" 
                  src={`https://vionadvisory.com/storage/${content.fwi_image}`} 
                  alt="Vion"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullWidthImageSection;