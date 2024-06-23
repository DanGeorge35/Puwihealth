import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ContactQr from "../components/contactqr";

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
        <ContactQr />
        <Footer />
      </div>
    );
  }
}

export default Contact;
