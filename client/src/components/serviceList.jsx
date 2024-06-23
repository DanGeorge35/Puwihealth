import React, { Component } from "react";
import { servicesItems } from "./productServicesList";

class ServicesItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlayOpacity: Array(servicesItems.length).fill(0),
    };
  }

  handleMouseMove = (index) => {
    const newOverlayOpacity = [...this.state.overlayOpacity];
    newOverlayOpacity[index] = 0.8;
    this.setState({ overlayOpacity: newOverlayOpacity });
  };

  handleMouseLeave = (index) => {
    const newOverlayOpacity = [...this.state.overlayOpacity];
    newOverlayOpacity[index] = 0;
    this.setState({ overlayOpacity: newOverlayOpacity });
  };

  render() {
    return (
      <div className="services">
        <div className="pt-2 pb-5 servicesInfo pe-3 px-3 container">
          <div className="text-center pt-5"></div>
          <div className="row pb-5">
            {servicesItems.map((service, index) => (
              <div className="col-lg-4 pt-4" key={index}>
                <div
                  className="servicesContent mb-3"
                  style={{
                    fontSize: "18px",
                    overflow: "hidden",
                    boxShadow: "0px 1px 10px #ddd",
                    position: "relative",
                    borderRadius: "10px",
                  }}
                  onMouseMove={() => this.handleMouseMove(index)}
                  onMouseLeave={() => this.handleMouseLeave(index)}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      right: "0px",
                      top: "0px",
                      bottom: "0px",
                      backgroundColor: "rgba(0, 0, 0, 0.51)",
                      opacity: this.state.overlayOpacity[index],
                      transition: "opacity 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <a
                      href="https://wa.me/2348055261812"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-success"
                      style={{ borderRadius: "40px", width: "60%" }}
                    >
                      Contact Us
                    </a>
                  </div>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{ width: "100%" }}
                  />
                  <div className="bg-light pb-5 ">
                    <div
                      className="py-4 px-3"
                      style={{
                        fontSize: "15px",
                        fontWeight: "700",
                        color: "#009933",
                        textTransform: "uppercase",
                      }}
                    >
                      {service.name}
                    </div>
                    <div className="px-3">{service.shortDetail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesItems;
