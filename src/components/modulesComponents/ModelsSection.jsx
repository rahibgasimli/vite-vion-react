import React from 'react';
import { Link } from 'react-router-dom';

const ModelsSection = ({ data, content, pageTitle, pageDescription }) => {
  const { model_type, has_anchor_group } = content;

  const TeamMember = ({ member }) => (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="card-grid-style-5 hover-up">
        <div className="grid-5-img mb-15">
          <img
            src={`https://vion.make.az/storage/${member.image}`}
            alt={member.name}
          />
        </div>
        <span className="text-body-text-md color-green-900">{member.position}</span>
        <h3 className="text-heading-5 mb-5 mt-5">{member.name}</h3>
        <p className="text-body-excerpt text-desc color-gray-400 mt-15 mb-20">{member.bio}</p>
        <div className="social-bottom">
          {member.facebook_url && <a className="icon-socials icon-facebook" href={member.facebook_url}></a>}
          {member.instagram_url && <a className="icon-socials icon-instagram" href={member.instagram_url}></a>}
          {member.linkedin_url && <a className="icon-socials icon-linkedin" href={member.linkedin_url}></a>}
        </div>
      </div>
    </div>
  );

  const NewsItem = ({ news, hasAnchor }) => (
    <div className="col-lg-4 col-sm-12 pr-30 mb-50" id={hasAnchor ? news.slug : undefined}>
      <div className="card-grid-style-4"><span className="tag-dot">{news.published_at}</span><Link className="text-heading-4" to={news.slug}>{news.title}</Link>
        <div className="grid-4-img"><Link to={news.slug}><img src={`https://vion.make.az/storage/${news.image}`} alt={news.title} /></Link></div>
      </div>
    </div>
  )

  const IndustryItem = ({ industry, hasAnchor, index }) => {
    const isEven = index % 2 === 0;
    
    return (
      <div className="container mt-90">
        <div className="row align-items-center" id={hasAnchor ? industry.slug : undefined}>
          {/* Şəkil həmişə solda, amma order ilə dəyişir */}
          <div className={`col-lg-5 col-sm-12 block-img-we-do ${isEven ? 'order-lg-1' : 'order-lg-2'}`}>
            <div className="inner-image">
              <img 
                className="bdrd-16 img-responsive" 
                src={`https://vion.make.az/storage/${industry.image}`} 
                alt={industry.title}
              />
            </div>
          </div>
          
          {/* Mətn həmişə sağda, amma order ilə dəyişir */}
          <div className={`col-lg-7 col-sm-12 block-we-do-2 ${isEven ? 'order-lg-2' : 'order-lg-1'}`}>
            <h3 className="text-heading-1 mt-30">{industry.title}</h3>
            <p className="text-body-lead-large color-gray-600 mt-60">{industry.description}</p>
            <div className="mt-60">
              <a className="btn btn-black shape-round icon-arrow-right-white" href="#">
                Discuss Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const PortfolioItem = ({ portfolio, hasAnchor }) => (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" id={hasAnchor ? portfolio.slug : undefined}>
      <div className="product-item-2 product-item-3 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
        <a href={portfolio.link || "#"}>
          <div className="product-image crop-box">
            <img 
              className="img-responsive" 
              src={`https://vion.make.az/storage/${portfolio.image}`} 
              alt={portfolio.title}
            />
          </div>
        </a>
        <div className="product-info">
          <a href={portfolio.link || "#"}>
            <h3 className="text-body-lead color-gray-900">{portfolio.title}</h3>
          </a>
          <div className="d-flex mt-20">
            <div className="box-prices">
              <span className="location-icon">{portfolio.location || 'Baku, Azerbaijan'}</span>
            </div>
          </div>
          <div className="d-flex mt-30">
            <div className="button-add text-md-start">
              <a className="btn btn-explorer" href={portfolio.link || "#"}>Explore</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (model_type) {
      case 'Team':
        return (
          <div>
            {/* BANNER HERO - FULL WIDTH */}
            <section className="section-box">
              <div className="banner-hero banner-breadcrums bg-5">
                <div className="container text-center">
                  <h1 className="text-heading-2 color-gray-1000 mb-20">{pageTitle}</h1>
                  <p className="text-body-text color-gray-500">{pageDescription}</p>
                </div>
              </div>
            </section>

            {/* TEAM CARDS - NORMAL CONTAINER */}
            <section className="section-box">
              <div className="container mt-150"></div>
              <div className="container mt-80">
                <div className="row align-items-center">
                  {data.map((member, index) => (
                    <TeamMember key={member.id || index} member={member} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        );

      case 'Blog':
        if (pageTitle === "Impact stories" || window.location.pathname.includes('portfolios')) {
          // Portfolio layout istifadə et
          return (
            <div>
            <section className="section-box">
              <div className="banner-hero banner-breadcrums bg-5">
                <div className="container text-center">
                  <h1 className="text-heading-2 color-gray-1000 mb-20">{pageTitle}</h1>
                  <p className="text-body-text color-gray-500">{pageDescription}</p>
                </div>
              </div>
            </section>

            <div class="section-box mt-150">
        <div class="container">
          <div class="row">
            
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div class="product-item-2 product-item-3 wow animate__animated animate__fadeIn" data-wow-delay=".1s"><a href="#">
                  <div class="product-image crop-box"><img class="img-responsive" src="assets/imgs/page/homepage8/img-3.svg"/></div></a>
                <div class="product-info">
                 <a href="#">
                    <h3 class="text-body-lead color-gray-900"></h3></a>
                  <div class="d-flex mt-20">
                    <div class="box-prices"><span class="location-icon">Baku, Azerbaijan</span></div>
                  </div>
                  <div class="d-flex mt-30">
                    <div class="button-add text-md-start"><a class="btn btn-explorer" href="#">Explore</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

            </div>
          );
        } else 
          // Normal blog layout istifadə et
          return (
            <div>
            <section className="section-box">
              <div className="banner-hero banner-breadcrums bg-5">
                <div className="container text-center">
                  <h1 className="text-heading-2 color-gray-1000 mb-20">{pageTitle}</h1>
                  <p className="text-body-text color-gray-500">{pageDescription}</p>
                </div>
              </div>
            </section>

            <section className="section-box">
              <div className="container mt-90">
                <div className="row">
                  {data.map((news, index) => (
                    <NewsItem key={news.id || index} news={news} />
                  ))}
                </div>
              </div>
            </section>
          </div>
          );

      case 'Industry':
        return (
            <div>
              <section className="section-box">
                <div className="banner-hero banner-breadcrums bg-8">
                  <div className="container text-center">
                    <h1 className="text-heading-2 color-gray-1000 mb-20">{pageTitle}</h1>
                    <p className="text-body-text color-gray-500">{pageDescription}</p>
                  </div>
                </div>
              </section>
        
              <div className="industry-list">
                {data.map((industry, index) => (
                  <IndustryItem
                    key={industry.id || index}
                    industry={industry}
                    hasAnchor={has_anchor_group}
                    index={index}
                  />
                ))}
              </div>
            </div>
        );

        case 'Portfolios':
          return (
            <div>
              {/* BANNER SECTION */}
              <section className="section-box">
                <div className="banner-hero banner-breadcrums bg-8">
                  <div className="container text-center">
                    <h1 className="text-heading-2 color-gray-1000 mb-20">{pageTitle}</h1> {/* pageTitl -> pageTitle */}
                    <p className="text-body-text color-gray-500">
                      {pageDescription || 'From strategic investments and digital transformation to organizational change and operational excellence, every case highlights how we turn challenges into opportunities.'}
                    </p>
                  </div>
                </div>
              </section>
        
              {/* PROMOTION SECTION */}
              <section className="section-box promotion">
                <div className="container mt-90">
                  <div className="row align-items-center">
                    <div className="col-lg-5 col-sm-12 block-img-we-do">
                      <div className="inner-image">
                        <img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage2/img-2.png" alt="Agon" />
                      </div>
                    </div>
                    <div className="col-lg-7 col-sm-12 block-we-do-2">
                      <h3 className="text-heading-1 mt-30">Let's create your success story together</h3>
                      <p className="text-body-lead-large color-gray-600 mt-60">
                        Every project is more than a case study — it is a partnership built on trust, insight, and measurable results.
                        If you are ready to explore new opportunities, expand into new markets, or transform your organization, our consultants are here to help.
                      </p>
                      <div className="mt-60">
                        <a className="btn btn-black shape-round icon-arrow-right-white" href="#">
                          Discuss Your Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
        
              {/* PORTFOLIO ITEMS SECTION */}
              <div className="section-box mt-150">
                <div className="container">
                  <div className="row">
                    {data.map((portfolio, index) => (
                      <PortfolioItem
                        key={portfolio.id || index}
                        portfolio={portfolio}
                        hasAnchor={has_anchor_group}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );

      default:
        return (
          <div className="alert alert-warning">
            Model type '{model_type}' is not supported yet.
          </div>
        );
    }
  };

  return (
    <div className={`models-section ${model_type.toLowerCase()}-section`}>
      {renderContent()}
    </div>
  );
};

export default ModelsSection;