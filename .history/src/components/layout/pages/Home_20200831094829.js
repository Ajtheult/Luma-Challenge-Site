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
            {/* Carousel */}
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 top_size"
                  src={yoga}
                  alt="First slide"
                />
                <Carousel.Caption className="carousel-caption-one">
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 top_size"
                  src={shoe}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 top_size"
                  src={forest}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
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
    </div>
  );
};

export default Home;
