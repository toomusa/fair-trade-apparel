
import React, { Component } from 'react'
import Webcam from "../partials/Webcam.js"
import HowItWorks from "../assets/images/howitworks.png"
// import { Button } from "react-bootstrap"

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="scanner-box">
          <br></br>
          <div className="jumbotron" id="banner">
            <Webcam />
          </div>
          <p>Apparel is the 2nd most polluting industry after energy. 
            Goods are shipped around the world multiple times for assembly, 
            which contributes significantly to waste and carbon footprint. 
            We want to inspire companies to instill transparency, traceability, 
            and environmentally and socially conscientious practices to become 
            Good Stewards and exemplary leaders of the industry.</p>

          <p>The mission of <strong>Good Stewards</strong> is to provide a set of benchmarks in 
            relation to environmental impact, worker conditions, and social 
            responsibility to incentivize apparel companies to instill good 
            business practices. A certification and specially branded label 
            will be issued to companies to attach to apparel, which can be used 
            by consumers to learn more about the company and the lifecycle of the item.</p>

          <br></br>
          <img src={HowItWorks} alt="How It Works" id="howitworks" />
          <br></br>
          <br></br>

          {/* <Button variant="primary" size="lg">
            <a href="/certification">Learn more about the Certification</a>
          </Button>
          <Button variant="primary" size="lg">
            <a href="/explore">Explore brands and products</a>
          </Button> */}
        </div>
      </div>
    )
  }
}
