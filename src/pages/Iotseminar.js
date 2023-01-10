import banner from "../components/images/iotseminaari/logo_white_2020.png";

const Iotseminar = () => {
  return (
    <div>
      <div className="page">
        <div className="page-text">
          <div className="page-title-image">
            <img src={banner} alt=""></img>
          </div>
          <br />
          <p>
            IoT-Seminaari on Tampereen ammattikorkeakoululla järjestettävä
            seminaaritapahtuma, joka kerää yhteen alan yrityksiä,
            asiantuntijoita ja opiskelijoita.
            <br />
            <br />
            IoT-Seminaarissa perehdytään tieteen ja tekniikan alan monipuolisiin
            ratkaisuihin ja innovaatioihin seminaariesitelmien puitteissa sekä
            päivän aikana voi tutustua eri yritysten ständeihin ja verkostoitua.
            <br />
          </p>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Iotseminar;
