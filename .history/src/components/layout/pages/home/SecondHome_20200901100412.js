import React from "react";
import "./SecondHome.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// images
import one from "../../resources/SecondHome/one.jpg";
import two from "../../resources/SecondHome/two.jpg";
import three from "../../resources/SecondHome/three.jpg";
import four from "../../resources/SecondHome/four.jpg";
import five from "../../resources/SecondHome/five.jpg";
import six from "../../resources/SecondHome/six.jpg";
import seven from "../../resources/SecondHome/seven.jpg";

const SecondHome = () => {
  return (
    <div>
      <div>
        <h1 className="heading">Hot Sellers</h1>
        <h6>Here is what's trending on ULT right now</h6>
      </div>
      <div className="cards">
        <Row>
          {/* 1 */}
          <Col>
            <Card style={{ width: "14rem" }}>
              <img
                variant="top"
                src={one}
                className="image-heights"
                alt="one"
              />

              <Card.Body>
                <Card.Title>Orange Hoodie Plain</Card.Title>
                <Card.Text>R600</Card.Text>
                <button className="buttons">Add to cart</button>
                <i class="fas fa-heart heart-icon-card"></i>
                <i class="far fa-chart-bar"></i>
              </Card.Body>
            </Card>
          </Col>
          {/* 2 */}
          <Col>
            <Card style={{ width: "14rem" }}>
              <img
                variant="top"
                src={two}
                className="image-heights"
                alt="two"
              />
              <Card.Body>
                <Card.Title>Orange Hoodie (text)</Card.Title>
                <Card.Text>R650</Card.Text>
                <button className="buttons">Add to cart</button>
                <i class="fas fa-heart heart-icon-card"></i>
                <i class="far fa-chart-bar"></i>
              </Card.Body>
            </Card>
          </Col>
          {/* 3 */}
          <Col>
            <Card style={{ width: "14rem" }}>
              <img
                variant="top"
                src={three}
                className="image-heights"
                alt="three"
              />
              <Card.Body>
                <Card.Title>Black Hoodie (Female)</Card.Title>
                <Card.Text>R450</Card.Text>
                <button className="buttons">Add to cart</button>
                <i class="fas fa-heart heart-icon-card"></i>
                <i class="far fa-chart-bar"></i>
              </Card.Body>
            </Card>
          </Col>
          {/* 4 */}
          <Col>
            <Card style={{ width: "14rem" }}>
              <img
                variant="top"
                src={four}
                className="image-heights"
                alt="four"
              />
              <Card.Body>
                <Card.Title>Black Hoodie (Male)</Card.Title>
                <Card.Text>R460</Card.Text>
                <button className="buttons">Add to cart</button>
                <i class="fas fa-heart heart-icon-card"></i>
                <i class="far fa-chart-bar"></i>
              </Card.Body>
            </Card>
          </Col>
          {/* 5 */}
          <Col>
            <Card style={{ width: "14rem" }}>
              <img
                variant="top"
                src={five}
                className="image-heights"
                alt="five"
              />
              <Card.Body>
                <Card.Title>Minimalist Necklace (Female)</Card.Title>
                <Card.Text>R300</Card.Text>
                <button className="buttons">Add to cart</button>
                <i class="fas fa-heart heart-icon-card"></i>
                <i class="far fa-chart-bar"></i>
              </Card.Body>
            </Card>
          </Col>
          {/* 6 */}
          <Col>
            <Card style={{ width: "14rem" }}>
              <img
                variant="top"
                src={six}
                className="image-heights"
                alt="six"
              />
              <Card.Body>
                <Card.Title>Ruby Necklace (Female)</Card.Title>
                <Card.Text>R340</Card.Text>
                <button className="buttons">Add to cart</button>
                <i class="fas fa-heart heart-icon-card"></i>
                <i class="far fa-chart-bar"></i>
              </Card.Body>
            </Card>
          </Col>
          {/* 7 */}
          <Col>
            <Card style={{ width: "14rem" }}>
              <img
                variant="top"
                src={seven}
                className="image-heights"
                alt="seven"
              />
              <Card.Body>
                <Card.Title>Ring Necklace (Male)</Card.Title>
                <Card.Text>R290</Card.Text>
                <button className="buttons">Add to cart</button>
                <i class="fas fa-heart heart-icon-card"></i>
                <i class="far fa-chart-bar"></i>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </div>
    </div>
  );
};

export default SecondHome;
