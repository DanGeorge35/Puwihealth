import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { servicesItems } from "./productServicesList";
class SiteSlide extends Component {
  render() {
    return (
      <Slide autoplay={true} infinite={true}>
        {servicesItems.map((service, index) => (
          <div className="each-slide2  " key={index}>
            <div style={{ backgroundImage: `url(${service.image})` }}></div>
          </div>
        ))}
      </Slide>
    );
  }
}

export default SiteSlide;
