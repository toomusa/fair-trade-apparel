import React from "react";
import { Card, Button } from "react-bootstrap";

const CardDiv = props => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.imgurl} className="images"/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>Good Steward Certified</Card.Text>
        <Button variant="warning"><a href={props.href ? props.href : "#"} className="linko">Go To {props.title}</a></Button>
      </Card.Body>
    </Card>
  );
};

export default CardDiv;
