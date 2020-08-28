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
    </div>
  );
};

export default Navbar;
