import React, { Component } from "react";

class Whychoose extends Component {
  render() {
    return (
      <div className="services ">
        <div className="pt-5 servicesInfo pe-3 px-3 container">
          <div className="text-center pt-5"></div>
          <div className="row  pt-4 pb-5">
            <div className="col-lg-6">
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
                  Wellness Center
                </div>
                <div className="pt-1 pb-2">
                  <a
                    href="https://wa.me/2348055261812"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: "25px",
                      fontWeight: "700",
                      color: "#d55680",
                    }}
                  >
                    +234-8055261812
                  </a>
                </div>
                <br></br>
                <ul>
                  <li className="pt-lg "> Friendly and calm environment</li>
                  <li className="pt-lg "> Your privacy is 100% guaranteed </li>
                  <li className="pt-lg ">
                    {" "}
                    Our products and services are affordable{" "}
                  </li>
                  <li className="pt-lg "> Our herbs are highly potent</li>
                  <li className="pt-lg ">
                    Our complimentary therapies are highly effective{" "}
                  </li>
                  <li className="pt-lg ">
                    Our complimentary therapies are highly effective{" "}
                  </li>
                  <li className="pt-lg ">Friendly staffs</li>
                </ul>
                <br></br>
                PUWI Health Wellness Centre, where holistic healing and modern
                luxury converge to elevate your well-being to new heights.
              </div>
              <br></br>
            </div>
            <div className="col-lg-6  ">
              <div
                className="servicesContent  pt-5 pb-5 px-4"
                style={{
                  fontSize: "18px",
                  borderRadius: "20px",
                  boxShadow: "0px 1px 10px #00800066",
                  backgroundColor: "cornsilk",
                }}
              >
                <div
                  className="pt-1 pb-2"
                  style={{
                    fontSize: "25px",
                    fontWeight: "700",
                    color: "#d55680",
                  }}
                >
                  Contact Us
                </div>

                <ul style={{ listStyle: "none" }}>
                  <li className="pb-3 pt-4 ">
                    <b style={{ color: "#009933" }}> Address: </b>
                  </li>
                  <li className="pb-2 ">
                    Number 2 Diorben Street, Adjacent Agric Quarters, Wuse Zone
                    4.
                  </li>

                  <li className="pb-3 pt-4 ">
                    <b style={{ color: "#009933" }}> whatsapp: </b>
                  </li>
                  <li className="pb-2 ">
                    {" "}
                    <a
                      href="https://wa.me/2348055261812"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "#d55680",
                      }}
                    >
                      +234-8055261812
                    </a>
                  </li>
                  <li className="pb-3 pt-4 ">
                    <b style={{ color: "#009933" }}>Working Time:</b>
                  </li>
                  <li className="pb-2 ">
                    {" "}
                    <b>Mondays to Fridays</b>{" "}
                    <span style={{ color: "#009933" }}>9:00 AM to 6:00 PM</span>
                  </li>
                  <li className="pb-2 ">
                    <b>Saturdays</b>{" "}
                    <span style={{ color: "#009933" }}>10:00AM to 6:00PM</span>
                  </li>
                  <li className="pb-2 ">
                    <b>Sundays:</b>{" "}
                    <span style={{ color: "#009933" }}>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Whychoose;
