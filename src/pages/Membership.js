import banner from "../components/images/jasenyys.png";

const Membership = () => {
  return (
    <div>
      <div className="page">
        <div className="page-banner-container">
          <div className="page-banner filter">
            <img className="bannerImage" src={banner} alt=""></img>
          </div>
          <h1 class="page-title">Jäsenyys</h1>
        </div>
        <div class="page-text">
          <p>
            SOURCEn vuotuinen jäsenmaksu on 5€. Jäsenyyden voi hankkia joko
            hallituksen jäseneltä tai SOURCEn verkkokaupasta. Ostaessasi neljän
            vuoden jäsenyyden kerralla saat SOURCEn haalarimerkin ilmaiseksi
            (kysy merkkiä hallituksen jäseneltä).
          </p>
          <p>
            Jäsenenä voit
            <br />– osallistua jäsenille tarkoittuihin tapahtumiin, kuten
            saunailtoihin
            <br />– osallistua yritysvierailuille
            <br />– hakea kerhohuoneelta kahvia tai teetä ilmaiseksi
            <br />– hyödyntää SOURCEn viikottaista liikuntavuoroa
            <br />– osallistua SOURCEn järjestämiin tapahtumiin, kuten
            TiTeLAN-tapahtumaan jäsenhintaan
          </p>
          <p>
            SOURCEn kerhohuone löytyy Kuntokadun A-siiven pohjakerroksen tilasta
            A0-35 (kerhohuonekäytävää melkein ulos asti ja vasemmalle).
            Kerhohuoneelta saat lähes aina tukea opiskeluusi ja sieltä löytyy
            myös pelejä.
          </p>
          <p>
            Lisäksi SOURCE osallistuu koulutuspolitiikkaan yhdessä TAMKOn ja
            tieto- ja viestintätekniikan linjan kanssa.
          </p>
          <p>
            <a href="https://kide.app/memberships/208e706f-aeb4-41cb-86c8-e0243ef90bc5">
              Liity jäseneksi
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Membership;
