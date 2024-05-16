import React, { Component } from "react";
import InfoCard from "./InfoCard";

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
              <div className="col-lg-5">
                <img src="yobah.png" style={{ width: "80%" }} />
              </div>
              <div className="col-lg-7 pt-4">
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
                  <b>DR. (MRS) F. J YOBAH fimc cmc</b>
                  <br></br>
                  <i>MD/CEO</i>
                </div>
                <br></br>
              </div>
            </div>
          </div>
        </div>
        <div className=" ext2  ">
          <div className=" pt-5 pb-4 aboutInfo bg-success ">
            <div className="pt-5 pb-5">
              <div className="pane p-3" style={{ textAlign: "justify" }}>
                <div className="row">
                  <div
                    className="col-lg-4  pe-3 px-3 pb-4 "
                    style={{ fontSize: "19px" }}
                  >
                    <InfoCard
                      img="vission.png"
                      title="OUR VISSION"
                      content="To deliver integrative medicinal solutions to health challenges effectively."
                    />
                  </div>
                  <div
                    className="col-lg-4  pe-3 px-3 pb-4 "
                    style={{ fontSize: "19px" }}
                  >
                    <InfoCard
                      img="mission.png"
                      title="OUR MISSION"
                      content="Providing integrative medicinal solutions to health challenges effectively and professionally both for individuals and corporate organizations."
                    />
                  </div>
                  <div
                    className="col-lg-4  pe-3 px-3 pb-4 "
                    style={{ fontSize: "19px" }}
                  >
                    <InfoCard
                      img="values.png"
                      title="OUR CORE VALUE"
                      content="To promote and administer natural, beneficial remedies that contribute to the overall wellness of our patients."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
