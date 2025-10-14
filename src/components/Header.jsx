import React from 'react'
import HeaderLogo from "../assets/imgs/template/logo.svg"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header sticky-bar">
    <div className="container">
      <div className="main-header">
        <div className="header-left">
          <div className="header-logo"><Link className="d-flex" to="/"><img alt="Vion" src={HeaderLogo }/></Link></div>
          <div className="header-nav">
            <nav className="nav-main-menu d-none d-xl-block">
              <ul className="main-menu">
                <li className="has-children"><a href="#">Company</a>
                  <ul className="sub-menu">
                    <li><Link className="closer" to="/about"><i className="fi fi-rr-gem"></i>About</Link></li>
                    <li className="hr"><span></span></li>
                    <li><Link className="closer" to="/team"><i className="fi fi-rr-database"></i>Team</Link></li>
                    <li className="hr"><span></span></li>
                    <li><Link className="closer" to="/career"><i className="fi fi-rr-headset"></i>Career</Link></li>

                  </ul>
                </li>
                <li className=""><Link to="/services">Services</Link></li>
                <li className=""><Link to="/industries">Industries</Link></li>
                <li className=""><Link to="/ourwork">Our work</Link></li>
                <li className=""><Link to="/news">Newsroom</Link></li>
                <li className=""><Link to="/contacts">Contact</Link></li>
              </ul>
            </nav>
            <div className="burger-icon burger-icon-white lg-hidden"><span className="burger-icon-top"></span><span className="burger-icon-mid"></span><span className="burger-icon-bottom"></span></div>
          </div>
        </div>
        <div className="header-right">
          <div className="block-signin"><a className="btn btn-default hover-up icon-arrow-right" href="page-signup.html">Get in Touch</a></div>
        </div>
      </div>
    </div>
    
  </header>
  )
}

export default Header