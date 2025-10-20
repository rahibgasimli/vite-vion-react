import React from "react";

const ListSection = ({ content }) => {
  return (
    <section className="section-box mt-100 mb-140">
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-sm-1 col-12"></div>
          <div className="col-lg-10 col-sm-10 col-12 text-center">
            {content?.list_title ? (
              <h2 className="text-heading-1 color-gray-900 mb-10">
                {content?.list_title}
              </h2>
            ) : null}
            {content?.list_description ? (
              <p className="text-body-lead-large color-gray-600 mt-20">
                {content?.list_description}
              </p>
            ) : null}
          </div>
          <div className="col-lg-1 col-sm-1 col-12"></div>
        </div>
      </div>

      <div className="container mt-40">
        <div className="row">
          {content?.list_type === "card"
            ? // Kart stilində siyahı
              content?.list?.map((list, index) => (
                <div class="col-lg-6 col-md-6 col-sm-3 d-flex" key={index}>
                  <div class="card-grid-style-3 hover-up">
                    <h1 class="text-heading-1 color-green-800">{index + 1}</h1>
                    <h3 class="text-heading-3 mb-30 mt-30">{list.le_title}</h3>
                    <p class="text-body-text text-desc color-gray-500">
                      {list.le_description}
                    </p>
                  </div>
                </div>
              ))
            : content?.list?.map((list, index) => (
                <div class="col-lg-4 col-md-12 col-sm-12" key={index}>
                  <div class="list-icons mt-40 hover-up">
                    <div class="item-icon">
                      <span class="icon-left">
                        <i className={`${list.le_icon} icon-main`}></i>
                      </span> 
                      <h4 class="text-heading-4">{list.le_title}</h4>
                      <p class="text-body-text color-gray-600 mt-15">
                        {list.le_description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default ListSection;
