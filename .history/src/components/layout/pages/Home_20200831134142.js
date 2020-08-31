import React from "react";
import Navbar from "../nav/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
// Images
import yoga from "../resources/yoga.jpg";
import yogatwo from "../resources/yoga-two.jpg";
import yogathree from "../resources/yoga-three.jpg";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container fluid>
        <Row>
          <Col>
            {/* Carousel */}
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 top_size"
                  src={yoga}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>New ULT yoga collection</h3>
                  <p>Clothing that is perfect for zen sessions</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 top_size"
                  src={yogatwo}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>New ULT yoga collection</h3>
                  <p>Beautiful bracelets to fit the look</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 top_size"
                  src={yogathree}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>New ULT yoga collection</h3>
                  <p>Be happy...like her...don't you wanna be happy?</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        {/* Block frame */}
        <Row>
          <Col>
            <div class="container bg-no-overlay">
              <div class="row left">
                <h1>
                  20% OFF <br /> ULT hoodies when you shop today*
                </h1>
              </div>
            </div>
          </Col>
          <Col>
            <div class="container bg-no-overlay-two">
              <div class="row top">
                <h1>Get them fresh kicks</h1>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div class="container bg-no-overlay-three">
              <div class="row text-center">
                <h1>This is a background image with NO overlay.</h1>
              </div>
            </div>
          </Col>
          <Col>
            <div class="container bg-no-overlay-four">
              <div class="row text-center">
                <h1>This is a background image with NO overlay.</h1>
              </div>
            </div>

            <div class="container bg-no-overlay-five">
              <div class="row text-center">
                <h1>This is a background image with NO overlay.</h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
