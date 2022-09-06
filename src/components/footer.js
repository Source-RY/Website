import Image from "./images/source-small-text.png";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-item">
          <p>hallitus@source.club</p>
          <p>Kuntokatu 3</p>
          <p>33520</p>
          <p>Tampere</p>
        </div>
        <div className="footer-item">
          <p></p>
        </div>
        <div className="footer-item">
          <p>Kerhotila/: A-siipi kellarikerros A0-35</p>
          <p>
            Löytääksesi kerhohuoneen, kävele kaikkien muiden ainejärjestöjen
            kerhohuoneiden ohi, kävele suoraan vastaan tulevan oven läpi ja
            jatka melkein ulko-ovelle asti.
          </p>
          <p>Club room: Wing-A, basement floor A0-35</p>
          <p>
            To find the club room, walk past every club room in the basement
            floor, walk through the door that comes straight ahead in the
            corridor and walk almost to the outside door.
          </p>
        </div>
      </div>
      <img src={Image} alt=""></img>
    </div>
  );
};

export default footer;
