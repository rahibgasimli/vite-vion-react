// components/Header.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from "../assets/imgs/template/logo.svg";
import { useStickyHeader } from '../hooks/useStickyHeader';
import { fetchData } from '../assets/utils/getData';
import MobileHeader from './MobileHeader';

// components/Header.jsx - YALNIZ DƏYİŞƏN HİSSƏ
const Header = () => {
  const isSticky = useStickyHeader();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetchData("en/navigation/main").then((data) => {
      console.log("Menyu məlumatları:", data);
      if (data && data.navigation) {
        setMenuData(data.navigation);
      }
    });
  }, []);

  

  const toggleMobileMenu = () => {
    console.log("Mobil menyu toggle:", isMobileMenuOpen);
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    console.log("Mobil menyu bağlanır");
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  // ... qalan kod eyni qalır

  const renderSubMenu = (children) => {
    if (!children || children.length === 0) return null;

    return (
      <ul className="sub-menu">
        {children.map((child, index) => (
          <React.Fragment key={child.slug}>
            <li>
              <Link className="closer" to={`/${child.slug}`}>
                {child.title}
              </Link>
            </li>
            {index < children.length - 1 && <li className="hr"><span></span></li>}
          </React.Fragment>
        ))}
      </ul>
    );
  };

  const renderMenuItems = () => {
    return menuData.map((item) => (
      <li 
        key={item.slug} 
        className={item.children && item.children.length > 0 ? 'has-children' : ''}
      >
        <Link to={`/${item.slug}`}>
          {item.title}
        </Link>
        {item.children && item.children.length > 0 && renderSubMenu(item.children)}
      </li>
    ));
  };

  return (
    <>
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
                    {renderMenuItems()}
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

      <MobileHeader 
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        menuData={menuData}
      />
    </>
  );
};

export default Header;