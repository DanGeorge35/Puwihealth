import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

class Reservation extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="about-page ">
          <div className="d-flex   align-items-center justify-content-center">
            <h1>SERVICES & PRODUCTS</h1>
          </div>
        </div>

        <div className="about">
          <div className="pt-5 pb-5 aboutInfo pe-3 px-3 container">
            <div className="text-center pt-5">
              <b className=" fontFam1" style={{ color: "#d55680" }}></b>
              <div
                className="pt-1 pb-2"
                style={{
                  fontSize: "30px",
                  fontWeight: "700",
                  color: "#009933",
                }}
              >
                Noni Berry Enzyme (N25,000)
              </div>
            </div>
            <div className="row pb-5">
              <div className="col-lg-12 text-center">
                <img src="/noniberry.jpg" style={{ width: "80%" }} />
              </div>
              <div className="col-lg-12 pt-4">
                <div
                  className="aboutContent text-dark"
                  style={{ fontSize: "18px" }}
                >
                  <b style={{ fontSize: "30px" }}>T</b>he high levels of
                  ASPERULOSIDE content in NONI BERRY ENZYME help promote the
                  overall health of the veins by repairing damaged protein
                  structures in the blood vessel walls, it also dilate and
                  soften blood vessels to make blood flow smoothly.
                  <br />
                  <br />
                  <b>HOW DOES NONI FIGHT AGAINST CARDIOVASCULAR DISEASES?</b>
                  <br />
                  Noni fruit contains 7-hydroxy-6-methoxycoumarin, sterols, both
                  function as nitric oxide, which can effectively prevent
                  cardiovascular disease 7-hydroxy-6-methoxycoumarin can dilate
                  blood vessels and reduce blood pressure. <br />
                  <br />
                  As early as 1995, a Vietnamese pharmacologist used the extract
                  of Noni root as an antihypertensive drug. Meanwhile, magnesium
                  contained in it can regulate the heart rhythm. All kinds of
                  anti-oxidants in Noni can also effectively relieve the
                  discomfort caused by cardiovascular disorder. <br />
                  <br />
                  Varicose veins are swollen, twisted veins that often appear
                  blue or dark purple in colour. They typically develop when
                  blood flow is obstructed, and the blood cannot flow as
                  effectively. It usually affects the legs, feet, and other
                  parts of the body. <br />
                  <br />
                  Symptoms of Varicose veins include:
                  <br />
                  <ul>
                    <li>Aching legs</li>
                    <li>Swollen ankles</li>
                    <li>
                      A shiny skin discolouration near the varicose veins.
                    </li>
                    <li>A feeling of heavy legs.</li>
                    <li>
                      A minor injury to the affected area possibly resulting in
                      longer bleeding than normal.
                    </li>
                    <li>Leg cramps when suddenly standing up.</li>
                    <li>Affected areas look reddish, dry, and itchy.</li>
                  </ul>
                  This disease can be prevented with LILONG NONI BERRY ENZYME.
                  The high levels of ASPERULOSIDE content in NONI BERRY ENZYME
                  help promote the overall health of the veins by repairing
                  damaged protein structures in the blood vessel walls, it also
                  dilates and soften blood vessels to make blood flow smoothly.
                  <br />
                  <br />
                  <b>EFFECTS OF NONI ON ORAL DISEASES</b>
                  <br />
                  Dental caries are major worldwide health concern due to a lack
                  of preventive efforts and dietary changes. <br />
                  <br />
                  Morinda citrifolia, popularly known as NONI, has been an
                  important medicinal plant for many centuries throughout the
                  South Pacific and has been used to cure oral diseases.
                  <br />
                  <br /> Noni is a small shrub and its potential therapeutic
                  effect remains vastly unknown.
                  <br /> This fruit contains Xeronine, which can directly
                  penetrate into the tissue through the skin or oral mucosa. It
                  plays the functions of sterilization, pain relief and cell
                  activation. <br />
                  It also helps in preventing angular stomatitis and
                  periodontitis.
                  <br></br>
                </div>
                <br></br>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Reservation;
