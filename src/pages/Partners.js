import banner from "../components/images/sourcebanner.jpeg";

import Futurice from "../components/images/partners/futurice.png";
import Accenture from "../components/images/partners/accenture.png";
import Netum from "../components/images/partners/netum.png";
import Reaktor from "../components/images/partners/reaktor.png";
import Solita from "../components/images/partners/solita.png";
import ReceiptHero from "../components/images/partners/receipthero.png";
import Modulight from "../components/images/partners/modulight.png";
import ProfitSoftware from "../components/images/partners/profitsoftware.png";
import Vincit from "../components/images/partners/vincit.png";
import Kaijakka from "../components/images/partners/kaijakka.png";
import Hene from "../components/images/partners/hene.png";
import TOAS from "../components/images/partners/toas.png";
import Nokia from "../components/images/partners/nokia.png";

const Partners = () => {
  return (
    <div>
      <div className="page">
        <div className="page-banner-container">
          <div className="page-banner filter">
            <img className="bannerImage" src={banner} alt=""></img>
          </div>
          <h1 class="page-title">Yritysyhteistyö</h1>
        </div>
        <div class="page-text">
          <p>
            SOURCE ry:n yritysyhteistyön tavoitteena on lähentää opiskelijoita
            yritysten kanssa. Yritysyhteistyö luo hyvän pohjan opiskelijoille
            tutustua yrityksiin, oppia uutta alasta ja verkostoitua. Yrityksille
            yhteistyö SOURCE ry:n kanssa takaa näkyvyyden TAMK:in tietotekniikan
            opiskelijoiden keskuudessa ja luo mahdollisuuden tutustua tuleviin
            alansa ammattilaisiin.
          </p>
          <p>
            Yritysyhteistyö on monimuotoista ja joustavaa. Tarkoituksenamme on
            lyötää aina tapauskohtaisesti paras mahdollinen vaihtoehto
            molemmille osapuolille. Alla on kerrottu hieman tarkemmin
            mahdollisuuksista.
          </p>
          <h2>Perusta</h2>
          <p>
            Pohjalta on aina aloitettava (ellei ole FOSS jumala). SOURCE ry
            tarjoaa yrityksillä mahdollisuuden lähettää työpaikkailmoituksia ja
            muita tiedotteitaan jäsenilleen sopimuksen mukaisesti. Pakettiin
            kuuluu yrityksen logo SOURCE ry:n etusivulle, sekä lyhyt kuvaus
            yrityksestä yhteistyökumppanit sivustolle.
          </p>
          <h2>Excursiot eli yritysvierailut</h2>
          <p>
            Excursiot ovat SOURCE ry:n jäsenten keskuudessa suosittuja
            tapahtumia. Excursiot ovat paras mahdollisuus opiskelijoille päästä
            tutustumaan kiinnostavaan yritykseen ja sen toimintaan. Yrityksille
            excursiot taas ovat mainio mahdollisuus päästä tutustumaan
            tietotekniikan opiskelijoihin ja tulevaisuuden tekijöihin.
          </p>
          <h2>Vierailijaluennot</h2>
          <p>
            Vierailijaluennot ovat hieno mahdollisuus jakaa ammattilaisten
            osaamista opiskelijoille. Opiskelijat ovat aina kiinnostuneita
            työelämässä käytetyistä toimintatavoista ja teknologioista.
            Vierailijaluentoja varten SOURCE ry voi varata tilat TAMK:ilta.
          </p>
          <h2>IoT-seminaari</h2>
          <p>
            IoT-Seminaari on Tampereen ammattikorkeakoululla vuosittain
            järjestettävä seminaaritapahtuma, joka kerää yhteen alan yrityksiä,
            asiantuntijoita ja opiskelijoita. Tapahtuman järjestää SOURCE ry ja
            tapahtuman tuotot ohjataan lyhentämättöminä IoT-Seminaarin
            kehittämiseen ja SOURCE ry:n toimintaan.
          </p>
          <p>
            Yritykset voivat osallistua IoT-seminaariin lunastamalla itselleen
            ständipaikan ja/tai järjestämällä puheenvuoron.
          </p>
          <p>
            Ständipaikkojen hinnat ovat paikasta riippuen tyypillisesti olleet
            150-250€ / 2vrk ja puheenvuorot yrityksille ilmaisia.
          </p>
          <h2>Haalarimainokset</h2>
          <p>
            Haalarimainokset ovat mainio mahdollisuus yritykselle hankkia
            näkyvyyttä opiskelijoiden keskuudessa. SOURCE ry tarjoaa yrityksille
            mahdollisuuden ostaa mainospaikan opiskelijahaalareistaan.
            Mainospaikkojen hinnat vaihtelevat sijainnin ja koon mukaan 500€ ja
            1000€ välillä. Haalarimainosten tuotot ohjataan vuosittain
            haalareiden hankintaan ja jäsenistölle järjestettävään toimintaan.
          </p>
          <h2>Yhteistyökumppanimme</h2>
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
                Verkkosivut
              </a>
            </div>
            <div class="partner-desc"></div>
          </div>
          <div class="partner-break"></div>

          <div class="partner-item">
            <div class="top-row">
              <img class="partner-logo" src={Accenture} alt="Accenture Logo" />
              <a
                target="_blank"
                href="https://www.accenture.com/"
                class="PartnerItem__PartnerLink-sc-n5e0ep-0 kKYexN"
                rel="noreferrer"
              >
                Verkkosivut
              </a>
            </div>
            <div class="partner-desc">
              <p>
                Accenture on globaali yli 515 000 asiantuntijan
                IT-konsultointitalo, joka tarjoaa teknologian ratkaisuja
                asiakkailleen 40 eri toimialalla yli 120 maassa. Suomessa
                Accenturella on n. 1100 työntekijää Helsingissä ja Tampereella.
                Accenture rekrytoi vuosittain myös opiskelijoita palkallisiin
                Internship-ohjelmiin Technology, Strategy &amp; Consulting,
                Creative ja Security -yksiköihin. Kaikki harjoittelupaikat ja
                muut kymmenet avoimet työpaikat täältä:
                www.accenture.com/fi-en/careers
              </p>
              <p>
                Accenture is a global IT consulting company of over 515 000
                professionals that offers solutions for its customers in over 40
                industries in over 120 countries. In Finland, Accenture has
                about 1100 employees in Helsinki and Tampere. Every year
                Accenture hires also students to paid internship programs in
                Technology, Strategy &amp; Consulting, Creative and Security
                -units. Check out the internship positions and tens of other
                open positions here
              </p>
            </div>
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
                Verkkosivut
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
              <img class="partner-logo" src={Reaktor} alt="Reaktor Logo" />
              <a
                target="_blank"
                href="https://www.reaktor.com/tampere/"
                class="PartnerItem__PartnerLink-sc-n5e0ep-0 edSrMC"
                rel="noreferrer"
              >
                Verkkosivut
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
                Verkkosivut
              </a>
            </div>
            <div class="partner-desc"></div>
          </div>

          <div class="partner-break"></div>
          <div class="partner-item">
            <div class="top-row">
              <img
                class="partner-logo"
                src={ReceiptHero}
                alt="ReceiptHero Logo"
              />
              <a
                target="_blank"
                href="https://www.getreceipthero.com/"
                class="PartnerItem__PartnerLink-sc-n5e0ep-0 edSrMC"
                rel="noreferrer"
              >
                Verkkosivut
              </a>
            </div>
            <div class="partner-desc"></div>
          </div>

          <div class="partner-break"></div>
          <div class="partner-item">
            <div class="top-row">
              <img class="partner-logo" src={Modulight} alt="Modulight Logo" />
              <a
                target="_blank"
                href="https://www.modulight.com/"
                class="PartnerItem__PartnerLink-sc-n5e0ep-0 bAPMmw"
                rel="noreferrer"
              >
                Verkkosivut
              </a>
            </div>
            <div class="partner-desc"></div>
          </div>

          <div class="partner-break"></div>
          <div class="partner-item">
            <div class="top-row">
              <img
                class="partner-logo"
                src={ProfitSoftware}
                alt="Profit Software Logo"
              />
              <a
                target="_blank"
                href="https://profitsoftware.com/"
                class="PartnerItem__PartnerLink-sc-n5e0ep-0 kKYexN"
                rel="noreferrer"
              >
                Verkkosivut
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
                Verkkosivut
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
                Verkkosivut
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
                href="https://www.vincit.com/"
                class="PartnerItem__PartnerLink-sc-n5e0ep-0 edSrMC"
                rel="noreferrer"
              >
                Verkkosivut
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
                Verkkosivut
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
                Verkkosivut
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
