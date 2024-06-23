import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ServicesItems from "../components/serviceList";
import Map from "../components/map";

class Services extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="about-page ">
          <div className="d-flex   align-items-center justify-content-center">
            <h1>OUR SERVICES</h1>
          </div>
        </div>

        <div className="about pt-5">
          <div className="pt-5 pb-5 aboutInfo pe-3 px-3 container">
            <div className="text-center">
              {" "}
              <b className="fontFam1" style={{ color: "#d55680" }}>
                OUR SERVICES
              </b>
            </div>
            <div
              className="pt-1 pb-2 text-center"
              style={{
                fontSize: "30px",
                fontWeight: "700",
                color: "#009933",
              }}
            >
              Services offered at Puwi Health Wellness Center
            </div>

            <ServicesItems />
          </div>
          <Map />
        </div>

        <Footer />
      </div>
    );
  }
}

export default Services;
