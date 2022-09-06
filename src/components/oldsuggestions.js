import banner from "./images/ehdotukset.jpeg"

const oldsuggestions = () => {
    return (
        <div>
            <div className="page">
                <div className="page-banner-container">
                    <div className="page-banner filter">
                        <img className="bannerImage" src={banner} alt=""></img>
                    </div>
                    <h1 class="page-title">Ehdotukset</h1>
                </div>
                <div className="construction">
                    <h1> !HUOM!</h1>
                    <p> Sivusto on voimakkaan uudistuksen alla ja saattaa toimia odottamattomilla tavoilla.</p>
                </div>
                <div class="page-text">
                    <p>
                    Kerro meille mitä kerhohuoneelta puuttuu!<br />Täytä alla olevan
                    linkin takana oleva lomake ja kirjaa, mitä haluaisit hallituksen
                    hankkivan kerhohuoneelle.<br /><a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeZar30P-LmcHjYnlOaebpS9G-TGrS1_KnHtUEghFOH8CImSg/viewform"
                        >Kerhohuoneen hankinnat</a
                    >
                    </p>
                    <p>
                    Onko sinulla mielessäsi jokin yritys johon haluaisit päästä töihin
                    tai muuten vaan tutustumaan ja näkemään, minkälaista siellä on?<br />Laita
                    meille oma ekskursio ehdotuksesi!<br />Minkä yrityksen sinä
                    haluaisit nähdä?<br /><a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeehQrOdczRqpODpw1exrf1baUp_zMfOgdS6tNDz0r04z02tA/viewform"
                        >Ekskursio ehdotukset</a
                    >
                    </p>
                </div>
            </div>
        </div>
    )
  }
  
  
  export default oldsuggestions


