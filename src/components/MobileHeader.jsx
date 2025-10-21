// components/MobileHeader.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MobileHeader = ({ isOpen, onClose, menuData }) => {
  console.log("MobileHeader render olunur:", { isOpen, menuData });

  const handleLinkClick = () => {
    // səhifəni yuxarıya çək
    window.scrollTo({ top: 0, behavior: "smooth" });
    // menyunu bağla
    onClose();
  };

  const renderSubMenu = (children) => {
    if (!children || children.length === 0) return null;

    return (
      <ul className="sub-menu">
        {children.map((child) => (
          <li key={child.slug}>
            <Link
              to={`/${child.slug}`}
              onClick={handleLinkClick}
              className="closer"
            >
              {child.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  const renderMenuItems = () => {
    if (!menuData || menuData.length === 0) {
      return <li>Menyu yüklənir...</li>;
    }

    return menuData.map((item) => (
      <li
        key={item.slug}
        className={item.children && item.children.length > 0 ? 'has-children' : ''}
      >
        <Link to={`/${item.slug}`} className={`${item.type === "none" ? 'pe-none' : ''}`} onClick={handleLinkClick}>
          {item.title}
        </Link>
        {item.children && item.children.length > 0 && renderSubMenu(item.children)}
      </li>
    ));
  };

  // Əgər menyu bağlıdırsa, heç nə göstərmə
  if (!isOpen) return null;

  return (
    <div
      className={`mobile-header-wrapper-style perfect-scrollbar ${isOpen ? 'sidebar-visible' : ''}`}
    >
      <div className="mobile-header-wrapper-inner">
        <div className="mobile-header-content-area">
          <div className="perfect-scroll">
            <div className="mobile-menu-wrap mobile-header-border">
              <nav>
                <ul className="mobile-menu font-heading">
                  {renderMenuItems()}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
