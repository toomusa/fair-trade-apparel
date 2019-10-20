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
            <div className="center">
            <Checkbox label="Materials" />
            <Checkbox label="Processes" />
            <Checkbox label="Storage & Shipping" />
            </div>
          </Col>
          <Col md="4">
            <div className="product-item">
              <br></br>
              <img src={patagonia} alt="Patagonia" className="demo-img"/>
              <br></br>
              <h4>Patagonia Men's Performance Straight Fit Jeans - Regular</h4>
              <br></br>
              <img src={pants} alt="Men's Jeans" className="demo-img"/>
            </div>
          </Col>
          <Col md="4">
            <br></br><br></br>
            <br></br>
            <div className="center">
            <Checkbox label="Environmental Impact" />
            <Checkbox label="Working Conditions" />
            <Checkbox label="Social Responsibility" />
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
