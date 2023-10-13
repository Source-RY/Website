import React from "react";
import { useTranslation } from "react-i18next";
import sourcebanner from "../components/images/sourcebanner.jpeg";

const Saannot = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className="page">
        <div className="page-banner-container">
          <div className="page-banner filter">
            <img className="bannerImage" src={sourcebanner} alt=""></img>
          </div>
          <h1 class="page-title">{t("rules")}</h1>
        </div>
        {i18n.language === "fi" ? (
          <div class="page-text">
            <h2>1§ Yhdistyksen nimi ja kotipaikka</h2>
            <p>
              Yhdistyksen nimi on SOURCE ry, ja sitä kutsutaan näissä säännöissä
              yhdistykseksi. Yhdistyksen kotipaikka on Tampere.
            </p>

            <h2>2§ Tarkoitus ja toiminta</h2>
            <p>
              Yhdistyksen tarkoituksena on edistää Tampereen ammattikorkeakoulun
              tieto- ja viestintätekniikan opiskelijoiden yhteishenkeä ja
              verkostoitumista. Yhdistys pyrkii edistämään sekä opiskelijoiden
              välistä yhteistyötä että yritysyhteistyötä.
            </p>
            <p>
              Yhdistys järjestää tapahtumia jäsenilleen sekä pyrkii toteuttamaan
              ekskursioita ja muita vierailuja tieto- ja viestintätekniikan alan
              yrityksiin ja tapahtumiin.
            </p>
            <p>
              Yhdistyksen toimintaa tuetaan jäseniltä kerättävillä
              jäsenmaksuilla. Lisäksi kerho voi hankkia varallisuutta
              järjestämiensä tapahtumien pääsymaksuilla, lahjoituksilla,
              yritysyhteistyöllä ja oheistuotteiden myynnillä.
            </p>

            <h2>3§ Jäsenet</h2>
            <p>
              Yhdistyksen varsinaiseksi jäseneksi voidaan hyväksyä henkilö, joka
              hyväksyy yhdistyksen tarkoituksen ja säännöt. Jäsenen tulee
              lisäksi olla Tampereen ammattikorkeakoulun opiskelija.
            </p>
            <p>
              Kannattajajäseneksi voidaan hyväksyä yksityinen henkilö tai
              oikeuskelpoinen yhteisö, joka haluaa tukea yhdistyksen tarkoitusta
              ja toimintaa.
            </p>
            <p>
              Varsinaiset ja kannattajajäsenet hyväksyy yhdistyksen hallitus.
              Mikäli varsinaisen jäsenyyden maksanut jäsen valmistuu ennen
              jäsenyyden päättymistä, muuttuu jäljellä oleva varsinainen
              jäsenyys kannattajajäsenyydeksi.
            </p>

            <h2>4§ Jäsenen oikeudet</h2>
            <p>
              Yhdistyksen kokouksessa on jokaisella varsinaisella jäsenellä yksi
              ääni. Kannattajajäsenellä on läsnäolo- ja puheoikeus, mutta ei
              äänioikeutta.
            </p>

            <h2>5§ Jäsenen velvollisuudet</h2>
            <p>
              Varsinainen jäsen on velvollinen maksamaan vuotuisen jäsenmaksun.
              Jäsenmaksun määrittää vuosikokous. Yhdistys tarkastaa jäsenmaksun
              suuruuden vuosittain. Jäsen voi maksaa jäsenmaksun vuosittain tai
              useamman vuoden kerrallaan maksuhetkellä voimassa olevan
              jäsenmaksun mukaisesti.
            </p>

            <h2>6§ Jäsenen eroaminen</h2>
            <p>
              Jäsenellä on oikeus erota yhdistyksestä ilmoittamalla siitä
              kirjallisesti hallitukselle tai sen puheenjohtajalle tai
              ilmoittamalla eroamisesta yhdistyksen kokouksessa pöytäkirjaan
              merkittäväksi.
            </p>

            <h2>7§ Jäsenen erottaminen</h2>
            <p>
              Yhdistys voi erottaa jäsenen yhdistyksestä, jos jäsen on jättänyt
              erääntyneen jäsenmaksunsa maksamatta tai muuten jättänyt
              täyttämättä ne velvoitukset, joihin hän on yhdistykseen
              liittymällä sitoutunut tai on menettelyllään yhdistyksessä tai sen
              ulkopuolella huomattavasti vahingoittanut yhdistystä tai ei enää
              täytä laissa tai säännöissä mainittuja jäsenyyden ehtoja.
            </p>

            <h2>8§ Hallitus</h2>
            <p>
              Yhdistyksen hallitukseen kuuluu puheenjohtaja ja vähintään kolme
              ja enintään kymmenen jäsentä. Hallitus valitsee keskuudestaan
              varapuheenjohtajan ja keskuudestaan tai ulkopuoleltaan
              rahastonhoitajan, sihteerin ja muut tarvittavat toimihenkilöt.
              Hallituksen toimikausi on kalenterivuosi.
            </p>
            <p>
              Hallitukseen voidaan valita ainoastaan Tampereen
              ammattikorkeakoulun tieto- ja viestintätekniikan opiskelijoita.
              Hallitukseen pyrkivän tulee olla SOURCE ry:n jäsen tai liittyä
              välittömästi valituksi tultuaan. Jos hallituksen jäsen valmistuu
              kesken hallituskauden, voi hän halutessaan jatkaa hallituksessa
              kauden loppuun.
            </p>
            <p>
              Yhdistys voi kokouksessaan erottaa hallituksen jäsenen kesken
              kauden hallituksen tai jäsenten ehdotuksesta, mikäli vähintään
              puolet yhdistyksen kokouksessa läsnäolevista jäsenistä sitä
              puoltaa kokouksessa. Jos erotettu hallituksen jäsen ei ollut
              kokouksessa läsnä, on kokouksessa toimineen puheenjohtajan
              toimitettava hänelle pöytäkirja kahden viikon sisällä kokouksen
              päättymisestä. Kesken toimikauden joko lopettaneen tai erotetun
              toimihenkilön tilalle voidaan valita hallituksen sisältä henkilö
              vastaamaan tämän vastuualueesta kauden loppuun tai uuden
              vastuuhenkilön valintaan saakka.
            </p>
            <p>
              Yhdistyksen hallituksen jäsen on velvollinen korvaamaan vahingon,
              jonka hän on toiminnallaan aiheuttanut yhdistykselle. Vahingoksi
              katsotaan myös yhdistyksen varojen väärinkäyttö.
            </p>

            <h2>9§ Yhdistyksen nimen kirjoittaminen</h2>
            <p>
              Yhdistyksen nimen kirjoittaa hallituksen puheenjohtaja yksin, tai
              kaksi hallituksen jäsentä yhdessä.
            </p>

            <h2>10§ Tilikausi</h2>
            <p>Yhdistyksen tilikausi on 1.1. - 31.12.</p>

            <h2>11§ Toiminnantarkastus / Tilintarkastus</h2>
            <p>
              Tilinpäätös tarvittavine asiakirjoineen ja hallituksen
              vuosikertomus on annettava
              toiminnantarkastajille/tilintarkastajille viimeistään kuukautta
              ennen sitä kokousta, jossa tilinpäätös vahvistetaan.
              Toiminnantarkastajien/tilintarkastajien tulee antaa kirjallinen
              lausuntonsa viimeistään kaksi viikkoa ennen kyseistä kokousta
              hallitukselle.
            </p>

            <h2>12§ Yhdistyksen kokoukset</h2>
            <p>Yhdistyksen kevätkokouksessa käsitellään seuraavat asiat:</p>
            <ol>
              <li>kokouksen avaus</li>
              <li>
                valitaan kokouksen puheenjohtaja, sihteeri, vähintään kaksi
                pöytäkirjantarkastajaa ja tarvittaessa vähintään kaksi
                ääntenlaskijaa
              </li>
              <li>todetaan kokouksen laillisuus ja päätösvaltaisuus</li>
              <li>hyväksytään kokouksen työjärjestys</li>
              <li>
                esitetään tilinpäätös, vuosikertomus ja
                toiminnantarkastajien/tilintarkastajien lausunto
              </li>
              <li>
                päätetään tilinpäätöksen vahvistamisesta ja vastuuvapauden
                myöntämisestä hallitukselle ja muille vastuuvelvollisille
              </li>
              <li>käsitellään muut kokouskutsussa mainitut asiat.</li>
            </ol>
            <p>Yhdistyksen syyskokouksessa käsitellään seuraavat asiat:</p>
            <ol>
              <li>kokouksen avaus</li>
              <li>
                valitaan kokouksen puheenjohtaja, sihteeri, vähintään kaksi
                pöytäkirjantarkastajaa ja tarvittaessa vähintään kaksi
                ääntenlaskijaa
              </li>
              <li>todetaan kokouksen laillisuus ja päätösvaltaisuus</li>
              <li>hyväksytään kokouksen työjärjestys</li>
              <li>vahvistetaan toimintasuunnitelma sekä tulo- ja menoarvio</li>
              <li>
                vahvistetaan varsinaisten jäsenten jäsenmaksun suuruus sekä
                kannattajajäsenten kannattajajäsenmaksun suuruus
              </li>
              <li>valitaan hallitus 9 §:n mukaan</li>
              <li>
                valitaan yksi tai kaksi toiminnantarkastajaa ja
                varatoiminnantarkastajaa taikka yksi tai kaksi tilintarkastajaa
                ja varatilintarkastajaa tarkastamaan kuluvan tilikauden tilejä
              </li>
              <li>käsitellään muut kokouskutsussa mainitut asiat.</li>
            </ol>
            <p>
              Mikäli yhdistyksen jäsen haluaa saada jonkin asian yhdistyksen
              kevät- tai syyskokouksen käsiteltäväksi, on hänen ilmoitettava
              siitä kirjallisesti hallitukselle niin hyvissä ajoin, että asia
              voidaan sisällyttää kokouskutsuun.
            </p>
            <p>
              Kokouksiin on mahdollista osallistua etävälineitä hyödyntäen
              kokouskutsussa määritetyllä tavalla.
            </p>

            <h2>13§ Päätöksentekojärjestys</h2>
            <p>
              Yhdistyksen kokouksen päätökseksi tulee, ellei säännöissä ole
              toisin määrätty, se mielipide jota on kannattanut yli puolet
              annetuista äänistä.
            </p>
            <p>
              Äänten mennessä tasan ratkaisee kokouksen puheenjohtajan ääni,
              vaaleissa kuitenkin arpa.
            </p>

            <h2>14§ Ylimääräinen kokous</h2>
            <p>
              Ylimääräinen kokous pidetään kun yhdistyksen kokous niin päättää
              tai kun hallitus katsoo siihen olevan aihetta tai kun vähintään
              kymmenesosa (1/10) yhdistyksen äänioikeutetuista jäsenistä sitä
              hallitukselta erityisesti ilmoitettua asiaa varten kirjallisesti
              vaatii.
            </p>
            <p>
              Kokous on pidettävä kolmenkymmenen vuorokauden kuluessa siitä, kun
              vaatimus sen pitämisestä on esitetty hallitukselle.
            </p>

            <h2>15§ Kokouskutsutapa</h2>
            <p>
              Hallituksen on kutsuttava yhdistyksen kokoukset koolle vähintään
              14 päivää ennen kokousta kirjallisesti.
            </p>

            <h2>16§ Sääntöjen muuttaminen</h2>
            <p>
              Päätös sääntöjen muuttamisesta on tehtävä yhdistyksen kokouksessa
              vähintään kolmen neljäsosan (3/4) enemmistöllä annetuista äänistä.
            </p>
            <p>
              Kokouskutsussa on mainittava sääntöjen muuttamisesta.
              Sääntömuutokset tulee hyväksyttää kahdessa peräkkäisessä
              yhdistyksen kokouksessa.
            </p>

            <h2>17§ Yhdistyksen purkaminen</h2>
            <p>
              Päätös yhdistyksen purkamisesta on tehtävä yhdistyksen kokouksessa
              vähintään kolmen neljäsosan enemmistöllä annetuista äänistä.
            </p>
            <p>Kokouskutsussa on mainittava yhdistyksen purkamisesta.</p>
            <p>
              Yhdistyksen purkautuessa käytetään yhdistyksen varat yhdistyksen
              tarkoituksen edistämiseen purkamisesta päättävän kokouksen
              määräämällä tavalla.
            </p>

            <br />
            <br />
          </div>
        ) : (
          <div class="page-text">
            <h2>1§ Name and Domicile of the Association</h2>
            <p>
              The name of the association is SOURCE Association, and it is
              referred to as the association in these rules. The domicile of the
              association is Tampere.
            </p>

            <h2>2§ Purpose and Activities</h2>
            <p>
              The purpose of the association is to promote the community spirit
              and networking of students in the field of information and
              communication technology at Tampere University of Applied
              Sciences. The association aims to enhance collaboration among
              students as well as cooperation with companies.
            </p>
            <p>
              The association organizes events for its members and strives to
              arrange excursions and other visits to companies and events in the
              field of information and communication technology.
            </p>
            <p>
              The activities of the association are supported by membership fees
              collected from the members. Additionally, the club can acquire
              assets through entrance fees for organized events, donations,
              cooperation with companies, and the sale of ancillary products.
            </p>

            <h2>3§ Members</h2>
            <p>
              A regular member of the association can be accepted as a person
              who accepts the purpose and rules of the association. The member
              must also be a student at Tampere University of Applied Sciences.
            </p>
            <p>
              A supporting member can be an individual or a legal entity that
              wants to support the purpose and activities of the association.
            </p>
            <p>
              Regular and supporting members are approved by the association's
              board. If a regular member who has paid the membership fee
              graduates before the membership expires, the remaining regular
              membership becomes supporting membership.
            </p>

            <h2>4§ Rights of Members</h2>
            <p>
              At the association's meetings, each regular member has one vote. A
              supporting member has the right to attend and speak but does not
              have the right to vote.
            </p>

            <h2>5§ Obligations of Members</h2>
            <p>
              A regular member is obliged to pay the annual membership fee. The
              amount of the membership fee is determined by the annual meeting.
              The association reviews the amount of the membership fee annually.
              A member can pay the membership fee annually or for multiple years
              according to the currently valid membership fee at the time of
              payment.
            </p>

            <h2>6§ Resignation of Members</h2>
            <p>
              A member has the right to resign from the association by notifying
              the board in writing or by announcing their resignation at the
              association's meeting to be recorded in the minutes.
            </p>

            <h2>7§ Expulsion of Members</h2>
            <p>
              The association can expel a member from the association if the
              member has left their due membership fee unpaid or otherwise
              failed to fulfill the obligations to which they committed by
              joining the association, or if their actions within or outside the
              association have significantly harmed the association or if they
              no longer meet the conditions for membership mentioned in the law
              or rules.
            </p>

            <h2>8§ Board</h2>
            <p>
              The association's board consists of a chairperson and a minimum of
              three and a maximum of ten members. The board selects a
              vice-chairperson and, among its members or from outside, a
              treasurer, a secretary, and other necessary officials. The term of
              the board is a calendar year.
            </p>
            <p>
              Only students in the field of information and communication
              technology at Tampere University of Applied Sciences can be
              elected to the board. Anyone seeking a position on the board must
              be a member of SOURCE Association or join immediately after being
              elected. If a board member graduates during their term, they can
              choose to continue on the board until the end of the term.
            </p>
            <p>
              The association can dismiss a board member during their term at
              the proposal of the board or the members if at least half of the
              members present at the association meeting support it. If the
              dismissed board member was not present at the meeting, the
              chairperson who presided over the meeting must provide them with
              the minutes within two weeks of the meeting's conclusion. If a
              board member terminates their responsibilities or is dismissed
              during the term, a person from within the board can be appointed
              to be responsible for their area of responsibility until the end
              of the term or until a new responsible person is elected.
            </p>
            <p>
              A board member of the association is obligated to compensate for
              any damages they have caused to the association through their
              actions. Misuse of the association's assets is also considered
              damage.
            </p>

            <h2>9§ Signing of the Association's Name</h2>
            <p>
              The association's name is signed by the chairperson of the board
              alone or by two members of the board together.
            </p>

            <h2>10§ Financial Year</h2>
            <p>
              The association's financial year is from January 1 to December 31.
            </p>

            <h2>11§ Auditing</h2>
            <p>
              The financial statements with the necessary documents and the
              annual report of the board must be submitted to the
              auditors/accountants no later than one month before the meeting
              where the financial statements are to be approved. The
              auditors/accountants must provide their written statement no later
              than two weeks before the said meeting to the board.
            </p>

            <h2>12§ Association Meetings</h2>
            <p>
              The following matters are addressed at the association's spring
              meeting:
            </p>
            <ol>
              <li>Opening of the meeting</li>
              <li>
                Election of the chairperson, secretary, at least two protocol
                inspectors, and, if necessary, at least two vote counters
              </li>
              <li>Establishing the legality and quorum of the meeting</li>
              <li>Approval of the agenda of the meeting</li>
              <li>
                Presentation of the financial statements, annual report, and the
                statement of the auditors/accountants
              </li>
              <li>
                Decision on the approval of the financial statements and
                granting discharge from liability to the board and other
                accountable individuals
              </li>
              <li>
                Discussion of other matters mentioned in the meeting notice
              </li>
            </ol>
            <p>
              The following matters are addressed at the association's autumn
              meeting:
            </p>
            <ol>
              <li>Opening of the meeting</li>
              <li>
                Election of the chairperson, secretary, at least two protocol
                inspectors, and, if necessary, at least two vote counters
              </li>
              <li>Establishing the legality and quorum of the meeting</li>
              <li>Approval of the agenda of the meeting</li>
              <li>
                Approval of the action plan and the income and expenditure
                estimate
              </li>
              <li>
                Approval of the amount of the membership fee for regular members
                and supporting members
              </li>
              <li>Election of the board according to § 9</li>
              <li>
                Election of one or two auditors and deputy auditors or one or
                two accountants and deputy accountants to inspect the accounts
                of the ongoing financial year
              </li>
              <li>
                Discussion of other matters mentioned in the meeting notice
              </li>
            </ol>
            <p>
              If a member of the association wants a specific matter to be
              discussed at the spring or autumn meeting of the association, they
              must inform the board in writing well in advance so that the
              matter can be included in the meeting notice.
            </p>
            <p>
              It is possible to participate in meetings using remote tools as
              specified in the meeting notice.
            </p>

            <h2>13§ Decision-Making Order</h2>
            <p>
              The decision of the association's meeting shall be the opinion
              supported by more than half of the votes cast unless otherwise
              provided in the rules.
            </p>
            <p>
              In the event of a tie, the vote of the chairperson of the meeting
              shall prevail, except in elections where the winner is decided by
              drawing lots.
            </p>

            <h2>14§ Extraordinary Meeting</h2>
            <p>
              An extraordinary meeting is held when decided by the association's
              meeting, or when the board finds reason for it, or when at least
              one-tenth (1/10) of the association's members entitled to vote
              demand it from the board in writing for a specific reason.
            </p>
            <p>
              The meeting must be held within thirty days from the time the
              demand for the meeting was submitted to the board.
            </p>

            <h2>15§ Method of Notifying Meetings</h2>
            <p>
              The board must notify the association's meetings in writing at
              least 14 days before the meeting.
            </p>

            <h2>16§ Amendment of the Rules</h2>
            <p>
              A decision to amend the rules must be made at the association's
              meeting with at least three-quarters (3/4) majority of the votes
              cast.
            </p>
            <p>
              The meeting notice must specify the amendment of the rules. Rule
              changes must be approved in two consecutive meetings of the
              association.
            </p>

            <h2>17§ Dissolution of the Association</h2>
            <p>
              A decision to dissolve the association must be made at the
              association's meeting with at least three-quarters majority of the
              votes cast.
            </p>
            <p>
              The meeting notice must specify the dissolution of the
              association. When the association is dissolved, the assets of the
              association will be used to further the purpose of the association
              as determined by the meeting deciding on the dissolution.
            </p>

            <br />
            <br />
          </div>
        )}
      </div>
    </div>
  );
};

export default Saannot;
