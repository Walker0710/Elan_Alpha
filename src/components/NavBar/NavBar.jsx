import './NavBar.css';

import React, { useState, useEffect } from 'react';


import NavBar_links_svg from '/src/assets/General/menu_vector.svg';
import Elan_logo_svg from '/src/assets/logos/white horizontal.svg';

import {Link, useLocation, useNavigate} from 'react-router-dom';

function NavBar() {
  // <div className="NavBar-logo"></div>
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  function onClickLogo(e) {
    e.preventDefault();
    navigate('/');
  }



  function handleSection(e, path) {
    e.preventDefault();
    if (path && path.includes("#")) {
      setTimeout(() => {
        const id = path.replace("#", "")
        const el = window.document.getElementById(id)
        const r = el.getBoundingClientRect()
        window.top.scroll({
          top: scrollY + r.top,
          behavior: "smooth",
        })
      }, 100)
    }
  }

  function onClickLink(e, link) {
    e.preventDefault();
    toggleMenu();
    navigate(link);
  }

  return (
    <>
      <div className="NavBar-Desktop">
        <div className="NavBar-Elan-logo" onClick={onClickLogo}>
          <img src={Elan_logo_svg} alt="My SVG" width="100%" height="100%" />
        </div>
        <div className="NavBar-links">
          <div className="NavBar-links-vector">
            <img src={NavBar_links_svg} alt="My SVG" width="100%" height="100%" />
          </div>
          <div className="NavBar-links-container">

            <div className={"NavBar-links-container-link" + (location.pathname === '/' ? ' NavBar-links-container-link-active' : '')}>
              <Link to='/'>HOME</Link>
            </div>

            <div className={"NavBar-links-container-link" + (location.pathname === '/team' ? ' NavBar-links-container-link-active' : '')}>
              <Link to='/team'>CONTACT</Link>
            </div>

            {/* 
            <div className={"NavBar-links-container-link" + (location.pathname === '/workshops' ? ' NavBar-links-container-link-active' : '')}>
              <Link to='/workshops'>WORKSHOPS</Link>
            </div>
            
            */}
            

            <div className={"NavBar-links-container-link" + (location.pathname === '/accommodation' ? ' NavBar-links-container-link-active' : '')}>
              <Link to='/accommodation'>ACCOMMODATION</Link>
            </div>

            <div className={"NavBar-links-container-link" + (location.pathname === '/merch' ? ' NavBar-links-container-link-active' : '')}>
              <Link to='/comingsoon'>MERCH</Link>
            </div>


            <div className={"NavBar-links-container-link" + (location.pathname === '/events' ? ' NavBar-links-container-link-active' : '')}>
              <Link to='/events'>EVENTS</Link>
            </div>

            {/* 
            <div className={"NavBar-links-container-link" + (location.pathname === '/contact' ? ' NavBar-links-container-link-active' : '')}>
              <a href='#Footer' onClick={(e) => handleSection(e, '#Footer')}>CONTACT</a>
            </div>
            */}
            

            <div className={"NavBar-links-container-link" + (location.pathname === '/sponsors' ? ' NavBar-links-container-link-active' : '')}>
              <Link to='/comingsoon'>SPONSORS</Link>
            </div>

            <div className={"NavBar-links-container-link" + (location.pathname === '/competitions' ? ' NavBar-links-container-link-active' : '')}>
              <Link to='/competitions'>COMPETITIONS</Link>
            </div>

            <div className={"NavBar-links-container-link" + (location.pathname === '/map' ? ' NavBar-links-container-link-active' : '')}>
              <Link to='/map'>MAP</Link>
            </div>

          </div>
        </div>
      </div>

      <div className="mobile-navbar">
      <div className="mobile-navbar-Elan-logo" onClick={onClickLogo}>
          <img src={Elan_logo_svg} alt="My SVG" width="100%" height="100%" />
        </div>
      {/* Menu Button */}
      <button 
        className="mobile-navbar-button" 
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
      >
        {isMenuOpen ? "CLOSE" : "MENU"}
      </button>

      {/* Full Page Menu */}
      <div 
        className={`mobile-navbar-menu ${isMenuOpen ? 'mobile-navbar-menu-open' : ''}`}
      >
        <div className="mobile-navbar-menu-container">
        <div
            className={
              'mobile-navbar-menu-container-link' +
              (location.pathname === '/' ? ' mobile-navbar-menu-container-link-active' : '')
            }
          >
            <Link to="/" onClick={(e) => onClickLink(e, '/')}>HOME</Link>
          </div>
          <div
            className={
              'mobile-navbar-menu-container-link' +
              (location.pathname === '/events'
                ? ' mobile-navbar-menu-container-link-active' : '')
            }
          >
            <Link to="/events" onClick={(e) => onClickLink(e, '/events')}>EVENTS</Link>
          </div>

          {/* 
          <div
            className={
              'mobile-navbar-menu-container-link' +
              (location.pathname === '/workshops'
                ? ' mobile-navbar-menu-container-link-active' : '')
            }
          >
            <Link to="/workshops" onClick={(e) => onClickLink(e, '/workshops')}>WORKSHOPS</Link>
          </div>
          
          */}
          
          <div
            className={
              'mobile-navbar-menu-container-link' +
              (location.pathname === '/accommodation'
                ? ' mobile-navbar-menu-container-link-active' : '')
            }
          >
            <Link to="/accommodation" onClick={(e) => onClickLink(e, '/accommodation')}>ACCOMMODATION</Link>
          </div>
          <div
            className={
              'mobile-navbar-menu-container-link' +
              (location.pathname === '/merch'
                ? ' mobile-navbar-menu-container-link-active' : '')
            }
          >
            <Link to="/merch" onClick={(e) => onClickLink(e, '/comingsoon')}>MERCH</Link>
          </div>
          <div
            className={
              'mobile-navbar-menu-container-link' +
              (location.pathname === '/team'
                ? ' mobile-navbar-menu-container-link-active' : '')
            }
          >
            <Link to="/team" onClick={(e) => onClickLink(e, '/team')}>CONTACT US</Link>
          </div>
          
          {/*
          <div
            className={
              'mobile-navbar-menu-container-link' +
              (location.pathname === '/contact'
                ? ' mobile-navbar-menu-container-link-active' : '')
            }
          >
            <a
              href="#Footer"
              onClick={(e) => {
                handleSection(e, '#Footer');
                onClickLink(e, '#Footer'); // Ensure menu closes on section click
              }}
            >
              CONTACT
            </a>
          </div>
          */}
          
          <div
            className={
              'mobile-navbar-menu-container-link' +
              (location.pathname === '/sponsors'
                ? ' mobile-navbar-menu-container-link-active' : '')
            }
          >
            <Link to="/sponsors" onClick={(e) => onClickLink(e, '/comingsoon')}>SPONSORS</Link>
          </div>
          <div
            className={
              'mobile-navbar-menu-container-link' +
              (location.pathname === '/competition'
                ? ' mobile-navbar-menu-container-link-active' : '')
            }
          >
            <Link to="/competitions" onClick={(e) => onClickLink(e, '/competitions')}>COMPETITIONS</Link>
          </div>
          <div
            className={
              'mobile-navbar-menu-container-link' +
              (location.pathname === '/map'
                ? ' mobile-navbar-menu-container-link-active' : '')
            }
          >
            <Link to="/map" onClick={(e) => onClickLink(e, '/map')}>MAP</Link>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default NavBar;
