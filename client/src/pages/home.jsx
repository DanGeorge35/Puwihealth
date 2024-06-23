import React, { Component } from "react";
import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";
import AboutComp from "../components/about";
import Services from "../components/services";
import Whychoose from "../components/whychoose";
import Whymedicine from "../components/whymedicine";
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <AboutComp />

        <Whymedicine />

        <Services />

        <Whychoose />
        <Footer />
      </div>
    );
  }
}

export default Home;
