import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Grid from "react-bootstrap/Grid";
import "./HomeFooter.css";

const HomeFooter = () => {
  return (
    <div>
      <div className="footer">
        <Grid>
          <Row>
            <Col>
              <p>
                Author: Hege Refsnes
                <br />
              </p>
            </Col>
          </Row>
        </Grid>
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
