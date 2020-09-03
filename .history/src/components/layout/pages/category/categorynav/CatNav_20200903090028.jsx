import React from "react";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./CatNav.css";

const CatNav = () => {
  return (
    <div>
      <Nav className="justify-content-left" activeKey="/home">
        <Nav.Link href="/">
          <img
            src="https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="logo"
            className="logo_two"
          />
        </Nav.Link>
        <h6 className="logo-text_two">ULT</h6>
        <Nav.Link className="search_bar">
          {" "}
          <Form>
            <Form.Row>
              <Form.Group>
                <Form.Control
                  className="search_bar_two"
                  type="search"
                  placeholder="Search engine store here... "
                />
              </Form.Group>
            </Form.Row>
          </Form>
        </Nav.Link>
        <i class="fas fa-shopping-cart icon_two"></i>
      </Nav>
      <Nav className="justify-content-left bottom_nav_two" activeKey="/home">
        <Nav.Item>
          <Link to="/">
            <p className="make-space_two">What's New</p>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/products">
            <p className="make-space">Products</p>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/">
            <p className="make-space_two">Sale</p>
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default CatNav;
