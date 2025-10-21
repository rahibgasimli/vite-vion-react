import React, { useEffect, useState } from "react";
import FooterLogo from "../assets/imgs/template/logo.svg";
import { fetchData } from "../assets/utils/getData";
import makeLogo from "../assets/imgs/page/homepage2/make-logo.svg";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "./icons";

const Footer = () => {
  const [menuData, setMenuData] = useState([]);
  const [footerInfo, setFooterInfo] = useState({});

  useEffect(() => {
    fetchData("en/navigation/footer").then((data) => {
      if (data) {
        setMenuData(data.navigation || []);
        setFooterInfo(data.footer_info || {});
        console.log("footer data: ", data);
      }
    });
  }, []);

  const renderSplitSection = (section, splitIndex) => {
    const firstPart = section.children.slice(0, splitIndex);
    const secondPart = section.children.slice(splitIndex);

    // Services üçün /services prefix əlavə olunur
    const basePath = section.title === "Services" ? "/services" : "";

    return (
      <>
        <div className="col-lg-3 width-20 mb-30">
          <h4 className="text-heading-5">{section.title}</h4>
          <ul className="menu-footer mt-20">
            {firstPart.map((item) => (
              <li key={item.slug}>
                <Link
                  className="color-gray-900"
                  to={`${basePath}/${item.slug}`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-lg-3 width-20 mb-30">
          <h4 className="text-heading-5"></h4>
          <ul className="menu-footer mt-20">
            {secondPart.map((item) => (
              <li key={item.slug}>
                <Link
                  className="color-gray-900"
                  to={`${basePath}/${item.slug}`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  };

  return (
    <footer className="footer mt-50">
      <div className="container">
        {/* --- TOP SECTION --- */}
        <div className="footer-top">
          <div className="d-flex flex-wrap gap-5 align-items-center justify-content-between">
            <div className="footer-logo">
              <Link className="d-flex" to="/">
                <img alt="Vion" src={FooterLogo} />
              </Link>
            </div>
            {/* --- SOCIAL ICONS --- */}
            <div className="text-center text-md-end color-green-900">
              {" "}
              <div className="footer-social">
                {" "}
                <a href={footerInfo.facebook_url} target="_blank">
                  <FacebookIcon footerIcon={true} />
                </a>{" "}
                <a href={footerInfo.instagram_url} target="_blank">
                  <InstagramIcon footerIcon={true} />
                </a>{" "}
                <a href={footerInfo.linkedin_url} target="_blank">
                  <LinkedinIcon footerIcon={true} />
                </a>{" "}
                <a href={footerInfo.youtube_url} target="_blank">
                  <YoutubeIcon footerIcon={true} />
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>

        {/* --- MENU SECTIONS --- */}
        <div className="row">
          {menuData.map((section, index) => {
            if (section.title === "Company") {
              return (
                <React.Fragment key={index}>
                  {renderSplitSection(section, 4)}
                </React.Fragment>
              );
            }
            if (section.title === "Services") {
              return (
                <React.Fragment key={index}>
                  {renderSplitSection(section, 3)}
                </React.Fragment>
              );
            }
            return (
              <div className="col-lg-3 width-20 mb-30" key={index}>
                <h4 className="text-heading-5">{section.title}</h4>
                <ul className="menu-footer mt-20">
                  {section.children?.map((item) => (
                    <li key={item.slug}>
                      <Link
                        className="color-gray-900"
                        to={
                          section.title === "Services"
                            ? `/services/${item.slug}`
                            : `/${item.slug}`
                        }
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* --- CONTACT --- */}
          <div className="col-lg-3 width-16">
            <h4 className="text-heading-5">Contact</h4>
            <ul className="menu-footer mt-20 color-gray-600">
              {footerInfo.address && (
                <li>
                  <a
                    href={footerInfo.address_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {footerInfo.address}
                  </a>
                </li>
              )}
              {footerInfo.phone && (
                <li>
                  <a className="underline" href={`tel:${footerInfo.phone}`}>
                    {footerInfo.phone}
                  </a>
                </li>
              )}
              {footerInfo.email && (
                <li>
                  <a className="underline" href={`mailto:${footerInfo.email}`}>
                    {footerInfo.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* --- FOOTER BOTTOM --- */}
        <div className="footer-bottomm mt-20">
          <div className="row align-items-center">
            <div className="col-md-6">
              <span className="color-gray-400 text-body-lead">
                &copy; VION {new Date().getFullYear()}. {footerInfo.copyright}
              </span>
            </div>
            <Link
              to="https://make.az/"
              target="_blank"
              className="col-md-6 text-center text-lg-end text-md-end"
            >
              <img src={makeLogo} alt="Make" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
