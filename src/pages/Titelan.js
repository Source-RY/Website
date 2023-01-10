import React, { useState } from "react";
import banner from "../components/images/titelan/logo.png";
import no_poster from "../components/images/titelan/titelan_no_poster.png";
import titelan_2020_1 from "../components/images/titelan/titelan_2022.png";
import titelan_2019_1 from "../components/images/titelan/titelan_2019.png";
import titelan_2018 from "../components/images/titelan/titelan_2018.jpg";
import titelan_2017 from "../components/images/titelan/titelan_2017.jpg";
import titelan_2014_2 from "../components/images/titelan/titelan_2014_2.png";
import titelan_2015_2 from "../components/images/titelan/titelan_2015_2.jpg";
import titelan_2013_2 from "../components/images/titelan/titelan_2013_2_recreation.png";
import titelan_2012_2 from "../components/images/titelan/titelan_2012_2.png";
import titelan_2012_1 from "../components/images/titelan/titelan_2012_1.png";
import titelan_2011_2 from "../components/images/titelan/titelan_2011_2.png";
import titelan_2011_1 from "../components/images/titelan/titelan_2011_1.png";
import titelan_2010_2 from "../components/images/titelan/titelan_2010_2.png";
import titelan_2010_1 from "../components/images/titelan/titelan_2010_1.png";
import TitelanTimer from "../components/Titelantimer";

