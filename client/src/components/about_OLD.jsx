import React, { Component } from "react";
import Vmcore from "./vmcore";
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
              <div className="col-lg-12 pt-4">
                <div
                  className="aboutContent text-dark"
                  style={{ fontSize: "18px" }}
                >
                  <b style={{ fontSize: "30px" }}>W</b>e are a Limited Liability
                  company that deals with Integrative Medicine, Herbal Remedies,
                  Homeopathy And Naturopathy. We carry on all or any of the
                  businesses of manufacturers, buyers, sellers and distributors,
                  agents, and dealers in all kinds of Patents, Pharmaceutical,
                  Medicinal And Medicated Preparations, Perfumes, Creams,
                  Unguents, Hair Dressings, Washes, Pomades, Dyes, Cosmetics
                  Skin Preparations And Accessories, Soaps, Oil Deaginaus And
                  Vaporaceous Substances, Beauty Specialists Preparation And
                  Accessories of every description and of and in Proprietary And
                  Industrial Preparations.
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
                  <div className="">
                    <img src="yobah.png" style={{ width: "250px" }} />
                  </div>
                  <b>DR. (MRS) F. J YOBAH fimc cmc</b>
                  <br></br>
                  <i>MD/CEO</i>
                </div>
                <br></br>
              </div>
            </div>
          </div>
        </div>
        <Vmcore />
      </div>
    );
  }
}

export default About;
