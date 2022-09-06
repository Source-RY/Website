import banner from "./images/tapahtumat.jpeg"

const oldevents = () => {
    return (
        <div>
            <div className="page">
                <div className="page-banner-container">
                    <div className="page-banner filter">
                        <img className="bannerImage" src={banner} alt="bannerimage"></img>
                    </div>
                    <h1 class="page-title">Tapahtumat</h1>
                </div>
                <div className="construction">
                    <h1> !HUOM!</h1>
                    <p> Sivusto on voimakkaan uudistuksen alla ja saattaa toimia odottamattomilla tavoilla.</p>
                </div>
                <div class="page-text">
                    <p>
                    Source ry järjestää monenlaisia tapahtumia jäsenilleen, kuten
                    yritysvierailuja eli ekskursioita, erilaisia vapaa-ajan
                    tapahtumia, sekä seminaareja ICT-alasta.
                    </p>
                    <p><strong>Vapaa-aika: </strong></p>
                    <p>Vapaa-ajan tapahtumia ovat esimerkiksi:</p>
                    <ul>
                    <li>Erilaiset opiskelijabileet</li>
                    <li>Uusien ilta</li>
                    <li>Kerhon liikuntavuoro</li>
                    <li>TiteLanit</li>
                    <li>Lautapeli-illat</li>
                    <li>Muuta ajanviettoa</li>
                    </ul>
                    <p>
                    <strong>Yritystapahtumat:</strong><br />Erilaisia tapahtumia,
                    joissa opiskelijat pääsevät tutustumaan yrityksiin, niiden
                    kehittämiin tuotteisiin/ratkaisuihin, kuulemaan mielenkiintoisia
                    puheenaiheita ICT:stä ja viettämään iltaa yrityksien henkilökunnan
                    kanssa. Tälläisiä tapahtumia ovat:
                    </p>
                    <ul>
                    <li>Ekskursiot</li>
                    <li>Seminaarit</li>
                    <li>Messut</li>
                    </ul>
                </div>
            </div>
        </div>
    )
  }
  
  
  export default oldevents


