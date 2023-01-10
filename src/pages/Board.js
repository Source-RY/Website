import sourcebanner from "../components/images/sourcebanner.jpeg";
import boardmember_placeholder from "../components/images/boardmember_placeholder.png";

const Board = () => {
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
            <div className="boardmember">
              <img src={boardmember_placeholder} alt=""></img>
              <p className="boardmember-name">Toni Rantanen</p>
              <i className="boardrole">//Puheenjohtaja</i>
            </div>
            <div className="boardmember">
              <img src={boardmember_placeholder} alt=""></img>
              <p className="boardmember-name">Leevi Immonen</p>
              <i className="boardrole">//Varapuheenjohtaja</i>
            </div>
            <div className="boardmember">
              <img src={boardmember_placeholder} alt=""></img>
              <p className="boardmember-name">Atte Kaartosalmi</p>
              <i className="boardrole">//Rahastonhoitaja</i>
            </div>
          </div>
          <div className="current-board-container">
            <div className="boardmember">
              <img src={boardmember_placeholder} alt=""></img>
              <p className="boardmember-name">Juho Mäkitalo</p>
              <i className="boardrole">//Tapahtumavastaava</i>
            </div>
            <div className="boardmember">
              <img src={boardmember_placeholder} alt=""></img>
              <p className="boardmember-name">Arttu Uuranmäki</p>
              <i className="boardrole">//Vapaa-aikavastaava</i>
            </div>
            <div className="boardmember">
              <img src={boardmember_placeholder} alt=""></img>
              <p className="boardmember-name">Laura Tiihonen</p>
              <i className="boardrole">//Sihteeri ja viestintävastaava</i>
            </div>
          </div>
          <div className="current-board-container">
            <div className="boardmember">
              <img src={boardmember_placeholder} alt=""></img>
              <p className="boardmember-name">Sylvi Kokko</p>
              <i className="boardrole">//Jäsen- ja kerhisvastaava</i>
            </div>
            <div className="boardmember">
              <img src={boardmember_placeholder} alt=""></img>
              <p className="boardmember-name">Alina Kauppila</p>
              <i className="boardrole">//Ulkosuhdevastaava</i>
            </div>
            <div className="boardmember">
              <img src={boardmember_placeholder} alt=""></img>
              <p className="boardmember-name">Oscar Hero</p>
              <i className="boardrole">//Kansainvälisyysvastaava</i>
            </div>
            <div className="boardmember">
              <img src={boardmember_placeholder} alt=""></img>
              <p className="boardmember-name">Sviatoslav Vasev</p>
              <i className="boardrole">//Webmaster</i>
            </div>
          </div>
          <div className="helpers-container">
            <h2>Toimihenkilöt</h2>
            <div className="helper">
                <p><b>Web Junior:</b></p>
                <p>Safiul Alam</p>
            </div>
            <div className="helper">
                <p><b>IoT-Seminaari: </b></p>
                <p>Nelli Niinivaara</p>
            </div>
            <div className="helper">
                <p><b>IoT-Seminaari: </b></p>
                <p>Mikko Wrightson</p>
            </div>
            <div className="helper">
                <p><b>IoT-Seminaari: </b></p>
                <p>Johanna Huttunen</p>
            </div>
            <div className="helper">
                <p><b>TiTeLAN: </b></p>
                <p>Leo Liikka</p>
            </div>
            <div className="helper">
                <p><b>TiTeLAN: </b></p>
                <p>Marko Metsola</p>
            </div>
            <div className="helper">
                <p><b>TiTeLAN: </b></p>
                <p>Sinimaarit Mustonen</p>
            </div>
            <div className="helper">
                <p><b>IO-Virta: </b></p>
                <p>Aino Syrjälä</p>
            </div>
            <div className="helper">
                <p><b>IO-Virta: </b></p>
                <p>Juho Mäkitalo</p>
            </div>
            <div className="helper">
                <p><b>IO-Virta: </b></p>
                <p>Juuso Alanko</p>
            </div>
            <div className="helper">
                <p><b>IO-Virta: </b></p>
                <p>Johanna Huttunen</p>
            </div>
          </div>
          <br />
          <p>
            Uusi hallitus ja toimihenkilöt valitaan joka vuosi syyskokouksessa ja ehdolle
            asettuminen tapahtuu saapumalla paikalle kokoukseen ja ilmaisemalla
            halukkuutensa siinä kohtaa kokousta, kun hallitusta/toimihenkilöitä valitaan.
          </p>

          <br />
          <br />
          <h1>Menneet hallitukset ja toimihenkilöt</h1>
          <div className="boards-container">
            <h2>2022-2023</h2>
            <p><b>Puheenjohtaja:</b> Nelli Niinivaara</p>
            <p><b>Varapuheenjohtaja:</b> Alina Kauppila</p>
            <p><b>Rahastonhoitaja:</b> Jonna Sorsa</p>
            <p><b>Tapahtumavastaava:</b> Arttu Uuranmäki</p>
            <p><b>Vapaa-aikavastaava:</b> Safiul Alam</p>
            <p><b>Sihteeri ja viestintävastaava:</b> Laura Tiihonen</p>
            <p><b>Jäsen- ja kerhisvastaava:</b> Toni Rantanen</p>
            <p><b>Ulkosuhdevastaava:</b> Leevi Immonen</p>
            <p><b>Kansainvälisyysvastaava:</b> Sviatoslav Vasev</p>
            <p><b>Webmaster:</b> Marko Metsola</p>
            <br/>
            <p><b>Toimihenkilöt</b></p>
            <p><b>IoT-Seminaari:</b> Miika Lahti</p>
            <p><b>IoT-Seminaari:</b> Tuomas Väkiparta</p>
            <p><b>TiTeLAN:</b> Mikko Wrightson</p>
            <p><b>TiTeLAN:</b> Juho Mäkitalo</p>
            <p><b>TiTeLAN:</b> Esa Parkkila</p>
            <p><b>IO-Virta:</b> Anmol Arora</p>
            <p><b>IO-Virta:</b> Juho Mäkitalo</p>
            <p><b>IO-Virta:</b> Juuso Alanko</p>

            <h2>2021-2022</h2>
            <p><b>Puheenjohtaja:</b> Mikko Wrightson</p>
            <p><b>Varapuheenjohtaja:</b> Artturi Koutonen</p>
            <p><b>Rahastonhoitaja:</b> Jonna Sorsa</p>
            <p><b>Tapahtumavastaava:</b> Joonas Korpela</p>
            <p><b>Vapaa-aikavastaava:</b> Toni Rantanen</p>
            <p><b>Sihteeri ja viestintävastaava:</b> Nelli Niinivaara</p>
            <p><b>Jäsen- ja kerhisvastaava:</b> Veera Selin</p>
            <p><b>Ulkosuhdevastaava:</b> Tomi Minkkinen</p>
            <p><b>Webmain:</b> Aaro Toivonen</p>
            <br/>
            <p><b>Toimihenkilöt</b></p>
            <p><b>Web Junior ja IO-virta:</b> Janne Vanhanen</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
