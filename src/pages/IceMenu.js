import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const IceMenu = () => (
  <Card id="icecreamrolls">
    <Card className="category">
      <Card.Body className="title">Rolled  Ice Cream</Card.Body>
      <Card.Body className="price">$6.99</Card.Body>
    </Card>
      <Row>
        <Col xs={12}>
          <Card className="">
            <Card.Body className="menu-title">ROLLED ICE</Card.Body>
            <Card.Body className="menu-description">ROLLED ICE</Card.Body>
          </Card>
        </Col>
      </Row>
  </Card>
);

export default IceMenu;