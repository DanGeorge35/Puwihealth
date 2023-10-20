import React, { Component } from "react";
import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";
import InfoCard from "../components/InfoCard";
import JoinPortal from "../components/JoinPortal";
import About from "../components/about";
import Services from "../components/services";
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <About />
        <div className=" ext2  ">
          <div className="location pt-5 pb-4 aboutInfo  ">
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
        <Services />

        <JoinPortal />
        <Footer />
      </div>
    );
  }
}

export default Home;
