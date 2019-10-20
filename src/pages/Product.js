// consumer facing data from product scan

import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import CardDiv from "../partials/Card";

export default class Product extends Component {
  render() {
    return (
      <div>
        <h1>Products Page</h1>
        <br></br>
        <Container>
          <Row>
            <Col md="4" sm="4">
              <CardDiv
                title="Patagonia"
                imgurl="https://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw461f8d10/images/hi-res/56025_DDNM.jpg?sw=750&sh=750&sm=fit&sfrm=png"
                className="images"
                href="/example"
              />
            </Col>
            <Col md="4" sm="4">
              <CardDiv
                title="Wal-Mart"
                imgurl="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTpXkY3fe06VxDLXlw79F8MJCAk-2-oMtQ65YtvWPizzdxwMaCfn-s0XgCnPA&usqp=CAE"
                className="images"
              />
            </Col>
            <Col md="4" sm="4">
              <CardDiv
                title="Adidas"
                imgurl="https://scene7.zumiez.com/is/image/zumiez/pdp_hero/adidas-Originals-Roller-White-%26-Black-Crew-Socks-_266243.jpg"
              />
            </Col>
          </Row>
        </Container>
        <br></br>
        <Container>
          <Row>
            <Col md="4" sm="4">
              <CardDiv
                title="Zara"
                imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxGVZET51CaIMw5VTp4FuNuMP7vfdeyWfURLxQS3HgfArA-YMx"
              />
            </Col>
            <Col md="4" sm="4">
              <CardDiv
                title="H&M"
                imgurl="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTnNYYt3vzj9xkTzsMEStm2LkA5WVsrJFHeayH6_IFTlr6qY6mpJg5W5QQzYQ2O25Vs610p79pl&usqp=CAE"
              />
            </Col>
            <Col md="4" sm="4">
              <CardDiv
                title="FashionNova"
                imgurl="data:image/jpeg;base64,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"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
