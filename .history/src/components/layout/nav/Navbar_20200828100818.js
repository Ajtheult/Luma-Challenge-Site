import React from "react";
import Nav from "react-bootstrap/Nav";
import logo from "../resources/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <Nav className="" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">
            <img src={logo} alt="logo" className="logo" />
          </Nav.Link>
          <Nav.Link href="/home" className="justify-content-right">
            Active
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Nav className="justify-content-left bottom_nav" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="#" className="colour_of_nav_text">
            What's New
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="colour_of_nav_text">
            Women
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="colour_of_nav_text">
            Men
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="colour_of_nav_text">
            Gear
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="colour_of_nav_text">
            Training
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="colour_of_nav_text">
            Sale
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navbar;
