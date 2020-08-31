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
      <nav className="white">
        <div class="nav-wrapper">
          <ul>
            <li>
              <a href="#home" className="list_item">
                {" "}
                What's New
              </a>
            </li>
            <li>
              <a href="#home" className="list_item">
                {" "}
                Women
              </a>
            </li>
            <li>
              <a href="#home" className="list_item">
                {" "}
                Men
              </a>
            </li>
            <li>
              <a href="#home" className="list_item">
                {" "}
                Gear
              </a>
            </li>
            <li>
              <a href="#home" className="list_item">
                {" "}
                Training
              </a>
            </li>
            <li>
              <a href="#home" className="list_item">
                {" "}
                Sale
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
