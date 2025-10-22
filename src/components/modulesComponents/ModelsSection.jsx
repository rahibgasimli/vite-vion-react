import { Link } from "react-router-dom";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "../icons";
import FullWidthMultipleImagesSection from "./FullWidthMultipleImagesSection"; // Bu importu əlavə edin
import { useState, useEffect } from "react";

const ModelsSection = ({ data, content, pageTitle, pageDescription }) => {
  const { model_type, has_anchor_group } = content;

  // Industry model_type üçün render funksiyası
  const renderIndustryContent = () => {
  if (model_type !== "Industry") return null;

  // Yalnız injected olmayan industry-ləri anchor üçün götür
  const industryItems = data.filter(item => !item.injected_module);

  return (
    <section className="section-box">
      <div className="container mt-100">
        {/* Anchor tab-lar */}
        {has_anchor_group && (
          <div className="text-center mb-60">
            <ul className="nav" role="tablist">
              {industryItems.map((item, index) => (
                <li key={index}>
                  <a
                    className="btn btn-default btn-bd-green-hover btn-select"
                    href={`#${item.slug}`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Industry contentləri */}
        <div className="industry-list">
          {data.map((item, index) => {
            if (item.injected_module) {
              return (
                <FullWidthMultipleImagesSection
                  key={`injected-${index}`}
                  content={item.content}
                  data={item.data}
                />
              );
            } else {
              return (
                <IndustryItem
                  key={item.id || index}
                  industry={item}
                  hasAnchor={has_anchor_group}
                  index={index}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};


  const TeamMember = ({ member }) => (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="card-grid-style-5 hover-up">
        <div className="grid-5-img mb-15">
          <img
            src={`https://vionadvisory.com/storage/${member.image}`}
            className="object-fit-cover"
            alt={member.name}
          />
        </div>
        <span className="text-body-text-md color-green-900">
          {member.position}
        </span>
        <h3 className="text-heading-5 mb-5 mt-5">{member.name}</h3>
        <p className="text-body-excerpt text-desc color-gray-400 mt-15 mb-20">
          {member.bio}
        </p>
        <div className="social-bottom">
          {member.instagram_url && (
            <a href={member.instagram_url} target="_blank">
              <InstagramIcon />
            </a>
          )}
          {member.linkedin_url && (
            <a href={member.linkedin_url} target="_blank">
              <LinkedinIcon />
            </a>
          )}
          {member.facebook_url && (
            <a href={member.facebook_url} target="_blank">
              <FacebookIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );

  const NewsItem = ({ news, hasAnchor }) => (
    <div
      className="col-lg-4 col-sm-12 pr-30 mb-50"
      id={hasAnchor ? news.slug : undefined}
    >
      <div className="card-grid-style-4">
        <span className="tag-dot">{news.published_at}</span>
        <Link className="text-heading-4" to={`/blogs/${news.slug}`}>
          {news.title}
        </Link>
        <div className="grid-4-img">
          <Link to={`/blogs/${news.slug}`}>
            <img
              src={`https://vionadvisory.com/storage/${news.image}`}
              alt={news.title}
            />
          </Link>
        </div>
      </div>
    </div>
  );

  const IndustryItem = ({ industry, hasAnchor, index }) => {
    const isEven = index % 2 === 0;
    const [aktivTab, setAktivTab] = useState(0);

    const tabClick = (index) => {
      setAktivTab(index);
    };

    useEffect(() => {
      const hash = window.location.hash.replace("#", "");
      if (hasAnchor && hash === industry.slug) {
        const el = document.getElementById(industry.slug);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [hasAnchor, industry.slug]);

    return (
      <div className="container mt-90" key={industry.id || index}>
        <div
          className="row align-items-center"
          id={hasAnchor ? industry.slug : undefined}
        >
          {/* Şəkil həmişə solda, amma order ilə dəyişir */}
          <div
            className={`col-lg-5 col-sm-12 block-img-we-do ${
              isEven ? "order-lg-1" : "order-lg-2"
            }`}
          >
            <div className="inner-image">
              <img
                className="img-responsive"
                src={`https://vionadvisory.com/storage/${industry.image}`}
                alt={industry.title}
              />
            </div>
          </div>

          {/* Mətn həmişə sağda, amma order ilə dəyişir */}
          <div
            className={`col-lg-7 col-sm-12 ${
              isEven ? "order-lg-2 block-we-do-2" : "order-lg-1 block-we-do-2-right"
            }`}
          >
            <h3 className="text-heading-1 mt-30">{industry.title}</h3>
            <p className="text-body-lead-large color-gray-600 mt-60">
              {industry.description}
            </p>
            <div className="mt-60">
              <a
                className="btn btn-black shape-round icon-arrow-right-white"
                href={industry.button_url}
              >
                {industry.button_text}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const PortfolioItem = ({ portfolio, hasAnchor }) => (
    <div
      className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
      id={hasAnchor ? portfolio.slug : undefined}
    >
      <div
        className="product-item-2 product-item-3 wow animate__animated animate__fadeIn"
        data-wow-delay=".1s"
      >
        <Link to={`/projects/${portfolio.slug}`}>
          <div className="product-image crop-box">
            <img
              className="img-responsive"
              src={`https://vionadvisory.com/storage/${portfolio.main_image}`}
              alt={portfolio.title}
            />
          </div>
        </Link>
        <div className="product-info">
          <Link to={`/projects/${portfolio.slug}`}>
            <h3 className="text-body-lead color-gray-900">{portfolio.title}</h3>
          </Link>
          <div className="d-flex mt-20">
            <div className="box-prices">
              <span className="location-icon">{portfolio?.location}</span>
            </div>
          </div>
          <div className="d-flex mt-30">
            <div className="button-add text-md-start">
              <Link
                className="btn btn-explorer"
                to={`/projects/${portfolio.slug}`}
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ServiceItem = ({ service, index }) => (
    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" key={index}>
      <div className="grid-category-2">
        <div className="grid-category-image">
          <Link to={service.slug}>
            <img src={`https://vionadvisory.com/storage/${service.image}`} />
          </Link>
        </div>
        <div className="service_container">
          <Link className="text-heading-5 color-gray-900" to={service.slug}>
            {service.title}
          </Link>
          <div className="grey_line"></div>
          <Link className="text-heading-6 color-gray-900" to={service.slug}>
            {service.short_description}
          </Link>
          <div className="category-info-bottom">
            <div className="link-readmore">
              <Link to={service.slug}>READ MORE</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (model_type) {
      case "Team":
        return (
          <div>
            {/* TEAM CARDS - NORMAL CONTAINER */}
            <section className="section-box">
              <div className="container mt-150"></div>
              <div className="container mt-80">
                <div className="row align-items-start">
                  {data.map((member, index) => (
                    <TeamMember key={member.id || index} member={member} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        );

      case "Blog":
        if (
          pageTitle === "Impact stories" ||
          window.location.pathname.includes("portfolios")
        ) {
          // Portfolio layout istifadə et
          return (
            <div>
              <div className="section-box mt-150">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div
                        className="product-item-2 product-item-3 wow animate__animated animate__fadeIn"
                        data-wow-delay=".1s"
                      >
                        <a href="#">
                          <div className="product-image crop-box">
                            <img
                              className="img-responsive"
                              src="assets/imgs/page/homepage8/img-3.svg"
                            />
                          </div>
                        </a>
                        <div className="product-info">
                          <a href="#">
                            <h3 className="text-body-lead color-gray-900"></h3>
                          </a>
                          <div className="d-flex mt-20">
                            <div className="box-prices">
                              <span className="location-icon">
                                Baku, Azerbaijan
                              </span>
                            </div>
                          </div>
                          <div className="d-flex mt-30">
                            <div className="button-add text-md-start">
                              <a className="btn btn-explorer" href="#">
                                Explore
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        // Normal blog layout istifadə et
        else
          return (
            <div>
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

      case "Industry":
        return renderIndustryContent();

      case "Service":
        return (
          <div>
            <div className="section-box mt-100">
              <div className="container list-category-homepage7 mt-70">
                <div className="row">
                  {data.map((service, index) => (
                    <ServiceItem service={service} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "Project":
        return (
          <div>
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
