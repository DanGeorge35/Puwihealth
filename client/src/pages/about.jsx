import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import AboutComp from "../components/about";

class About extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="about-page ">
          <div className="d-flex   align-items-center justify-content-center">
            <h1>ABOUT US</h1>
          </div>
        </div>
        <AboutComp />

        <Footer />
      </div>
    );
  }
}

export default About;
