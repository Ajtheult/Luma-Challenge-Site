import React from "react";
import Navbar from "../nav/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
// Images
import yoga from "../resources/yoga.jpg";
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
            <img src={yoga} alt="meditation" className="top_size" />
            <div className="hoodie_text"></div>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={hoodie} alt="hoodie" className="hoodie_size" />
          </Col>
          <Col>
            <img src={shoe} alt="shoe" className="clothing_size" />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={beach} alt="beach" className="middle_size" />
          </Col>
          <Col>
            <img src={garden} alt="hoodie" className="right_size" />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={forest} alt="hoodie" className="bottom_size" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
