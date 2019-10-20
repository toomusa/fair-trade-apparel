// consumer facing data from product scan

import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import CardDiv from "../partials/Card";

export default class Product extends Component {
  render() {
    return (
      <div>
        <h1>Products Page</h1>
        <Container>
          <Row>
            <Col md="4" sm="4">
              <CardDiv title="Nike" imgurl="" link="/products/1"/>
            </Col>
            <Col md="4" sm="4">
              <CardDiv title="Wal-Mart" imgurl="" />
            </Col>
            <Col md="4" sm="4">
              <CardDiv title="Adidas" imgurl="" />
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col md="4" sm="4">
              <CardDiv title="H&M" imgurl="" />
            </Col>
            <Col md="4" sm="4">
              <CardDiv title="Zara" imgurl="" />
            </Col>
            <Col md="4" sm="4">
              <CardDiv title="FashionNova" imgurl="" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
