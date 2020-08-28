import React from "react";
import Navbar from "../nav/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import shoe from "../resources/shoe.jpg";
import hoodie from "../resources/hoodie.jpg";
import beach from "../resources/beach.jpg";
import garden from "../resources/garden.jpg";
import forest from "../resources/forest.jpg";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container fluid>
        <Row>
          <Col>
            <img
              src="https://images.unsplash.com/photo-1529693662653-9d480530a697?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"
              alt="meditation"
              className="top_size"
            />
            <div className="hoodie_text"></div>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src="https://images.unsplash.com/photo-1542406775-ade58c52d2e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
              alt="hoodie"
              className="hoodie_size"
            />
          </Col>
          <Col>
            <img
              src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
              alt="hoodie"
              className="clothing_size"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src="https://images.unsplash.com/photo-1494291314655-08fcd1f46cda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt="hoodie"
              className="middle_size"
            />
          </Col>
          <Col>
            <img
              src="https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
              alt="hoodie"
              className="right_size"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="hoodie"
              className="bottom_size"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
