import React, { Component } from "react";
import Map from "./map";

class ContactQr extends Component {
  render() {
    return (
      <div className="services p-0">
        <div className="pt-3 servicesInfo pe-3 px-3 container">
          <div className="text-center pt-4"></div>
          <div className="row  pt-4 pb-5">
            <div className="col-lg-6">
              <div
                className="servicesContent pb-4"
                style={{ fontSize: "18px" }}
              >
                <b className="text-black fontFam1">CONTACT PUWIHEALTH</b>
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
                  <img
                    src="/qrcode.png"
                    style={{
                      width: "300px",
                      border: "5px solid rgb(34 154 52)",
                    }}
                  />{" "}
                </a>
              </div>
              <br></br>
            </div>
            <div className="col-lg-6  ">
              <div
                className="servicesContent  pt-3 pb-3 px-4"
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
        <Map />
      </div>
    );
  }
}

export default ContactQr;
