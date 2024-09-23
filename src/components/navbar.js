import { Link } from "react-router-dom";
//import "../styles/newnavbar.css";
import Logo from "./images/logo.png";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import fi from "./images/fi.png";
import en from "./images/en.png";

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(window.innerWidth > 1200);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showDropdown, setShowDropdown] = useState(0);
  const isScreenNarrow = windowWidth < 1200;
  const { t } = useTranslation();

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
    if (!isScreenNarrow) {
      setNavbarVisible(true);
    }
  }, [isScreenNarrow]);

  const toggleNavbarVisibility = () => {
    if (isScreenNarrow) {
      setNavbarVisible(!navbarVisible);
    }
  };

  let deactivate_button = (
    <button
      type="button"
      className="deactivate-nav-button"
      onClick={toggleNavbarVisibility}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="deactivate-nav-button-icon"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  );

  let activate_button = (
    <button
      type="button"
      className="activate-nav-button"
      onClick={toggleNavbarVisibility}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="activate-nav-button-icon"
      >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>
  );

  let hamburger_button =
    navbarVisible === true ? deactivate_button : activate_button;

    /* this goes under the TiteLan link if it ever comes back
<Link
className="nav-link"
to="/iotseminaari"
onClick={toggleNavbarVisibility}
>
{t("nav.iotSeminaari")}
</Link>
*/
  return (
    <div className="nav-bar-container">
      {navbarVisible && (
        <nav className="nav-bar">
          {
            <div className="nav-bar">
              <div className="nav-inner">
                <div className="nav-logo-container">
                  <img src={Logo} alt="Logo" />
                </div>
                <div className="nav-items">
                  <div className="nav-link-container">
                    <Link
                      aria-current="page"
                      className="nav-link"
                      to="/"
                      onClick={toggleNavbarVisibility}
                    >
                      {t("nav.frontPage")}
                    </Link>
                  </div>
                  <div className="nav-link-container">
                    <Link
                      className="nav-link"
                      to="/jasenyys"
                      onClick={toggleNavbarVisibility}
                    >
                      {t("nav.membership")}
                    </Link>
                  </div>
                  <div className="nav-link-container">
                    <Link
                      className="nav-link parent-link"
                      to="/tapahtumat"
                      onClick={toggleNavbarVisibility}
                      onMouseEnter={() => handleMouseEnter(1)}
                      onMouseLeave={() => handleMouseLeave(0)}
                    >
                      {t("nav.events")}
                    </Link>
                    {(isScreenNarrow || showDropdown === 1) && (
                      <div
                        className="nav-link-dropdown-container"
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={() => handleMouseLeave(0)}
                      >
                        <Link
                          className="nav-link"
                          to="/titelan"
                          onClick={toggleNavbarVisibility}
                        >
                          {t("nav.titelan")}
                        </Link>
                      </div>
                    )}
                  </div>
                  <div className="nav-link-container">
                    <Link
                      className="nav-link"
                      to="/ehdotukset"
                      onClick={toggleNavbarVisibility}
                    >
                      {t("nav.suggestions")}
                    </Link>
                  </div>
                  <div className="nav-link-container">
                    <Link
                      className="nav-link"
                      to="/yhteystiedot"
                      onClick={toggleNavbarVisibility}
                    >
                      {t("nav.contact")}
                    </Link>
                  </div>
                  <div className="nav-link-container">
                    <Link
                      className="nav-link parent-link"
                      to="/yhdistys"
                      onClick={toggleNavbarVisibility}
                      onMouseEnter={() => handleMouseEnter(2)}
                      onMouseLeave={() => handleMouseLeave(0)}
                    >
                      {t("nav.association")}
                    </Link>
                    {(isScreenNarrow || showDropdown === 2) && (
                      <div
                        className="nav-link-dropdown-container"
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={() => handleMouseLeave(0)}
                      >
                        <Link
                          className="nav-link"
                          to="/hallitus"
                          onClick={toggleNavbarVisibility}
                        >
                          {t("nav.board")}
                        </Link>
                        <Link
                          className="nav-link"
                          to="/kumppanit"
                          onClick={toggleNavbarVisibility}
                        >
                          {t("nav.partners")}
                        </Link>
                        <Link
                          className="nav-link"
                          to="/tuotteet"
                          onClick={toggleNavbarVisibility}
                        >
                          {t("nav.products")}
                        </Link>
                        <Link
                          className="nav-link"
                          to="/saannot"
                          onClick={toggleNavbarVisibility}
                        >
                          {t("nav.rules")}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
                <div className="nav-socials">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/source_ry/"
                    className="nav-social-link"
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
                      className="nav-social-icon"
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
                    className="nav-social-link"
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
                      className="nav-social-icon"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </div>
                {!isScreenNarrow &&
                  (i18n.language === "fi" ? (
                    <div
                      className="nav-link"
                      style={{
                        flexDirection: "row",
                        display: "flex",
                        marginLeft: 10,
                      }}
                      onClick={() => i18n.changeLanguage("en")}
                      tabIndex="0"
                    >
                      <p>EN</p>
                      <img
                        src={en}
                        alt="UK flag"
                        style={{ alignSelf: "center", marginLeft: 5 }}
                      />
                    </div>
                  ) : (
                    <div
                      className="nav-link"
                      style={{
                        flexDirection: "row",
                        display: "flex",
                        marginLeft: 10,
                      }}
                      onClick={() => i18n.changeLanguage("fi")}
                      tabIndex="0"
                    >
                      <p>FI</p>
                      <img
                        src={fi}
                        alt="Finnish flag"
                        style={{ alignSelf: "center", marginLeft: 5 }}
                      />
                    </div>
                  ))}
              </div>
            </div>
          }
        </nav>
      )}
      <div className="hamburger-button-container">
        {isScreenNarrow && hamburger_button}
      </div>
    </div>
  );
};

export default Navbar;
