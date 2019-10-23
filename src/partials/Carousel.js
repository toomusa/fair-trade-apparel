import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
// import Row from "react-bootstrap/Row";
// import Column from "../partials/Column";

export default function CarouselDiv() {
  return (
    <Row>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 images"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 images"
            src="data:image/png;base64,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"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 images"
            src="https://s3.r29static.com/bin/entry/8aa/0,0,2000,1050/x,80/2117282/image.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Row>
  );
}
