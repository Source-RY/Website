import { Link } from "react-router-dom";
//import "../styles/newnavbar.css";
import Logo from "./images/logo.png";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(window.innerWidth > 1200);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showDropdown, setShowDropdown] = useState(0);

  const handleMouseEnter = (number) => {
    setShowDropdown(number);
  };

  const handleMouseLeave = () => {
    setShowDropdown(0);
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 1200) {
      setNavbarVisible(true);
    }
  }, [windowWidth]);

  const toggleNavbarVisibility = () => {
    if (windowWidth < 1200){
      setNavbarVisible(!navbarVisible);
    }
  };

  let deactivate_button = (
    <button
      type="button"
      class="deactivate-nav-button"
      onClick={toggleNavbarVisibility}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="deactivate-nav-button-icon"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  );

  let activate_button = (
    <button
      type="button"
      class="activate-nav-button"
      onClick={toggleNavbarVisibility}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="activate-nav-button-icon"
      >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>
  );

  let hamburger_button = navbarVisible === true ? deactivate_button : activate_button;

  return (
    <div class="nav-bar-container">
      
      {navbarVisible && (
        <nav class="nav-bar">
          {
            <div class="nav-bar">
              <div class="nav-inner">
                <div class="nav-logo-container">
                  <img src={Logo} alt="Logo" />
                </div>
                <div class="nav-items">
                  <div class="nav-link-container">
                    <Link aria-current="page" class="nav-link" to="/" onClick={toggleNavbarVisibility}>
                      Etusivu
                    </Link>
                  </div>
                  <div class="nav-link-container">
                    <Link class="nav-link" to="/jasenyys" onClick={toggleNavbarVisibility}>
                      Jäsenyys
                    </Link>
                  </div>
                  <div class="nav-link-container">
                    <Link class="nav-link" to="/tapahtumat" onClick={toggleNavbarVisibility} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(0)}>
                      Tapahtumat
                    </Link>
                    {(windowWidth < 1200 || showDropdown === 1) && (
                    <div className="nav-link-dropdown-container" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(0)}>
                      <Link class="nav-link" to="/titelan" onClick={toggleNavbarVisibility}>
                        TiTeLAN
                      </Link>
                      <Link class="nav-link" to="/iotseminaari" onClick={toggleNavbarVisibility}>
                        IoT-Seminaari
                      </Link>
                    </div>)}
                  </div>
                  <div class="nav-link-container">
                    <Link class="nav-link" to="/ehdotukset" onClick={toggleNavbarVisibility}>
                      Ehdotukset
                    </Link>
                  </div>
                  <div class="nav-link-container">
                    <Link class="nav-link" to="/yhteystiedot" onClick={toggleNavbarVisibility}>
                      Yhteystiedot
                    </Link>
                  </div>
                  <div class="nav-link-container">
                    <Link class="nav-link" to="/yhdistys" onClick={toggleNavbarVisibility} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(0)}>
                      Yhdistys
                    </Link>
                    {(windowWidth < 1200 || showDropdown === 2) && (
                    <div className="nav-link-dropdown-container" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(0)}>
                      <Link class="nav-link" to="/hallitus" onClick={toggleNavbarVisibility}>
                        Hallitus
                      </Link>
                      <Link class="nav-link" to="/kumppanit" onClick={toggleNavbarVisibility}>
                        Kumppanit
                      </Link>
                      <Link class="nav-link" to="/tuotteet" onClick={toggleNavbarVisibility}>
                        Tuotteet
                      </Link>
                      <Link class="nav-link" to="/saannot" onClick={toggleNavbarVisibility}>
                        Säännöt
                      </Link>
                    </div>)}
                  </div>
                </div>
                <div class="nav-socials">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/source_ry/"
                    class="nav-social-link"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="nav-social-icon"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/tamko.source/"
                    class="nav-social-link"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="nav-social-icon"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          }
        </nav>
      )}
      <div className="hamburger-button-container">
        {windowWidth < 1200 && hamburger_button}
      </div>
    </div>
  );
};

export default Navbar;
