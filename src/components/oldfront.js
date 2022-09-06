import Futurice from "./images/partners/futurice.png"
import Accenture from "./images/partners/accenture.png"
import Netum from "./images/partners/netum.png"
import Reaktor from "./images/partners/reaktor.png"
import Solita from "./images/partners/solita.png"
import ReceiptHero from "./images/partners/receipthero.png"
import Modulight from "./images/partners/modulight.png"

import sourcebanner from "./images/sourcebanner.jpeg"

const oldfront = () => {
    return (
        <div>
            <div className="page">
                <div className="page-banner-container">
                    <div className="page-banner filter">
                        <img className="bannerImage" src={sourcebanner} alt=""></img>
                    </div>
                    <h1 class="page-title">Etusivu</h1>
                </div>
                <div className="construction">
                    <h1> !HUOM!</h1>
                    <p> Sivusto on voimakkaan uudistuksen alla ja saattaa toimia odottamattomilla tavoilla.</p>
                </div>
                <div class="page-text">
                    <p>
                    SOURCE ry on TAMKin tieto- ja viestintätekniikan ainekerho. Kerho
                    on perustettu vuonna 2016. Yhdistykseksi rekisteröidyimme vuotta
                    myöhemmin. Näkyvin osa kerhoamme on oma kerhohuoneemme, joka
                    löytyy A-siiven kerhohuonekäytävän päästä, huoneesta A0-35.
                    </p>
                    <p>
                    SOURCEn tarkoituksena tiivistää TiTe-verkostoa ja jakaa tietoa
                    alamme mahdollisuuksista. SOURCE järjestää jäsenilleen mm. sauna-
                    ja lautapeli-iltoja sekä viikottaisen liikuntavuoron.
                    Merkittävimpiä tapahtumiamme ovat perinteiset TiTeLANit sekä
                    yrityksiä TAMKiin keräävä IoT-seminaari.
                    </p>
                    <p>
                    SOURCE toimii tiiviissä yhteistyössä Tamkon, TIRO ry:n sekä muiden
                    TAMKin kerhojen kanssa, osallistumalla tapahtumien järjestämiseen.
                    </p>
                    <p>
                    Kerhon jäseniksi ovat tervetulleita kaikki koulutusohjelmasta
                    riippumatta. Yritysvierailut ovat kuitenkin suunnattu
                    tietotekniikan opiskelijoille.
                    </p>
                </div>
                <h1 class="partners-title">Yhteistyökumppanimme</h1>
          <div class="partner-widget-partners">
            <a class="partner-widget-item" href="https://tammerforce.com/"><img src={Futurice} alt="Futurice Logo"/></a>
            <a class="partner-widget-item" href="https://www.accenture.com/"><img src={Accenture} alt="Accenture Logo"/></a>
            <a class="partner-widget-item" href="https://netum.fi"><img src={Netum} alt="Netum Logo"/></a>
            <a class="partner-widget-item" href="https://www.reaktor.com/tampere/"><img src={Reaktor} alt="Reaktor Logo"/></a>
            <a class="partner-widget-item" href="https://www.solita.fi/"><img src={Solita} alt="Solita Logo"/></a>
            <a class="partner-widget-item" href="https://www.getreceipthero.com/"><img src={ReceiptHero} alt="ReceiptHero Logo"/></a>
            <a class="partner-widget-item" href="https://www.modulight.com/"><img src={Modulight} alt="Modulight Logo"/></a>
          </div>
            </div>
        </div>
    )
  }
  
  
  export default oldfront


