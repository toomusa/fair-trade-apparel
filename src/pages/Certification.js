// highlight the requirements of the certification
// info from fair trade clothing and GS1 standards

import React, { Component } from 'react'
import { Container, Col, Row } from "react-bootstrap"
// import Container from '../partials/Container.js'
// import Column from '../partials/Column.js'
// import Row from '../partials/Row.js'

export default class Certification extends Component {
  render() {
    return (
      <div>
        <br></br>
        <h1>Good Stewards Certificate</h1>
        <br></br>
        <p className="cent">The mission of Good Stewards is to provide a set of benchmarks in relation to sourcing, 
          production, storage, shipping, environmental impact, and worker conditions to incentivize 
          and encourage apparel companies to instill conscientious business practices. </p>
        <p className="cent">A detail charter with specific measures will be issued as a guideline to companies seeking 
          to earn the Good Stewards Certification. Its basic components include:</p>
        <br></br>
        <Container>
          <Row>
            <Col md="4" sm="4">
              <ul>
                <h3>Materials & Components</h3>
                <li>Finished Goods</li>
                <li>Supplier GTIN and GLN</li>
                <li>Materials Used</li>
                <li>Component Materials</li>
                <li>Chemicals and Treatments</li>
                <br></br>
                <h3>Process & Production</h3>
                <li>Sourcing</li>
                <li>Quality Assurance</li>
                <li>Manufacturing</li>
                <li>Assembly</li>
                <li>Miles Traveled</li>
                <br></br>
              </ul>
            </Col>
            <Col md="4" sm="4">
              <ul>
                <h3>Storage & Shipping</h3>
                <li>Packaging</li>
                <li>Extreme Temperatures</li>
                <li>Pests and Infestation</li>
                <li>Cross-contamination</li>
                <li>Elemental Protection</li>
                <br></br>
                <h3>Environmental Impact</h3>
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
                <h3>Worker Conditions</h3>
                <li>Hours & Wages</li>
                <li>Working Environment</li>
                <li>Working Tools</li>
                <li>Health & Safety</li>
                <li>Job Security</li>
                <br></br>
                <h3>Social Responsibility</h3>
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
