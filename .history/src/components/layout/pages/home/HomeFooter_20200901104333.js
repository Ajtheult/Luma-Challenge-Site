import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./HomeFooter.css";

const HomeFooter = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
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
            <Col></Col>
          </Row>
        </div>
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
