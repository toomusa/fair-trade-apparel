// highlight brands, trends, consumer ratings

import React, { Component } from "react";
import Carousel from "../partials/Carousel.js";
import Row from "react-bootstrap/Row";
import { Container, Col } from "react-bootstrap";

export default class Explorer extends Component {
  render() {
    return (
      <div>
        <h1>Explore Page</h1>

        <Container>
          <Row>
            <Col md={4} sm={4}>
              <h2>Top 5 Companies Lists</h2>
              <h3>1. Materials</h3>
              <h3>2. Processs</h3>
              <h3>3. Environmental Impact</h3>
              <h3>4. Storage and Shipping</h3>
              <h3>4. Environmentally Conscious</h3>
              <h3>5. Worker Conditions</h3>
              <h3>6. Social Responsibility</h3>
            </Col>
            <Col md={4} sm={4}>
              <Carousel />
            </Col>
            <Col md={4} sm={4}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
