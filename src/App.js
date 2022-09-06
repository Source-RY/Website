import { HashRouter  as Router, Route, Routes } from "react-router-dom";

import Namebanner from "./components/namebanner";
import Footer from "./components/footer";
import OldNavbar from "./components/oldnav";
//import Navbar from "./components/navbar";
import OldFront from "./components/oldfront";
import OldMembership from "./components/oldmembership";
import OldEvents from "./components/oldevents";
import OldSuggestions from "./components/oldsuggestions";
import OldContact from "./components/oldcontact";
import OldPartners from "./components/oldpartners";
import Old404 from "./components/old404";
//import "./styles/navbar.css";
import "./styles/oldsource.css";
import "./styles/oldfront.css";
import "./styles/front.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header"></header>
        <Namebanner></Namebanner>
        <OldNavbar></OldNavbar>

        <Routes>
          <Route path="/" element={<OldFront />} />
          <Route path="/jasenyys" element={<OldMembership />} />
          <Route path="/tapahtumat" element={<OldEvents />} />
          <Route path="/ehdotukset" element={<OldSuggestions />} />
          <Route path="/yhteystiedot" element={<OldContact />} />
          <Route path="/kumppanit" element={<OldPartners />} />
          <Route path="*" element={<Old404 />} />
        </Routes>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
/*
<OldFront></OldFront>
<OldMembership></OldMembership>
<OldEvents></OldEvents>
<OldSuggestions></OldSuggestions>
<OldContact></OldContact>
<OldPartners></OldPartners>
<Old404></Old404>*/

/*
      <Routes>
				<Route path="/" element={<OldFront/>}/>
				<Route path="/jasenyys" element={<OldMembership/>}/>
				<Route path="/tapahtumat" element={<OldEvents/>}/>
				<Route path="/ehdotukset" element={<OldSuggestions/>}/>
				<Route path="/yhteystiedot" element={<OldContact/>}/>
				<Route path="/kumppanit" element={<OldPartners/>}/>
				<Route path="*" element={<Old404/>}/>
			</Routes>
*/

/*
    <Router>
      <div className="App">
        <header className="App-header"></header>
        <Namebanner></Namebanner>
        <OldNavbar></OldNavbar>

        <Routes>
				  <Route path="/" element={<OldFront/>}/>
				  <Route path="/jasenyys" element={<OldMembership/>}/>
				  <Route path="/tapahtumat" element={<OldEvents/>}/>
				  <Route path="/ehdotukset" element={<OldSuggestions/>}/>
				  <Route path="/yhteystiedot" element={<OldContact/>}/>
				  <Route path="/kumppanit" element={<OldPartners/>}/>
				  <Route path="*" element={<Old404/>}/>
			  </Routes>

        <Footer></Footer>
      </div>
    </Router>
*/
