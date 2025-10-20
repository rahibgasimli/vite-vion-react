// components/MobileHeader.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MobileHeader = ({ isOpen, onClose, menuData }) => {
  console.log("MobileHeader render olunur:", { isOpen, menuData });

  
  const renderSubMenu = (children) => {
    if (!children || children.length === 0) return null;

    return (
      <ul className="sub-menu">
        {children.map((child, index) => (
          <li key={child.slug}>
            <Link 
              to={`/${child.slug}`} 
              onClick={onClose}
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
        <Link to={`/${item.slug}`} onClick={onClose}>
          {item.title}
        </Link>
        {item.children && item.children.length > 0 && renderSubMenu(item.children)}
      </li>
    ));
  };

  // Əgər açıq deyilsə, heç nə göstərmə
  if (!isOpen) {
    return null;
  }

  return (
    <div className={`mobile-header-wrapper-style perfect-scrollbar ${isOpen ? 'sidebar-visible' : ''}`}>
      <div className="mobile-header-wrapper-inner">
        <div className="mobile-header-content-area">
          <div className="perfect-scroll">       
            <div className="mobile-menu-wrap mobile-header-border">
              {/* mobil menyu başlayır */}
              <nav>
                <ul className="mobile-menu font-heading">
                  {renderMenuItems()}
                </ul>
              </nav>
              {/* mobil menyu bitir */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;