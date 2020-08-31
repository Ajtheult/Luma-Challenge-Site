import React from "react";
import Nav from "react-bootstrap/Nav";
import logo from "../resources/logo.png";
import Form from "react-bootstrap/Form";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <Nav className="justify-content-left" activeKey="/home">
        <Nav.Link href="/home">
          <img src={logo} alt="logo" className="logo" />
        </Nav.Link>
        <Nav.Link className="search_bar">
          {" "}
          <Form>
            <Form.Row>
              <Form.Group>
                <Form.Control
                  className="search_bar"
                  type="search"
                  placeholder="Search engine store here... "
                />
              </Form.Group>
            </Form.Row>
          </Form>
        </Nav.Link>
        <Nav.Link></Nav.Link>
        <i class="fas fa-shopping-cart"></i>
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
