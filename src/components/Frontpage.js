import Image from "./images/sourcebanner.jpeg"

const frontpage = () => {
    return (
        <div>
            <div>
                <img src={Image} alt=""></img>
                <h1 class="page-title">Etusivu</h1>
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
        </div>
    )
  }
  
  
  export default frontpage