import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Whychoose from "../components/whychoose";

class Contact extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="about-page ">
          <div className="d-flex   align-items-center justify-content-center">
            <h1>CONTACT US</h1>
          </div>
        </div>
        <Whychoose />
        <Footer />
      </div>
    );
  }
}

export default Contact;
