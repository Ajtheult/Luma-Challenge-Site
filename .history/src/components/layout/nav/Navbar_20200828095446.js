import React from "react";
import Nav from "react-bootstrap/Nav";

const Navbar = () => {
  return (
    <div>
      <Nav className="" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
      </Nav>
      <Nav className="justify-content-left" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="#">What's New</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Women</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Men</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Gear</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Training</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Sale</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navbar;
