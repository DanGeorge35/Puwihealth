import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

class Navs extends Component {
  render() {
    return (
      <div className="">
        <nav
          className="navbar navbar-expand-lg  border-2 border-warning fixed-top p-1"
          style={{ backgroundColor: "#ffff", boxShadow: "0px 0px 5px #999" }}
        >
          <div className="container" style={{ height: "73px", width: "100vw" }}>
            <a
              className="navbar-brand p-0 "
              href="#"
              style={{ outline: "none" }}
            >
              <img
                src="/logogreen.png"
                alt="PuwiHealth"
                style={{ height: "55px" }}
              />
            </a>

            <div
              className="navbar-collapse  collapse d-none d-none-md d-block-lg"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li
                  className="nav-item"
                  style={{ paddingLeft: "80px", paddingTop: "30px" }}
                ></li>
                <li className="nav-item">
                  <NavLink to="/" className="nav-link  " aria-current="page">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className="nav-link  "
                    aria-current="page"
                  >
                    About
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/services"
                    className="nav-link  "
                    aria-current="page"
                  >
                    Our Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className="nav-link  "
                    aria-current="page"
                  >
                    Contact Us
                  </NavLink>
                </li>

                <li className="nav-item">
                  <a
                    href="https://puwihealth.medium.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link  "
                    aria-current="page"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <a
              href="/contact"
              className="btn btn-outline-success   py-2 px-3  d-flex  d-md-none d-none  d-lg-block"
              style={{ minWidth: "150px" }}
            >
              Make Appointment
            </a>

            <span
              className="navbar-toggler   d-block d-lg-none border-0 "
              onClick={this.props.toggleSideMenu}
            >
              <span className="material-symbols-outlined ">menu</span>
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

Navs.propTypes = {
  toggleSideMenu: PropTypes.func.isRequired, // Make sure it's a function and required
};

export default Navs;
