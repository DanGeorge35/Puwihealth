import React, { Component } from "react";
import PropTypes from "prop-types";

class InfoCard extends Component {
  render() {
    const { title, img, content } = this.props;
    return (
      <div
        className="text-center shadow  "
        style={{
          padding: "30px",
          backgroundColor: "#fff",
          borderRadius: "40px",
          height: "100%",
        }}
      >
        <img src={img} style={{ height: "80px" }} />

        <br></br>
        <b className="  " style={{ color: "#d55680", fontSize: "20px" }}>
          {title}
        </b>
        <br></br>
        <br></br>
        <div className="fontFam2">{content}</div>
        <br></br>
      </div>
    );
  }
}

InfoCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default InfoCard;
