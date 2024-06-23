import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <div className="about">
          <div className="pt-5 pb-5 aboutInfo pe-3 px-3 container">
            <div className="text-center pt-5">
              <b className=" fontFam1" style={{ color: "#d55680" }}>
                YOU ARE WELCOME TO
              </b>
              <div
                className="pt-1 pb-2"
                style={{
                  fontSize: "30px",
                  fontWeight: "700",
                  color: "#009933",
                }}
              >
                Puwi Health Limited
              </div>
            </div>
            <div className="row pb-5">
              <div className="col-lg-8 pt-4">
                <div
                  className="aboutContent text-dark"
                  style={{ fontSize: "18px" }}
                >
                  <b style={{ fontSize: "20px" }}>P</b>uwi Health Wellness
                  Center is a Naturopathic clinic located in Abuja. Naturopathy
                  is a system of healing using diet and substances freely found
                  in Nature. Examples of these substances are air, water,
                  sunlight, herbs, clay, gemstones, etc. We offer holistic
                  health services, we do not suppress symptoms but work to find
                  out the root cause of the issue and remove it. We also work
                  with the body and create a favourable environment for the body
                  to heal itself.
                  <br></br>
                  <br></br>
                  As an organization that aims to be at the forefront of
                  wellness and healthy living, we strive to promote and
                  administer healthy remedies that are natural, beneficial and
                  most importantly contribute to the overall wellness of our
                  patients. We implore the best hands in integrative medicine to
                  ensure that our services are top-notch and highly effective.
                  <br></br>
                  <br></br>
                </div>
              </div>
              <div className=" col-lg-4 pt-4 text-center">
                <img src="yobah.png" style={{ width: "250px" }} />
                <br />
                <b>DR. (MRS) F. J YOBAH fimc cmc</b>
                <br></br>
                <i>MD/CEO</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
