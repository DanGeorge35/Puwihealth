import React, { Component } from "react";
import Map from "./map";

class Whymedicine extends Component {
  render() {
    return (
      <div className="services ">
        <div className="pt-5  pb-5 servicesInfo pe-3 px-3 container">
          <div className="text-center pt-5  pb-5"></div>
          <div className="text-center">
            <b
              className=" fontFam1"
              style={{
                fontWeight: "700",
                color: "#d55680",
              }}
            >
              WHY CHOOSE{" "}
            </b>
            <div
              className="pt-1 pb-2"
              style={{
                fontSize: "30px",
                fontWeight: "700",
                color: "#009933",
              }}
            >
              Naturopathic Medicine
            </div>
            <br />
          </div>

          <div className="row pt-4 pb-5">
            <div className="col-lg-6 ">
              <div
                className="bgimg"
                style={{
                  backgroundImage: "url(herb.png)",
                  height: "90%",
                  width: "100%",
                }}
              ></div>
            </div>
            <div className="col-lg-6 ">
              <div className="servicesContent" style={{ fontSize: "18px" }}>
                <ul>
                  <li className="">
                    It is safer and without adverse side effects.{" "}
                  </li>

                  <li className="pt-3">
                    Naturopathy works with the body to restore its vital life
                    force and not against it. It also provides an enabling
                    environment for the body to heal itself.
                  </li>

                  <li className="pt-3">
                    Naturopathy has the answers to most health challenges and
                    that is why it is now making a strong come back in our world
                    today.
                  </li>

                  <li className="pt-3">
                    We do not suppress symptoms but restore the body back to
                    health by finding the root cause and removing it.
                  </li>

                  <li className="pt-3">
                    We use non-invasive procedures and follow the first
                    principle of Natural Medicine “Do No Harm”.
                  </li>

                  <li className="pt-3">
                    We are best in handling chronic diseases because they are
                    caused by wrong lifestyle and diet.
                  </li>

                  <li className="pt-3">
                    The impact of our treatment is long lasting (lifelong) even
                    after stopping our herbs.
                  </li>
                </ul>
              </div>
            </div>

            <div className=" col-lg-8 offset-lg-2 text-center pt-5">
              <b
                className=" fontFam1"
                style={{
                  fontWeight: "700",
                  color: "#d55680",
                  fontSize: "25px",
                }}
              >
                VISIT US TODAY
              </b>
              <br />
              <span
                style={{
                  fontSize: "17px",
                }}
              >
                And experience the difference for yourself Your path to wellness
                starts here, at PUWI Health Wellness Centre in Abuja.{" "}
              </span>
              <br /> <br />
              <b
                style={{
                  fontSize: "20px",
                }}
              >
                2 Diorben Street, Adjacent Agric Quarters, Wuse Zone 4.
              </b>
            </div>
          </div>
        </div>
        <Map />
      </div>
    );
  }
}

export default Whymedicine;
