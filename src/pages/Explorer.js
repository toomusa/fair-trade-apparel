// highlight brands, trends, consumer ratings

import React, { Component } from "react";
import Carousel from "../partials/Carousel.js";
import Row from "react-bootstrap/Row";
import { Container, Col, InputGroup, FormControl } from "react-bootstrap";

export default class Explorer extends Component {
  render() {
    return (
      <div>
        <br></br>
        <h1>Top Performing Brands</h1>
        <br></br>
        <Container>
          <Row>
            <Col md={4} sm={4}>
              <ul>
                <h2>Top 5 Companies lists</h2>
                <li>1. Materials</li>
                <li>2. Processs</li>
                <li>3. Storage and Shipping</li>
                <li>4. Environmental Impact</li>
                <li>5. Worker Conditions</li>
                <li>6. Social Responsibility</li>
              </ul>
            </Col>
            <Col md={4} sm={4}>
              <Carousel />
            </Col>
            <Col md={4} sm={4}>
              <ul>
                <h2>Top 5 Products lists</h2>
                <li>1. Materials</li>
                <li>2. Processs</li>
                <li>3. Storage and Shipping</li>
                <li>4. Environmental Impact</li>
                <li>5. Worker Conditions</li>
                <li>6. Social Responsibility</li>
              </ul>
            </Col>
          </Row>
          <br></br>
          <Row>
            <h2>Search by Company/Product</h2>
          </Row>
          <Row>
            <div>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-default">
                    Search
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}
