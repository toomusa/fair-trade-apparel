// highlight the requirements of the certification
// info from fair trade clothing and GS1 standards

import React, { Component } from 'react'
import { Container, Col, Row } from "reactstrap"
// import Container from '../partials/Container.js'
// import Column from '../partials/Column.js'
// import Row from '../partials/Row.js'

export default class Certification extends Component {
  render() {
    return (
      <div>
        <h1>Good Stewards Certification</h1>
        <p>The mission of Good Stewards is to provide a set of benchmarks in relation to sourcing, 
          production, storage, shipping, environmental impact, and worker conditions to incentivize 
          and encourage apparel companies to instill conscientious business practices. </p>
        <p>A detail charter with specific measures will be issued as a guideline to companies seeking 
          to earn the Good Stewards Certification. Its basic tenets include:</p>
        <Container>
          <Row>
            <Col md="4" sm="4">
              <ul>
                <h2>Materials</h2>
                <li>Finished Goods Manufacturer GTIN and GLN</li>
                <li>Supplier GTIN and GLN</li>
                <li>Materials used</li>
                <li>Component materials</li>
                <li>Chemicals and Treatments</li>
                <br></br>
                <h2>Process</h2>
                <li>Sourcing</li>
                <li>Quality Assurance</li>
                <li>Manufacturing</li>
                <li>Assembly</li>
                <li>Storage and Shipping</li>
                <br></br>
              </ul>
            </Col>
            <Col md="4" sm="4">
              <ul>
                <h2>Storage & Shipping</h2>
                <li>Packaging</li>
                <li>Extreme temperatures</li>
                <li>Pests and Infestation</li>
                <li>Cross-contamination</li>
                <li>Elemental protection</li>
                <h2>Environmental Impact</h2>
                <li>Waste Management</li>
                <li>Resource Management</li>
                <li>Carbon Threshold</li>
                <li>Flora and Fauna Impact</li>
                <li>Risk Assessment</li>
                <br></br>
              </ul>
            </Col>
            <Col md="4" sm="4">
              <ul>
                <h2>Worker Conditions</h2>
                <li>Hours & Wages</li>
                <li>Working Environment</li>
                <li>Working Tools</li>
                <li>Health & Safety</li>
                <li>Job Security</li>
                <br></br>
                <h2>Social Responsibility</h2>
                <li>Non-Discrimination</li>
                <li>Women’s Rights</li>
                <li>Fair Living Wages</li>
                <li>Forced Labor</li>
                <li>Financial Accountability</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
