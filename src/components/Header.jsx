// components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from "../assets/imgs/template/logo.svg";
import { useStickyHeader } from '../hooks/useStickyHeader';

const Header = () => {
  const isSticky = useStickyHeader();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header sticky-bar ${isSticky ? 'stick' : ''}`}>
      <div className="container">
        <div className="main-header">
          <div className="header-left">
            <div className="header-logo">
              <Link className="d-flex" to="/">
                <img alt="Vion" src={HeaderLogo} />
              </Link>
            </div>
            <div className="header-nav">
              <nav className="nav-main-menu d-none d-xl-block">
                <ul className="main-menu">
                  <li className="has-children">
                    <a href="#">Company</a>
                    <ul className="sub-menu">
                      <li>
                        <Link className="closer" to="/about">
                          <i className="fi fi-rr-gem"></i>About
                        </Link>
                      </li>
                      <li className="hr"><span></span></li>
                      <li>
                        <Link className="closer" to="/team">
                          <i className="fi fi-rr-database"></i>Team
                        </Link>
                      </li>
                      <li className="hr"><span></span></li>
                      <li>
                        <Link className="closer" to="/career">
                          <i className="fi fi-rr-headset"></i>Career
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/industries">Industries</Link></li>
                  <li><Link to="/ourwork">Our work</Link></li>
                  <li><Link to="/news">Newsroom</Link></li>
                  <li><Link to="/contacts">Contact</Link></li>
                </ul>
              </nav>
              <div 
                className={`burger-icon burger-icon-white lg-hidden ${isMobileMenuOpen ? 'burger-close' : ''}`}
                onClick={toggleMobileMenu}
              >
                <span className="burger-icon-top"></span>
                <span className="burger-icon-mid"></span>
                <span className="burger-icon-bottom"></span>
              </div>
            </div>
          </div>
          <div className="header-right">
            <div className="block-signin">
              <a className="btn btn-default hover-up icon-arrow-right" href="page-signup.html">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;