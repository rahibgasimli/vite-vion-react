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
      <div className="card-grid-style-4"><span className="tag-dot">{news.published_at}</span><Link className="text-heading-4" to={`/blogs/${news.slug}`}>{news.title}</Link>
        <div className="grid-4-img"><Link to={`/blogs/${news.slug}`}><img src={`https://vion.make.az/storage/${news.image}`} alt={news.title} /></Link></div>
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
                className="img-responsive"
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
        <Link to={portfolio?.slug}>
          <div className="product-image crop-box">
            <img
              className="img-responsive"
              src={`https://vion.make.az/storage/${portfolio.image}`}
              alt={portfolio.title}
            />
          </div>
        </Link>
        <div className="product-info">
          <Link to={portfolio?.slug}>
            <h3 className="text-body-lead color-gray-900">{portfolio.title}</h3>
          </Link>
          <div className="d-flex mt-20">
            <div className="box-prices">
              <span className="location-icon">{portfolio?.location}</span>
            </div>
          </div>
          <div className="d-flex mt-30">
            <div className="button-add text-md-start">
              <Link className="btn btn-explorer" to={portfolio?.slug}>Explore</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ServiceItem = ({ service, index }) => (
    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" key={index}>
      <div className="grid-category-2">
        <div className="grid-category-image"><Link to={service.slug}><img src={`https://vion.make.az/storage/${service.image}`} /></Link></div><Link className="text-heading-5 color-gray-900" to={service.slug}>{service.title}</Link>
        <div className="category-info-bottom">
          <div className="link-readmore"><Link to={service.slug}>READ MORE</Link></div>
        </div>
      </div>
    </div>
  )

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
                        <div class="product-image crop-box"><img class="img-responsive" src="assets/imgs/page/homepage8/img-3.svg" /></div></a>
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

      case 'Service':
        return (
          <div>
            <section className="section-box">
              <div className="banner-hero banner-breadcrums bg-8">
                <div className="container text-center">
                  <h1 className="text-heading-2 color-gray-1000 mb-20">{pageTitle}</h1>
                  <p className="text-body-text color-gray-500">
                    {pageDescription}
                  </p>
                </div>
              </div>
            </section>
            <div class="section-box mt-100">
              <div class="container list-category-homepage7 mt-70">
                <div class="row">
                  {data.map((service, index) => (
                    <ServiceItem
                      service={service}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case 'Project':
        return (
          <div>
            {/* BANNER SECTION */}
            <section className="section-box">
              <div className="banner-hero banner-breadcrums bg-8">
                <div className="container text-center">
                  <h1 className="text-heading-2 color-gray-1000 mb-20">{pageTitle}</h1>
                  <p className="text-body-text color-gray-500">
                    {pageDescription}
                  </p>
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