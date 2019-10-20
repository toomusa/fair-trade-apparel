
import React, { Component } from 'react'
import Webcam from "../partials/Webcam.js"

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <div className="scanner-box">
          <Webcam />
        </div>
      </div>
    )
  }
}
