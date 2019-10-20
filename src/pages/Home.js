
import React, { Component } from 'react'
import Webcam from "../partials/Webcam.js"

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <div className="scanner-box">
          <Webcam />
          <p>Apparel is the 2nd most polluting industry after energy. 
            Goods are shipped around the world multiple times for assembly, 
            which contributes significantly to waste and carbon footprint. 
            We want to inspire companies to instill transparency, traceability, 
            and environmentally and socially conscientious practices to become 
            Good Stewards and exemplary leaders of the industry.</p>

          <p>The mission of Good Stewards is to provide a set of benchmarks in 
            relation to environmental impact, worker conditions, and social 
            responsibility to incentivize apparel companies to instill good 
            business practices. A certification and specially branded label 
            will be issued to companies to attach to apparel, which can be used 
            by consumers to learn more about the company and the lifecycle of the item.</p>
        </div>
      </div>
    )
  }
}
