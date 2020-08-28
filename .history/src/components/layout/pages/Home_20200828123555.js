import React from "react";
import Navbar from "../nav/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container fluid>
        <Row>
          <Col className="col_size">
            <img
              src="https://images.unsplash.com/photo-1559595500-e15296bdbb48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
              alt="meditation"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
