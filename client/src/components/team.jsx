import React, { Component } from "react";

class Team extends Component {
  render() {
    return (
      <div className="team bg-light">
        <div className="pt-5 pb-5 teamInfo pe-3 px-3  container">
          <div className="text-center pt-5">
            <div
              className="pt-1 pb-4"
              style={{
                fontSize: "30px",
                fontWeight: "700",
                color: "#d55680",
              }}
            >
              Meet Our Specialists
            </div>
            <div
              className="text-black fontFam1 pb-5"
              style={{ maxWidth: "750px", display: "inline-block" }}
            >
              We have assembled a team of experienced and highly qualified
              professionals in integrative medicine who are dedicated to
              providing our patients with the best care possible.
            </div>
          </div>

          <div className="row  ">
            <div
              className="col-lg-3 p-1 offset-lg-1"
              style={{
                height: "100%",
              }}
            >
              <img
                src="ceo.jpeg"
                style={{ width: "100%", border: "5px solid #198754" }}
              />
              <div className="pt-2 pb-2 pe-2 px-2 bg-success text-white ">
                DR. (MRS) F. J YOBAH FIMC CMC<br></br> <b>MD/CEO</b>
              </div>
            </div>
            <div
              className="col-lg-3  offset-lg-1 p-1"
              style={{
                height: "100%",
              }}
            >
              <img
                src="man.jpeg"
                style={{ width: "100%", border: "5px solid #198754" }}
              />
              <div className="pt-2 pb-2 pe-2 px-2 bg-success text-white ">
                NSEOBONG CLEMENT
                <br></br> <b>EXECUTIVE DIRECTOR</b>
              </div>
            </div>

            <div
              className="col-lg-3 offset-lg-1  p-1"
              style={{
                height: "100%",
              }}
            >
              <img
                src="p.png"
                style={{ width: "100%", border: "5px solid #198754" }}
              />
              <div className="pt-2 pb-2 pe-2 px-2 bg-success text-white ">
                PROF. OSMOND IFEANYI ONYEKA
                <br></br> <b>CONSULTANT</b>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="row ">
            <div
              className="col-lg-3  offset-lg-2  p-1"
              style={{
                height: "100%",
              }}
            >
              <img
                src="tosin.png"
                style={{ width: "100%", border: "5px solid #198754" }}
              />
              <div className="pt-2 pb-2 pe-2 px-2 bg-success text-white ">
                ETETEGWANG EKENS URIAH
                <br></br> <b>CLINICIAN</b>
              </div>
            </div>
            <div
              className="col-lg-3  offset-lg-1  p-1"
              style={{
                height: "100%",
              }}
            >
              <img
                src="nurse1.jpeg"
                style={{ width: "100%", border: "5px solid #198754" }}
              />
              <div className="pt-2 pb-2 pe-2 px-2 bg-success text-white ">
                ADEOYE ABOSEDE
                <br></br> <b>NURSE</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
