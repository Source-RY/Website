import { Link } from "react-router-dom";

import Logo from "./images/logo.png"

const navbar = () => {
    return (
        <div class="navbar">
        <img class="nav-logo" src={Logo} alt="Logo"/>
        <header class="header">
        <input class="side-menu" type="checkbox" id="side-menu"/>
        <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
        <nav class="nav">
            <div class="navbar-links">
                <div class="nav-link-container">
                <Link aria-current="page" class="nav-link" to="/">
                    Etusivu
                </Link>
                </div>
                <div class="nav-link-container">
                <Link class="nav-link" to="/jasenyys">
                    Jäsenyys
                </Link>
                </div>
                <div class="nav-link-container">
                <Link class="nav-link" to="/tapahtumat">
                    Tapahtumat
                </Link>
                </div>
                <div class="nav-link-container">
                <Link class="nav-link" to="/ehdotukset">
                    Ehdotukset
                </Link>
                </div>
                <div class="nav-link-container">
                <Link class="nav-link" to="/yhteystiedot">
                    Yhteystiedot
                </Link>
                </div>
                <div class="nav-link-container">
                <Link class="nav-link" to="/kumppanit">
                    Kumppanit
                </Link>
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
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
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
        </nav>
    </header>
        </div>
    )
  }
  
  
  export default navbar

  /*
  <div id="navbar" className="navbar">
                <img src={Logo} alt=""></img>
                <li><a href="">Etusivu</a></li>
                <li><a href="">Jäsenyys</a></li>
                <li><a href="">Tapahtumat</a></li>
                <li><a href="">Ehdotukset</a></li>
                <li><a href="">Yhteystiedot</a></li>
                <li><a href="">Kumppanit</a></li>
                <li><a href="">Hallitus</a></li>
                <li><a href="">Historia</a></li>
                <li><a href="">Peli</a></li>
                <li><a href="">IoT-Seminaari</a></li>
            </div>
            */