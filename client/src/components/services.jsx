import React, { Component } from "react";
import { servicesItems } from "./productServicesList";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      overlayOpacity: 0,
    };
  }

  handleNext = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % servicesItems.length,
    }));
  };

  handleUpdateIndex = (dindex) => {
    this.setState(() => ({
      currentIndex: dindex % servicesItems.length,
    }));
  };

  handlePrev = () => {
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + servicesItems.length) %
        servicesItems.length,
    }));
  };

  handleMouseMove = () => {
    this.setState({
      overlayOpacity: 0.9,
    });
  };

  handleMouseLeave = () => {
    this.setState({
      overlayOpacity: 0,
    });
  };

  render() {
    const { currentIndex, overlayOpacity } = this.state;
    const currentService = servicesItems[currentIndex];

    return (
      <div className="services" style={{ backgroundColor: "antiquewhite" }}>
        <div className="pt-5 pb-5 servicesInfo pe-3 px-3 container">
          <div className="text-center pt-5"></div>
          <b className="fontFam1" style={{ color: "#d55680" }}>
            OUR SERVICES
          </b>
          <div
            className="pt-1 pb-2"
            style={{
              fontSize: "30px",
              fontWeight: "700",
              color: "#009933",
            }}
          >
            Services offered at Puwi Health Wellness Center
          </div>
          <br></br>
          <br></br>
          <div className="row pb-5">
            <div className="col-lg-6">
              <div className="p-lg-4 py-5">
                <div
                  className="servicesContent mb-3"
                  style={{
                    position: "relative",
                    fontSize: "18px",
                    overflow: "hidden",
                    boxShadow: "0px 1px 10px #ddd",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      right: "0px",
                      top: "0px",
                      bottom: "0px",
                      backgroundColor: "rgba(0, 0, 0, 0.51)",
                      opacity: overlayOpacity,
                      transition: "opacity 0.3s ease",
                    }}
                    className="w3-display-container"
                    onMouseMove={this.handleMouseMove}
                    onMouseLeave={this.handleMouseLeave}
                  >
                    <a
                      href="https://wa.me/2348055261812"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-success  w3-display-middle"
                      style={{ borderRadius: "40px", width: "60%" }}
                    >
                      Contact Us On Whatsapp
                    </a>
                  </div>
                  <img
                    src={currentService.image}
                    alt={currentService.title}
                    style={{ width: "100%" }}
                  />
                  <div className="bg-light pb-5">
                    <div
                      className="py-4 px-3"
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        color: "#009933",
                        textTransform: "uppercase",
                      }}
                    >
                      {currentService.name}
                    </div>
                    <div className="px-3">{currentService.shortDetail}</div>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    className="btn btn-dark px-4 mx-2"
                    style={{ borderRadius: "20px" }}
                    onClick={this.handlePrev}
                    disabled={currentIndex === 0}
                  >
                    Prev
                  </button>

                  <button
                    className="btn btn-dark px-4 mx-2"
                    style={{ borderRadius: "20px" }}
                    onClick={this.handleNext}
                    disabled={currentIndex === servicesItems.length - 1}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="servicesContent" style={{ fontSize: "18px" }}>
                We are dedicated to providing you with the highest quality
                natural products and services to help you achieve optimal health
                and wellness.
                <ul className="pt-4">
                  {servicesItems.map((service, index) => (
                    <li
                      key={index}
                      style={{ textTransform: "capitalize", cursor: "pointer" }}
                      className="over_text_change"
                      onClick={() => {
                        this.handleUpdateIndex(index);
                      }}
                    >
                      {service.name}
                    </li>
                  ))}
                </ul>
                <br></br>
                We work with our patients to identify the root cause of their
                health challenges, and we provide them with the Care and
                resources they need to achieve optimal health and wellness.
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
