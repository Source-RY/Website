import sourcebanner from "../components/images/sourcebanner.jpeg";
import boardmember_placeholder from "../components/images/boardmember_placeholder.png";
import nelli2022 from "../components/images/board/2022/nelli.jpg";
import alina2022 from "../components/images/board/2022/alina.jpg";
import jonna2022 from "../components/images/board/2022/jonna.jpg";
import arttu2022 from "../components/images/board/2022/arttu.jpg";
import safiul2022 from "../components/images/board/2022/safiul.jpg";
import laura2022 from "../components/images/board/2022/laura.jpg";
import toni2022 from "../components/images/board/2022/toni.jpg";
import leevi2022 from "../components/images/board/2022/leevi.jpg";
import sviat2022 from "../components/images/board/2022/sviat.jpg";
import metso2022 from "../components/images/board/2022/metso.jpg";

const Board = () => {
  const board2023 = {
    board: [
      {
        name: "Toni Rantanen",
        role: "Puheenjohtaja",
        image: toni2022,
      },
      {
        name: "Leevi Immonen",
        role: "Varapuheenjohtaja",
        image: leevi2022,
      },
      {
        name: "Atte Kaartosalmi",
        role: "Rahastonhoitaja",
        image: boardmember_placeholder,
      },
      {
        name: "Juho Mäkitalo",
        role: "Tapahtumavastaava",
        image: boardmember_placeholder,
      },
      {
        name: "Arttu Uuranmäki",
        role: "Vapaa-aikavastaava",
        image: arttu2022,
      },
      {
        name: "Laura Tiihonen",
        role: "Sihteeri ja viestintävastaava",
        image: laura2022,
      },
      {
        name: "Sylvi Kokko",
        role: "Jäsen- ja kerhisvastaava",
        image: boardmember_placeholder,
      },
      {
        name: "Alina Kauppila",
        role: "Ulkosuhdevastaava",
        image: alina2022,
      },
      {
        name: "Oscar Hero",
        role: "Kansainvälisyysvastaava",
        image: boardmember_placeholder,
      },
      {
        name: "Sviatoslav Vasev",
        role: "Webmaster",
        image: sviat2022,
      },
    ],
    staff: [
      { name: "Safiul Alam", role: "Web Junior" },
      { name: "Nelli Niinivaara", role: "IoT-Seminaari" },
      { name: "Mikko Wrightson", role: "IoT-Seminaari" },
      { name: "Johanna Huttunen", role: "IoT-Seminaari" },
      { name: "Leo Liikka", role: "TiTeLAN" },
      { name: "Marko Metsola", role: "TiTeLAN" },
      { name: "Sinimaarit Mustonen", role: "TiTeLAN" },
      { name: "Aino Syrjälä", role: "IO-Virta" },
      { name: "Juho Mäkitalo", role: "IO-Virta" },
      { name: "Juuso Alanko", role: "IO-Virta" },
      { name: "Johanna Huttunen", role: "IO-Virta" },
    ],
  };
  const board2022 = {
    board: [
      {
        name: "Nelli Niinivaara",
        role: "Puheenjohtaja",
        image: nelli2022,
      },
      {
        name: "Alina Kauppila",
        role: "Varapuheenjohtaja",
        image: alina2022,
      },
      {
        name: "Jonna Sorsa",
        role: "Rahastonhoitaja",
        image: jonna2022,
      },
      {
        name: "Arttu Uuranmäki",
        role: "Tapahtumavastaava",
        image: arttu2022,
      },
      {
        name: "Safiul Alam",
        role: "Vapaa-aikavastaava",
        image: safiul2022,
      },
      {
        name: "Laura Tiihonen",
        role: "Sihteeri ja viestintävastaava",
        image: laura2022,
      },
      {
        name: "Toni Rantanen",
        role: "Jäsen- ja kerhisvastaava",
        image: toni2022,
      },
      {
        name: "Leevi Immonen",
        role: "Ulkosuhdevastaava",
        image: leevi2022,
      },
      {
        name: "Sviatoslav Vasev",
        role: "Kansainvälisyysvastaava",
        image: sviat2022,
      },
      {
        name: "Marko Metsola",
        role: "Webmaster",
        image: metso2022,
      },
    ],
    staff: [
      { name: "Miika Lahti", role: "IoT-Seminaari" },
      { name: "Tuomas Väkiparta", role: "IoT-Seminaari" },
      { name: "Mikko Wrightson", role: "TiTeLAN" },
      { name: "Juho Mäkitalo", role: "TiTeLAN" },
      { name: "Esa Parkkila", role: "TiTeLAN" },
      { name: "Anmol Arora", role: "IO-Virta" },
      { name: "Juho Mäkitalo", role: "IO-Virta" },
      { name: "Juuso Alanko", role: "IO-Virta" },
    ],
  };
  const board2021 = {
    board: [
      { name: "Mikko Wrightson", role: "Puheenjohtaja" },
      { name: "Artturi Koutonen", role: "Varapuheenjohtaja" },
      { name: "Jonna Sorsa", role: "Rahastonhoitaja" },
      { name: "Joonas Korpela", role: "Tapahtumavastaava" },
      { name: "Toni Rantanen", role: "Vapaa-aikavastaava" },
      { name: "Nelli Niinivaara", role: "Sihteeri ja viestintävastaava" },
      { name: "Veera Selin", role: "Jäsen- ja kerhisvastaava" },
      { name: "Tomi Minkkinen", role: "Ulkosuhdevastaava" },
      { name: "Aaro Toivonen", role: "Webmain" },
    ],
    staff: [{ name: "Janne Vanhanen", role: "Web Junior ja IO-virta" }],
  };
  return (
    <div>
      <div className="page">
        <div className="page-banner-container">
          <div className="page-banner filter">
            <img className="bannerImage" src={sourcebanner} alt=""></img>
          </div>
          <h1 class="page-title">Hallitus</h1>
        </div>
        <div class="page-text">
          <br />
          <br />
          <div className="current-board-container">
            {board2023.board.map((member) => (
              <div className="boardmember">
                <img src={member.image} alt=""></img>
                <p className="boardmember-name">{member.name}</p>
                <i className="boardrole">//{member.role}</i>
              </div>
            ))}
          </div>
          <div className="helpers-container">
            <h2>Toimihenkilöt</h2>
            {board2023.staff.map((member) => (
              <div className="helper">
                <p>
                  <b>{member.name}:</b>
                </p>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
          <br />
          <p>
            Uusi hallitus ja toimihenkilöt valitaan joka vuosi syyskokouksessa
            ja ehdolle asettuminen tapahtuu saapumalla paikalle kokoukseen ja
            ilmaisemalla halukkuutensa siinä kohtaa kokousta, kun
            hallitusta/toimihenkilöitä valitaan.
          </p>

          <br />
          <br />
          <h1>Menneet hallitukset ja toimihenkilöt</h1>
          <div className="boards-container">
            <h2>2022</h2>
            <div className="board-container">
              {board2022.board.map((member) => (
                <div className="old-boardmember">
                  <img src={member.image} alt=""></img>
                  <p className="boardmember-name">{member.name}</p>
                  <i className="boardrole">//{member.role}</i>
                </div>
              ))}
            </div>
            <br />

            <p>
              <b>Toimihenkilöt</b>
            </p>
            {board2022.staff.map((member) => (
              <p>
                <b>{member.role}:</b> {member.name}
              </p>
            ))}

            <h2>2021</h2>
            {board2021.board.map((member) => (
              <p>
                <b>{member.role}:</b> {member.name}
              </p>
            ))}
            <br />
            <p>
              <b>Toimihenkilöt</b>
            </p>
            {board2021.staff.map((member) => (
              <p>
                <b>{member.role}:</b> {member.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
