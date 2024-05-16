import React, { Component } from "react";

class Whychoose extends Component {
  render() {
    return (
      <div className="services " style={{ borderTop: "15px solid #000" }}>
        <div className="pt-5 servicesInfo pe-3 px-3 container">
          <div className="text-center pt-5"></div>
          <div className="row ">
            <div className="col-lg-6 pt-4 pb-5">
              <div
                className="servicesContent pb-4"
                style={{ fontSize: "18px" }}
              >
                <b className="text-black fontFam1">WHY CHOOSE PUWIHEALTH</b>
                <div
                  className="pt-1 pb-2"
                  style={{
                    fontSize: "40px",
                    fontWeight: "700",
                    color: "#009933",
                  }}
                >
                  High Quality Medical Care
                </div>
                <div
                  className="pt-1 pb-2"
                  style={{
                    fontSize: "25px",
                    fontWeight: "700",
                    color: "#d55680",
                  }}
                >
                  +234-7037770063
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
            <div className="col-lg-6 ">
              <div
                className="bgimg"
                style={{
                  backgroundPosition: "top",
                  backgroundImage: "url(nurse.jpeg)",
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

export default Whychoose;
