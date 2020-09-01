import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./HomeFooter.css";

const HomeFooter = () => {
  return (
    <div>
      <div className="footer">
        <Container>
          <Row>
            <Col>
              <p>
                Author: Hege Refsnes
                <br />
              </p>
            </Col>
            <Col>
              <p>
                Author: Hege Refsnes
                <br />
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-two">
        <p>
          Author: Hege Refsnes
          <br />
        </p>
      </div>
    </div>
  );
};

export default HomeFooter;
