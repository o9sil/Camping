import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function JSTitle() {
    return (
      <>
        <div className="section">
          <Container className="text-center">
            <Row className="justify-content-md-center">
              <Col lg="8" md="12">
                <h2 className="title">JS Projects Start</h2>
                <h5 className="description">
                  숙소 검색 프로젝트입니다.
                </h5>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
  
  export default JSTitle;
  