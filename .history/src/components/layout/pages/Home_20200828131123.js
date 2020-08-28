import React from "react";
import Navbar from "../nav/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
      </Container>
    </div>
  );
};

export default Home;
