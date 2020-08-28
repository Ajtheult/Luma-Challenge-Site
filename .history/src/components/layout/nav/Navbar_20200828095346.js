import React from "react";
import Nav from "react-bootstrap/Nav";

const Navbar = () => {
  return (
    <div>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
      </Nav>
      <Nav className="justify-content-left" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">What's New</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Women</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Men</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Gear</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Training</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Sale</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navbar;
