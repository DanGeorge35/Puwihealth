import React, { Component } from "react";

class Services extends Component {
  render() {
    return (
      <div className="about">
        <div className="pt-5 pb-5 aboutInfo pe-3 px-3 container">
          <div className="text-center pt-5"></div>
          <div className="row pb-5">
            <div className="col-lg-7 pt-4">
              <div className="aboutContent" style={{ fontSize: "18px" }}>
                <b className="text-white fontFam1">SERVICES</b>
                <div
                  className="pt-1 pb-2"
                  style={{
                    fontSize: "30px",
                    fontWeight: "700",
                    color: "#009933",
                  }}
                >
                  Our Innovative Approach to Treatment.
                </div>
                <br></br>
                We are dedicated to providing you with the highest quality
                natural products and services to help you achieve optimal health
                and wellness.
                <br></br>
                <br></br>
                <ul>
                  <li>Homeopathic Remedies </li>
                  <li> Naturopathic Remedies </li>
                  <li> Vitamins and Supplements</li>
                  <li> Herbal Remedies</li>
                  <li> Extemporaneous Preparations Therapy</li>
                </ul>
                <br></br>
                Our approach to healthcare is centered on the belief that the
                body has the innate ability to heal itself when given the right
                support. We work with our patients to identify the root cause of
                their health challenges, and we provide them with the tools and
                resources they need to achieve optimal health and wellness.
              </div>
              <br></br>
            </div>
            <div className="col-lg-5 ">
              <div
                className="bgimg"
                style={{
                  backgroundImage: "./herb.png",
                  height: "100%",
                  width: "100%",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
