import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import NoPage from "./pages/404";
import About from "./pages/about";
import ServicesProduct from "./pages/servicesproducts";
import EnergyRoom from "./pages/energyroom";
import Faq from "./pages/faq";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/servicesproduct" element={<ServicesProduct />} />
            <Route path="/energyroom" element={<EnergyRoom />} />
            <Route path="/Faq" element={<Faq />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
