import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Namebanner from "./components/Namebanner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Front from "./pages/Front";
import Membership from "./pages/Membership";
import Events from "./pages/Events";
import Suggestions from "./pages/Suggestions";
import Contact from "./pages/Contact";
import Partners from "./pages/Partners";
import Missing from "./pages/Missing404";
import Titelan from "./pages/Titelan";
import Board from "./pages/Board";
import Saannot from "./pages/Saannot";
import Iotseminar from "./pages/Iotseminar";
import Tuotteet from "./pages/Tuotteet";
import Yhdistys from "./pages/Yhdistys";
import "./styles/navbar.css";
import "./styles/front.css";
import "./styles/page.css";
import "./styles/partners.css";
import "./styles/titelan.css";
import "./styles/board.css";
import "./styles/products.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header"></header>
        <Namebanner></Namebanner>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/jasenyys" element={<Membership />} />
          <Route path="/tapahtumat" element={<Events />} />
          <Route path="/ehdotukset" element={<Suggestions />} />
          <Route path="/yhteystiedot" element={<Contact />} />
          <Route path="/kumppanit" element={<Partners />} />
          <Route path="/titelan" element={<Titelan />} />
          <Route path="/iotseminaari" element={<Iotseminar />} />
          <Route path="/hallitus" element={<Board />} />
          <Route path="/saannot" element={<Saannot />} />
          <Route path="/tuotteet" element={<Tuotteet />} />
          <Route path="/yhdistys" element={<Yhdistys />} />
          <Route path="*" element={<Missing />} />
        </Routes>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
