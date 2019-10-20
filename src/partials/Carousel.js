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
          className="d-block w-100"
          src="https://picsum.photos/500/700?random=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/500/700?random=2"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/500/700?random=3"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Row>
  );
}
