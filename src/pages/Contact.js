import banner from "../components/images/yhteystiedot.jpeg";
import map from "../components/images/kerhohuone.png";

const Contact = () => {
  return (
    <div>
      <div className="page">
        <div className="page-banner-container">
          <div className="page-banner filter">
            <img className="bannerImage" src={banner} alt=""></img>
          </div>
          <h1 class="page-title">Yhteystiedot</h1>
        </div>
        <div class="page-text">
          <p>
            Sähköposti/email: hallitus(at)source.club Osoite/address: Kuntokatu
            3, 33520 Tampere
            <br />
            Kerhotila/Club room: A-siipi kellarikerros A0-35/Wing-A basement
            floor A0-35
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
          <img className="mapImage" src={map} alt=""></img>
        </div>
        <h1 className="partners-title">Häirintäyhdyshenkilö</h1>
        <div className="page-text">
          <p>
            Kaikilla on oikeus turvalliseen elämään ilman minkäänlaista
            häirintää. Asiaton, syrjivä ja loukkaava puhe, käytös tai
            viestittely ei kuulu Tampereen ammattikorkeakouluun eikä muuhunkaan
            opiskelijaelämään.
          </p>
          <p>
            Sourcen häirintäyhdyshenkilö tukee ja neuvoo häirintää kohdanneita
            opiskelijoita. Myös häirintää nähneet voivat ottaa yhteyttä
            häirintäyhdyshenkilöhön mieltä askarruttavissa kysymyksissä, kuten
            toimintatavoista keskustellakseen. Häirintäyhdyshenkilö ei lähde
            toteuttamaan jatkotoimenpiteitä ilman suostumusta. Hän ei myöskään
            pidä kirjaa yhteyttä ottaneista ja hänellä on täysi
            vaitiolovelvollisuus.
          </p>
          <p>
            Häirintäyhdyshenkilön tavoitat:{" "}
            <a href="mailto:jasen@source.club">jasen@source.club</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
