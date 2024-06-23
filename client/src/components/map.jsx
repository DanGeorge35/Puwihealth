import React, { Component } from "react";

class Map extends Component {
  render() {
    return (
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.989441947866!2d7.473771874232857!3d9.064725490998029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b9340a296c9%3A0x1eb7e6a670a526d!2sPrime%20Unique%20Women%20Initiative!5e0!3m2!1sen!2sng!4v1719117560074!5m2!1sen!2sng"
          style={{
            width: "100%",
            height: "350px",
            borderLeft: "0px",
            borderRight: "0px",
            borderTop: "4px solid #ddd",
            borderBottom: "4px solid #ddd",
          }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    );
  }
}

export default Map;
