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

      <div class="container">
         {" "}
        <img src="img_snow_wide.jpg" alt="Snow" style="width:100%;">
            <div class="bottom-left">Bottom Left</div>
          <div class="top-left">Top Left</div> {" "}
          <div class="top-right">Top Right</div> {" "}
          <div class="bottom-right">Bottom Right</div>
          <div class="centered">Centered</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
