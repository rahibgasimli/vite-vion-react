import React from 'react';

const TextSection = ({ content }) => {
  if (!content?.text) return null;

  return (
    <section className="section-box mt-50 mb-50">
      <div className="container">
        <div className="row">
          {/* Empty space on left */}
          <div className="col-lg-1 col-md-12"></div>

          {/* Share column */}
          <div className="col-lg-1 col-md-2 col-sm-2 col-3 text-center">
            <div className="social-sticky">
              <h3 className="text-heading-6 color-gray-400 mb-20 mt-5">Share</h3>
              <a className="share-social share-fb" href="https://facebook.com" target="_blank" rel="noreferrer"></a>
              <br />
              <a className="share-social share-tw" href="https://twitter.com" target="_blank" rel="noreferrer"></a>
              <br />
              <a className="share-social share-pi" href="https://www.pinterest.com" target="_blank" rel="noreferrer"></a>
            </div>
          </div>

          {/* Content column (API-dən gəlir) */}
          <div className="col-lg-8 col-md-8 col-sm-10 col-9">
            <div
              className="single-detail"
              dangerouslySetInnerHTML={{ __html: content.text }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextSection;
