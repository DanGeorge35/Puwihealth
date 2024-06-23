import React, { Component } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
class Footer extends Component {
  render() {
    return (
      <div className="footer ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 " style={{ minHeight: "100px" }}>
              <div className="">
                <img src="/logowhite.png" style={{ height: "110px" }} />
                <label
                  className=" fontFam3"
                  style={{
                    fontWeight: "600",
                    marginBottom: "30px",
                    color: "#fff",
                    fontSize: "18px",
                  }}
                >
                  To promote and administer natural, beneficial remedies that
                  contribute to the overall wellness of our patients.
                </label>
              </div>
            </div>
            <div className="col-lg-3 col-12 " style={{ minHeight: "100px" }}>
              <label className="footerHead">Emergency Cases</label>
              <div>
                <a
                  href="https://wa.me/2348055261812"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#009933",
                  }}
                >
                  +234-8055261812
                </a>
                <br></br>
                <br></br>
                Contact us today to schedule an appointment and take the first
                step towards a healthier, and happier life.
              </div>
            </div>
            <div className="col-lg-3 col-12 " style={{ minHeight: "100px" }}>
              <label className="footerHead">Working Time</label>
              <div>
                Mon - Fri
                <b
                  style={{
                    color: "#009933",
                  }}
                >
                  {" "}
                  9:00 AM - 6:00 PM{" "}
                </b>
                <br /> <br />
                Saturday{"      "}
                <b
                  style={{
                    color: "#009933",
                  }}
                >
                  10:00 AM - 6:00 PM
                </b>
                <br /> <br />
                Sunday -{" "}
                <b
                  style={{
                    color: "red",
                  }}
                >
                  Closed
                </b>
                <br></br>
                <br></br>
                E: hello@puwihealth.com
                <br></br>
                P:{" "}
                <a
                  href="https://wa.me/2348055261812"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#009933",
                  }}
                >
                  +234-8055261812
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-12 " style={{ minHeight: "100px" }}>
              <label className="footerHead">Our Location</label>
              <div>
                No 2 Diorben Street, Adjacent Agric Quarters Wuse Zone 4, Abuja.
                <br></br>
                <br></br>
                E: hello@puwihealth.com
                <br></br>
                P:{" "}
                <a
                  href="https://wa.me/2348055261812"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#009933",
                  }}
                >
                  +234-8055261812
                </a>
                <p style={{ paddingTop: "10px" }}></p>
                <a className="footerIcon" href="">
                  <InstagramIcon />
                </a>
                <a className="footerIcon" href="">
                  <TelegramIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomFooter">
          © 2024 PuwiHealth. All Rights Reserved
        </div>
      </div>
    );
  }
}

export default Footer;
