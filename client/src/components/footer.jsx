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
                <img src="logowhite.png" style={{ height: "110px" }} />
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
                +234-7037770063
                <br></br>
                <br></br>
                Contact us today to schedule an appointment and take the first
                step towards a healthier, and happier life.
              </div>
            </div>
            <div className="col-lg-3 col-12 " style={{ minHeight: "100px" }}>
              <label className="footerHead">Working Time</label>
              <div>
                Mon - Wed - 9:00 AM - 7:00 PM <br></br>
                Thursday - 9:00 AM - 6:30 PM
                <br></br>
                Friday - 9:00 AM - 6:00 PM
                <br></br>
                Sat - Sun - Closed
                <br></br>
                <br></br>
                E: hello@puwihealth.com
                <br></br>
                P: +234-7037770063
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
                P: +234-7037770063
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
          © 2023 PuwiHealth. All Rights Reserved
        </div>
      </div>
    );
  }
}

export default Footer;
