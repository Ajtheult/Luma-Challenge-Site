import React from "react";
import "./SecondHome.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
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
        <Container>
          <Row>
            {/* 1 */}
            <Col>
              <Card className="card-style">
                <img
                  variant="top"
                  src={one}
                  className="image-heights"
                  alt="one"
                />

                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            {/* 2 */}
            <Col>
              <Card className="card-style">
                <img
                  variant="top"
                  src={two}
                  className="image-heights"
                  alt="two"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            {/* 3 */}
            <Col>
              <Card className="card-style">
                <img
                  variant="top"
                  src={three}
                  className="image-heights"
                  alt="three"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            {/* 4 */}
            <Col>
              <Card className="card-style">
                <img
                  variant="top"
                  src={four}
                  className="image-heights"
                  alt="four"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            {/* 5 */}
            <Col>
              <Card className="card-style">
                <img
                  variant="top"
                  src={five}
                  className="image-heights"
                  alt="five"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            {/* 6 */}
            <Row className="second-row">
              <Col>
                <Card className="card-style">
                  <img
                    variant="top"
                    src={six}
                    className="image-heights"
                    alt="six"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              {/* 7 */}
              <Col>
                <Card style={{ width: "12rem" }}>
                  <img
                    variant="top"
                    src={seven}
                    className="image-heights"
                    alt="seven"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SecondHome;
