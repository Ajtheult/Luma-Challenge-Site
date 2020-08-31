import React from "react";
import Nav from "react-bootstrap/Nav";
import logo from "../resources/logo.png";
import Form from "react-bootstrap/Form";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="white">
        <div class="nav-wrapper">
          <a href="#home">
            {" "}
            <img src={logo} alt="logo" className="logo" />
          </a>
          <ul id="nav-mobile" class="right">
            <li>
              <a href="sass.html" className="list_item">
                Sass
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav>
        <div class="nav-wrapper">
          <ul class="left second_nav">
            <li>
              <a href="#home"> What's New</a>
            </li>
            <li>
              <a href="#home"> Women</a>
            </li>
            <li>
              <a href="#home"> Men</a>
            </li>
            <li>
              <a href="#home"> Gear</a>
            </li>
            <li>
              <a href="#home"> Training</a>
            </li>
            <li>
              <a href="#home"> Sale</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