const Titelan = () => {
  // If the nextTitelan value is "", the countdowns etc. will not be visible on the page
  const [nextTitelan, setNextTitelan] = useState(""); // Timestamp format: YYYY-MM-DD hh:mm ie. 2023-01-07 18:00 for example
  const [nextTitelanTickets, setNextTitelanTickets] = useState(""); // Add here the full link to the ticket sales website

  // Remember to update these values to fit the next event
  let next_titelan_html = (
    <div className="titelan-timer-container">
      <br />
      <h2>Seuraavat TiTeLANit:</h2>
      <div className="next-titelan-container">
        <div className="next-titelan-info-container">
          <img className="next-titelan-poster" src={no_poster} Alt="" />
          <div className="titelan-info">
            <h2>TiTeLAN 2023 I</h2>
            <p>XX.-XX.XX.2023</p>
          </div>
        </div>
        <TitelanTimer endDate={new Date(Date.parse(nextTitelan))} />
        <a href={nextTitelanTickets}>Liput</a>
      </div>
    </div>
  );

  return (
    <div>
      <div className="page">
        <div className="page-text">
          <div className="page-title-image">
            <img className="bannerImage" src={banner} alt=""></img>
          </div>
          {nextTitelan !== "" && next_titelan_html}
          <br />
          <p>
            TiTeLANIt on keväällä ja syksyllä järjestettävä LAN -tapahtuma
            <br />
            <br />
            Titelanit saivat alkunsa 2008 syksyllä, kun omaa
            verkkopelitapahtumaa ei ollut vielä TAMKilta löytynyt. Pitkän
            historiansa aikana Titelanit ovat olleet osallistujamääriltään
            suosittuja ja erilaisia peliturnauksia on järjestetty laidasta
            laitaan lanien aikana. Titelanien järjestyspaikaksi on vakiintunut
            TAMKin liikuntasali, mutta muutamaan otteeseen myös Tampereen
            keskustan Demolaa on käytetty. Tapahtuma on järjestetty katkeamatta
            joka vuosi, lukuun ottamatta pandemia ajan taukoa.
            <br />
          </p>
          <br />
          <br />
          <h1>Menneet Titelanit</h1>
        </div>
        <div className="titelanContainer">
          <div className="partner-break"></div>
          <div className="partner-item">
            <div className="titelan-info-container">
              <img
                className="titelan-poster"
                src={no_poster}
                Alt="Titelan 2022 II Poster"
              />
              <div className="titelan-info">
                <h2>TiTeLAN 2022 II</h2>
                <p>28.-30.10.2022</p>
              </div>
            </div>
            <div className="partner-desc"></div>
          </div>
          <div className="partner-break"></div>

          <div className="partner-break"></div>
          <div className="partner-item">
            <div className="titelan-info-container">
              <img
                className="titelan-poster"
                src={titelan_2020_1}
                Alt="Titelan 2022 I Poster"
              />
              <div className="titelan-info">
                <h2>TiTeLAN 2022 I</h2>
                <p>8.-10.4.2022</p>
                <p>Sijainti: TAMK Liikuntasali</p>
                <p>
                  Turnaukset: Counter-Strike: Global Offensive, NHL, Guitar
                  Hero, Civilization VI, Pro Pilkki 2
                </p>
              </div>
            </div>
            <div className="partner-desc"></div>
          </div>
          <div className="partner-break"></div>

          <div className="partner-break"></div>
          <div className="partner-item">
            <div className="titelan-info-container">
              <img
                className="titelan-poster"
                src={titelan_2019_1}
                Alt="Titelan 2019 I Poster"
              />
              <div className="titelan-info">
                <h2>TiTeLAN 2019</h2>
                <p>5.-7.4.2019</p>
                <p>Sijainti: TAMK Liikuntasali</p>
                <p>Turnaukset: Crash Team Racing, Tekken 7, Pro Pilkki 2</p>
              </div>
            </div>
            <div className="partner-desc"></div>
          </div>
          <div className="partner-break"></div>

          <div className="partner-break"></div>
          <div className="partner-item">
            <div className="titelan-info-container">
              <img
                className="titelan-poster"
                src={no_poster}
                Alt="Titelan 2018 II Poster"
              />
              <div className="titelan-info">
                <h2>TiTeLAN 2018 II</h2>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className="partner-desc"></div>
          </div>
          <div className="partner-break"></div>

          <div className="partner-break"></div>
          <div className="partner-item">
            <div className="titelan-info-container">
              <img
                className="titelan-poster"
                src={titelan_2018}
                Alt="Titelan 2018 II Poster"
              />
              <div className="titelan-info">
                <h2>TiTeLAN 2018 I</h2>
                <p>23.-25.3.2018</p>
                <p>Sijainti: TAMK Liikuntasali</p>
                <p>
                  Turnaukset: Counter-Strike: Global Offensive, Tekken 7, Rocket
                  League, Crash Team Racing, Pro Pilkki 2
                </p>
              </div>
            </div>
            <div className="partner-desc"></div>
          </div>
          <div className="partner-break"></div>

          <div className="partner-break"></div>
          <div className="partner-item">
            <div className="titelan-info-container">
              <img
                className="titelan-poster"
                src={no_poster}
                Alt="Titelan 2017 I Poster"
              />
              <div className="titelan-info">
                <h2>TiTeLAN 2017 II</h2>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className="partner-desc"></div>
          </div>
          <div className="partner-break"></div>

          <div className="partner-break"></div>
          <div className="partner-item">
            <div className="titelan-info-container">
              <img
                className="titelan-poster"
                src={titelan_2017}
                Alt="Titelan 2017 I Poster"
              />
              <div className="titelan-info">
                <h2>TiTeLAN 2017 I</h2>
                <p>24.-26.3.2017</p>
                <p>Sijainti: TAMK Liikuntasali</p>
                <p></p>
                <p>
                  Turnaukset: Counter-Strike: Global Offensive, Rocket League,
                  Tekken
                </p>
              </div>
            </div>
            <div className="partner-desc"></div>
          </div>
          <div className="partner-break"></div>

          <div className="partner-break"></div>
          <div className="partner-item">
            <div className="titelan-info-container">
              <img
                className="titelan-poster"
                src={titelan_2015_2}
                Alt="Titelan 2015 II Poster"
              />
              <div className="titelan-info">
                <h2>TiTeLAN 2015 II</h2>
                <p>20.-22.11.2015</p>
                <p>Sijainti: Demola</p>
                <p>
                  Turnaukset: Counter-Strike: Global Offensive, Heartstone,
                  Retrokompo, Rocket League, Speedrunners, Tekken Tag Tournament
                  2
                </p>
              </div>
            </div>
            <div className="partner-desc"></div>
          </div>
          <div className="partner-break"></div>

          <div className="partner-break"></div>
          <div className="partner-item">
            <div className="titelan-info-container">
              <img
                className="titelan-poster"
                src={titelan_2014_2}
                Alt="Titelan 2015 I Poster"
              />
              <div className="titelan-info">
                <h2>TiTeLAN 2015 I</h2>
                <p></p>
              </div>
            </div>
            <div className="partner-desc"></div>
          </div>
          <div className="partner-break"></div>

          <div className="partner-break"></div>
          <div className="partner-item">
            <div className="titelan-info-container">
              <img
                className="titelan-poster"
                src={titelan_2014_2}
                Alt="Titelan 2014 II Poster"
              />
              <div className="titelan-info">
                <h2>TiTeLAN 2014 II</h2>
                <p>24.-26.10.2014</p>
                <p></p>
                <p>
                  Turnaukset: Counter-Strike: Global Offensive, Heartstone, Dota
                  2, Retrokompo, Street Fighter, Tekken, Pro Pilkki 2, Quake
                  Live
                </p>
              </div>
            </div>
            <div className="partner-desc"></div>
          </div>
          <div className="partner-break"></div>

          <div className="partner-break"></div>
          <div className="partner-item">
            <div className="titelan-info-container">
              <img
                className="titelan-poster"
                src={no_poster}
                Alt="Titelan 2014 I Poster"
              />
              <div className="titelan-info">
                <h2>TiTeLAN 2014 I</h2>
                <p></p>
              </div>
            </div>
            <div className="partner-desc"></div>
          </div>
          <div className="partner-break"></div>

          <div className="partner-break"></div>
          <div className="partner-item">
            <div className="titelan-info-container">
              <img
                className="titelan-poster"
                src={titelan_2013_2}
                Alt="Titelan 2013 II Poster"
              />
              <div className="titelan-info">
                <h2>TiTeLAN 2013 II</h2>
                <p>15. -17.11.2013</p>
              </div>
            </div>
            <div className="partner-desc"></div>
          </div>
          <div className="partner-break"></div>

          <div className="partner-break"></div>
          <div className="partner-item">
            <div className="titelan-info-container">
              <img
                className="titelan-poster"
                src={no_poster}
                Alt="Titelan 2013 I Poster"
              />
              <div className="titelan-info">
                <h2>TiTeLAN 2013 I</h2>
                <p></p>
              </div>
            </div>
            <div className="partner-desc"></div>
          </div>
          <div className="partner-break"></div>

          <div className="partner-break"></div>
          <div className="partner-item">
            <div className="titelan-info-container">
              <img
                className="titelan-poster"
                src={titelan_2012_2}
                Alt="Titelan 2012 II Poster"
              />
              <div className="titelan-info">
                <h2>TiTeLAN 2012 II</h2>
                <p>26.-28.10.2012</p>
              </div>
            </div>
            <div className="partner-desc"></div>
          </div>
          <div className="partner-break"></div>

          <div className="partner-break"></div>
          <div className="partner-item">
            <div className="titelan-info-container">
              <img
                className="titelan-poster"
                src={titelan_2012_1}
                Alt="Titelan 2012 I Poster"
              />
              <div className="titelan-info">
                <h2>TiTeLAN 2012 I</h2>
                <p>23.-25.3.2012</p>
                <p>Sijainti: Demola</p>
                <p>Paikkamäärä: 120</p>
                <p>
                  Turnaukset: Heroes of Newerth, Starcraft 2, League of Legends,
                  Pro Pilkki 2, Left 4 Dead 2, Quake Live, Counter-Strike 1.6,
                  World of Warcraft
                </p>
              </div>
            </div>
            <div className="partner-desc"></div>
          </div>
          <div className="partner-break"></div>

          <div className="partner-break"></div>
          <div className="partner-item">
            <div className="titelan-info-container">
              <img
                className="titelan-poster"
                src={titelan_2011_2}
                Alt="Titelan 2011 II Poster"
              />
              <div className="titelan-info">
                <h2>TiTeLAN 2011 II</h2>
                <p>28.-30.10.2011</p>
                <p>Sijainti: Demola</p>
                <p>Paikkamäärä: 120</p>
                <p>
                  Turnaukset: Heroes of Newerth, Warsow, Starcraft 2, League of
                  Legends, Pro Pilkki 2
                </p>
              </div>
            </div>
            <div className="partner-desc"></div>
          </div>
          <div className="partner-break"></div>

          <div className="partner-break"></div>
          <div className="partner-item">
            <div className="titelan-info-container">
              <img
                className="titelan-poster"
                src={titelan_2011_1}
                Alt="Titelan 2011 I Poster"
              />
              <div className="titelan-info">
                <h2>TiTeLAN 2011 I</h2>
                <p>18.-20.3.2011</p>
                <p>Sijainti: Demola</p>
                <p>Paikkamäärä: 120</p>
                <p>
                  Turnaukset: Heroes of Newerth, Warsow, Starcraft 2, Super
                  Street Fighter 2, CD-levyn heitto
                </p>
              </div>
            </div>
            <div className="partner-desc"></div>
          </div>
          <div className="partner-break"></div>

          <div className="partner-break"></div>
          <div className="partner-item">
            <div className="titelan-info-container">
              <img
                className="titelan-poster"
                src={titelan_2010_2}
                Alt="Titelan 2010 II Poster"
              />
              <div className="titelan-info">
                <h2>TiTeLAN 2010 II</h2>
                <p>29.-31.10.2010</p>
                <p>Sijainti: Demola</p>
                <p>Paikkamäärä: 100</p>
                <p>Turnaukset: Heroes of Newerth, Warsow, Starcraft 2</p>
              </div>
            </div>
            <div className="partner-desc"></div>
          </div>
          <div className="partner-break"></div>

          <div className="partner-break"></div>
          <div className="partner-item">
            <div className="titelan-info-container">
              <img
                className="titelan-poster"
                src={titelan_2010_1}
                Alt="Titelan 2010 I Poster"
              />
              <div className="titelan-info">
                <h2>TiTeLAN 2010 I</h2>
                <p>9.-11.4.2010</p>
                <p>Sijainti: Demola</p>
                <p>Paikkamäärä: 100</p>
                <p>
                  Turnaukset: Heroes of Newerth, Battlefield: Bad Company 2,
                  Warsow
                </p>
              </div>
            </div>
            <div className="partner-desc"></div>
          </div>
          <div className="partner-break"></div>

          <div className="partner-break"></div>
          <div className="partner-item">
            <div className="titelan-info-container">
              <img
                className="titelan-poster"
                src={no_poster}
                Alt="Titelan 2009 II Poster"
              />
              <div className="titelan-info">
                <h2>TiTeLAN 2009 II</h2>
                <p>23.-25.10.2009</p>
                <p>Sijainti: TAMK Liikuntasali</p>
                <p>Paikkamäärä: 80</p>
                <p>
                  Turnaukset: Guitar Hero, Warsow, CD-levyn heitto, Grafiikka
                  -kilpailu, Heroes of Newerth, Super Mario -nopeuskilpailu
                </p>
              </div>
            </div>
            <div className="partner-desc"></div>
          </div>
          <div className="partner-break"></div>

          <div className="partner-break"></div>
          <div className="partner-item">
            <div className="titelan-info-container">
              <img
                className="titelan-poster"
                src={no_poster}
                Alt="Titelan 2009 I Poster"
              />
              <div className="titelan-info">
                <h2>TiTeLAN 2009 I</h2>
                <p>27.-29.3.2009</p>
                <p>Sijainti: TAMK Liikuntasali</p>
                <p>Paikkamäärä: 100</p>
                <p>
                  Turnaukset: Guitar Hero, Warsow, CD-levyn heitto, Grafiikka
                  -kilpailu
                </p>
              </div>
            </div>
            <div className="partner-desc"></div>
          </div>
          <div className="partner-break"></div>

          <div className="partner-break"></div>
          <div className="partner-item">
            <div className="titelan-info-container">
              <img
                className="titelan-poster"
                src={no_poster}
                Alt="Titelan 2009 I Poster"
              />
              <div className="titelan-info">
                <h2>TiTeLAN 2008</h2>
                <p>31.10. - 2.11.2008</p>
                <p>Sijainti: TAMK Liikuntasali</p>
                <p>Paikkamäärä: 40</p>
                <p>Turnaukset: Guitar Hero, Warsow, CD-levyn heitto</p>
              </div>
            </div>
            <div className="partner-desc"></div>
          </div>
          <div className="partner-break"></div>

          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Titelan;
