import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ServicesItems from "../components/serviceList";

class Services extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="about-page ">
          <div className="d-flex   align-items-center justify-content-center">
            <h1>SERVICES</h1>
          </div>
        </div>

        <div className="about">
          <div className="pt-5 pb-5 aboutInfo pe-3 px-3 container">
            <ServicesItems />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Services;
