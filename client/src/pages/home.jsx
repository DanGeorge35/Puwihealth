import React, { Component } from "react";
import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";

import About from "../components/about";
import Services from "../components/services";
import Team from "../components/team";
import Whychoose from "../components/whychoose";
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <About />

        <Services />
        <Team />

        <Whychoose />
        <Footer />
      </div>
    );
  }
}

export default Home;
