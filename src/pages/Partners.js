import React from "react";
import { useTranslation } from "react-i18next";
import banner from "../components/images/sourcebanner.jpeg";

import Futurice from "../components/images/partners/futurice.png";
import Accenture from "../components/images/partners/accenture.png";
import Netum from "../components/images/partners/netum.png";
import Reaktor from "../components/images/partners/reaktor.png";
import Solita from "../components/images/partners/solita.png";
import ReceiptHero from "../components/images/partners/receipthero.png";
import Modulight from "../components/images/partners/modulight.png";
import Evitec from "../components/images/partners/evitec_solutions.png";
import Vincit from "../components/images/partners/vincit.png";
import Kaijakka from "../components/images/partners/kaijakka.png";
import Hene from "../components/images/partners/hene.png";
import TOAS from "../components/images/partners/toas.png";
import Nokia from "../components/images/partners/nokia.png";
import Frostly from "../components/images/partners/frostly.png";

const Partners = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="page">
        <div className="page-banner-container">
          <div className="page-banner filter">
            <img className="bannerImage" src={banner} alt=""></img>
          </div>
          <h1 class="page-title">{t("corporatePartnershipTitle")}</h1>
        </div>
        <div class="page-text">
          <p>{t("companyPartnership.intro")}</p>
          <p>{t("companyPartnership.diverseFlexible")}</p>
          <h2>{t("companyPartnership.jobPostings.title")}</h2>
          <p>{t("companyPartnership.jobPostings.description")}</p>
          <h2>{t("companyPartnership.excursions.title")}</h2>
          <p>{t("companyPartnership.excursions.description")}</p>
          <h2>{t("companyPartnership.guestLectures.title")}</h2>
          <p>{t("companyPartnership.guestLectures.description")}</p>
          <h2>{t("companyPartnership.iotSeminar.title")}</h2>
          <p>{t("companyPartnership.iotSeminar.description")}</p>
          <h2>{t("companyPartnership.overallsAds.title")}</h2>
          <p>{t("companyPartnership.overallsAds.description")}</p>
          <h2>{t("partnersTitle")}</h2>
        </div>

        <div className="ParterContainer">
          <div class="partner-item">
            <div class="top-row">
              <img class="partner-logo" src={Futurice} Alt="Futurice Logo" />
              <a
                target="_blank"
                href="https://tammerforce.com/"
                class="PartnerItem__PartnerLink-sc-n5e0ep-0 jKshWR"
                rel="noreferrer"
              >
                {t("webpage")}
              </a>
            </div>
            <div class="partner-desc"></div>
          </div>

          <div class="partner-break"></div>
          <div class="partner-item">
            <div class="top-row">
              <img class="partner-logo" src={Netum} alt="Netum Logo" />
              <a
                target="_blank"
                href="https://netum.fi"
                class="PartnerItem__PartnerLink-sc-n5e0ep-0 hbJvqK"
                rel="noreferrer"
              >
                {t("webpage")}
              </a>
            </div>
            <div class="partner-desc">
              <p>
                Netum on vahvasti kasvava IT-palvelutalo, jolla on yli 20 vuoden
                kokemus vaativista IT-hankkeista. Liiketoimintaamme kuuluu
                digitaalisten palvelujen kehittämistä, tiedolla johtamista,
                kyberturvallisuuspalveluita, tietojärjestelmien
                jatkuvuuspalveluita, integraatiopalveluita ja johdon
                konsultointipalveluita. Tällä hetkellä netumilaisia on jo yli
                200 ja toimipisteemme sijaitsevat Tampereella, Helsingissä,
                Turussa, Porissa sekä Jyväskylässä. Kaikki avoimet työpaikat ja
                lisää tietoa työkulttuuristamme löydät osoitteesta
                <a href="https://www.netum.fi/tyopaikat/">
                  https://www.netum.fi/tyopaikat/
                </a>
                .
              </p>
            </div>
          </div>

          <div class="partner-break"></div>
          <div class="partner-item">
            <div class="top-row">
              <img class="partner-logo" src={Frostly} alt="Reaktor Logo" />
              <a
                target="_blank"
                href="https://www.frostly.fi/"
                class="PartnerItem__PartnerLink-sc-n5e0ep-0 igEdOu"
                rel="noreferrer"
              >
                {t("webpage")}
              </a>
            </div>
            <div class="partner-desc"></div>
          </div>

          <div class="partner-break"></div>
          <div class="partner-item">
            <div class="top-row">
              <img class="partner-logo" src={Solita} alt="Solita Logo" />
              <a
                target="_blank"
                href="https://www.solita.fi/"
                class="PartnerItem__PartnerLink-sc-n5e0ep-0 ekXJXT"
                rel="noreferrer"
              >
                {t("webpage")}
              </a>
            </div>
            <div class="partner-desc"></div>
          </div>

          <div class="partner-break"></div>
          <div class="partner-item">
            <div class="top-row">
              <img class="partner-logo" src={Evitec} alt="Evitec Solutions Logo" />
              <a
                target="_blank"
                href="https://evitec.com/"
                class="PartnerItem__PartnerLink-sc-n5e0ep-0 kKYexN"
                rel="noreferrer"
              >
                {t("webpage")}
              </a>
            </div>
            <div class="partner-desc"></div>
          </div>

          <div class="partner-break"></div>
          <div class="partner-item">
            <div class="top-row">
              <img class="partner-logo" src={Vincit} alt="Vincit Logo" />
              <a
                target="_blank"
                href="https://profitsoftware.com/"
                class="PartnerItem__PartnerLink-sc-n5e0ep-0 jKshWR"
                rel="noreferrer"
              >
                {t("webpage")}
              </a>
            </div>
            <div class="partner-desc"></div>
          </div>

          <div class="partner-break"></div>
          <div class="partner-item">
            <div class="top-row">
              <img class="partner-logo" src={Kaijakka} alt="Kaijakka Logo" />
              <a
                target="_blank"
                href="https://www.yobaari.com/"
                class="PartnerItem__PartnerLink-sc-n5e0ep-0 bAPMmw"
                rel="noreferrer"
              >
                {t("webpage")}
              </a>
            </div>
            <div class="partner-desc"></div>
          </div>

          <div class="partner-break"></div>
          <div class="partner-item">
            <div class="top-row">
              <img class="partner-logo" src={Hene} alt="Siniset Bussit Logo" />
              <a
                target="_blank"
                href="https://hene.fi/"
                class="PartnerItem__PartnerLink-sc-n5e0ep-0 edSrMC"
                rel="noreferrer"
              >
                {t("webpage")}
              </a>
            </div>
            <div class="partner-desc"></div>
          </div>

          <div class="partner-break"></div>
          <div class="partner-item">
            <div class="top-row">
              <img class="partner-logo" src={TOAS} alt="TOAS Logo" />
              <a
                target="_blank"
                href="https://toas.fi/"
                class="PartnerItem__PartnerLink-sc-n5e0ep-0 ekXJXT"
                rel="noreferrer"
              >
                {t("webpage")}
              </a>
            </div>
            <div class="partner-desc"></div>
          </div>

          <div class="partner-break"></div>
          <div class="partner-item">
            <div class="top-row">
              <img class="partner-logo" src={Nokia} alt="Nokia Logo" />
              <a
                target="_blank"
                href="https://www.nokia.com/about-us/careers/"
                class="PartnerItem__PartnerLink-sc-n5e0ep-0 bAPMmw"
                rel="noreferrer"
              >
                {t("webpage")}
              </a>
            </div>
            <div class="partner-desc">
              <p>
                At Nokia, we create technology that helps the world act
                together. We are a B2B technology innovation leader pioneering
                the future where networks meet cloud. At Nokia you will have a
                positive impact on people’s lives and help build the
                capabilities needed for a more productive, sustainable, and
                accessible world. We have three sites in Finland: Espoo focuses
                on the development of mobile networks and cloud products; Oulu
                specializes in the radio technologies; and Tampere is the home
                of network management and leading SoC development. Our main
                focus is on 5G development, while already pioneering the future
                of 6G. Open yourself to starting your career with Nokia. We are
                looking for unique minds with skills such as: SW coding (e.g.
                C/C++, JavaScript, Python and Golang), SW testing, automation
                and integration (e.g. Gerrit, GitLab CI, Jenkins), Cloud
                technology (Webscale clouds, Kubernetes, Docker), System on chip
                development (MATLAB, System Verilog, UVM). Each year, we welcome
                around 500 trainees. Apply to our open positions via
                <a href="https://www.nokia.com/about-us/careers/">
                  www.nokia.com/careers
                </a>
                . Follow us on Instagram @nokiafinland and on TikTok @nokia. Be
                part of a culture built on an inclusive way of working where we
                are open to your ideas, you are empowered to take risks and are
                encouraged to be fearless in bringing your authentic self to
                work. Join us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
