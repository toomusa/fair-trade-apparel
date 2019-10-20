import React from "react"

export default function Navbar() {
  return(
    <div className="navbar">
      <div id="navtext">
        <a href="/" className="link">
          {window.location.pathname === "/"
            ? <span><strong>Home</strong></span>
            : <span>Home</span>}
        </a>
        <a href="/certification" className="link">
          {window.location.pathname === "/certification"
            ? <span><strong>Certification</strong></span>
            : <span>Certification</span>}
        </a>
        <a href="/explore" className="link">
          {window.location.pathname === "/explore"
            ? <span><strong>Explore</strong></span>
            : <span>Explore</span>}
        </a>
        <a href="/products" className="link">
          {window.location.pathname === "/products"
            ? <span><strong>Products</strong></span>
            : <span>Products</span>}
        </a>
      </div>
    </div>
  )
}