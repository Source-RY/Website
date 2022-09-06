import banner from "./images/yhteystiedot.jpeg"

const oldcontact = () => {
    return (
        <div>
            <div className="page">
                <div className="page-banner-container">
                    <div className="page-banner filter">
                        <img className="bannerImage" src={banner} alt=""></img>
                    </div>
                    <h1 class="page-title">Yhteystiedot</h1>
                </div>
                <div className="construction">
                    <h1> !HUOM!</h1>
                    <p> Sivusto on voimakkaan uudistuksen alla ja saattaa toimia odottamattomilla tavoilla.</p>
                </div>
                <div class="page-text">
                    <p>
                    Sähköposti/email: hallitus(at)source.club Osoite/address:
                    Kuntokatu 3, 33520 Tampere<br />Kerhotila/Club room: A-siipi
                    kellarikerros A0-35/Wing-A basement floor A0-35
                    </p>
                    <p>
                    Löytääksesi kerhohuoneen, kävele kaikkien muiden ainejärjestöjen
                    kerhohuoneiden ohi, kävele suoraan vastaan tulevan oven läpi ja
                    jatka melkein ulko-ovelle asti.
                    </p>
                    <p>
                    To find the club room, walk past every club room in the basement
                    floor, walk through the door that comes straight ahead in the
                    corridor and walk almost to the outside door.
                    </p>
                </div>
            </div>
        </div>
    )
  }
  
  
  export default oldcontact


