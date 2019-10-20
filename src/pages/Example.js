import React, { Component } from 'react'
import { Container, Col, Row } from "react-bootstrap"
import pants from "../assets/images/pants.jpg"
import patagonia from "../assets/images/logo.png"
import Checkbox from '../partials/Checkbox'

export default class Example extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="4">
            <br></br><br></br>
            <br></br>
            <Checkbox label="Sourced Materials" />
          </Col>
          <Col md="4">
            <div className="product-item">
              <img src={patagonia} alt="Patagonia" className="demo-img"/>
              <h4>Patagonia Men's Performance Straight Fit Jeans - Regular</h4>
              <img src={pants} alt="Men's Jeans" className="demo-img"/>
            </div>
          </Col>
          <Col md="4">

          </Col>
        </Row>
      </Container>
    )
  }
}
