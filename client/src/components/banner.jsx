import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { NavLink } from "react-router-dom";

class Banner extends Component {
  render() {
    const images = [
      {
        url: "./herb1.png",
        caption1: "",
        caption2: "OPTIMAL HEALTH",
        caption3:
          "We are dedicated to providing you with the highest quality natural products and services",
        action: { title: "Make Appointment", url: "contact" },
      },
      {
        url: "./herb1.png",
        caption1: "",
        caption2: "MEDICAL SOLUTION ",
        caption3:
          "Our experience in integrative and alternative medicine is aimed at bringing relief to patients effectively.",
        action: { title: "Order Now", url: "products" },
      },
      {
        url: "./mash.png",
        caption1: "",
        caption2: "GET FIT & LOOK GOOD",
        caption3:
          "A session in our far Energy room and bucket will rejuvenate your skin and enhance your body's metabolism",
        action: { title: "Get Started", url: "contact" },
      },
    ];
    return (
      <Slide autoplay={true} arrows={false} indicators={true} infinite={true}>
        {images.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              style={{
                backgroundImage: `url(${slideImage.url})`,
                position: "relative",
              }}
            >
              <div
                className="each-slide-child"
                style={{ backgroundColor: "rgb(33 29 29 / 70%)" }}
              >
                <div className="Slidetop">{slideImage.caption1}</div>
                <div className="Slidetitle">{slideImage.caption2}</div>
                <br></br>
                <br></br>
                <div className="Slidedetails">
                  {slideImage.caption3}
                  <br></br>
                  <br></br>
                  <NavLink
                    to={`/${slideImage.action.url}`}
                    className="btn btn-success   py-2 px-4 pr-4 "
                    aria-current="page"
                    style={{ display: "inline !important", minWidth: "200px" }}
                  >
                    {slideImage.action.title}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    );
  }
}

export default Banner;
