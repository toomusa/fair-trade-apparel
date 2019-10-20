import React from "react";
import { Card, Button } from 'react-bootstrap';

const CardDiv = props => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.imgurl} ClassName="images" />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        Good Steward Certified
      </Card.Text>
      <Button variant="primary">Go To {props.title} Page</Button>
    </Card.Body>
  </Card>
  );
};

export default CardDiv;
