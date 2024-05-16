import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

class Investment extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="about-page ">
          <div className="d-flex   align-items-center justify-content-center">
            <h1>ENERGY ROOM</h1>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Investment;
