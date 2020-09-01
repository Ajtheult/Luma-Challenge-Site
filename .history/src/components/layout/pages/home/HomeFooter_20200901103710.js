import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
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
