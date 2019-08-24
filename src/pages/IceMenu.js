import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const IceMenu = () => (
  <Card id="icecreamrolls">
    <Card className="category">
      <Card.Body className="title pacifico center">Rolled  Ice Cream</Card.Body>
      <Card.Body className="price pacifico center">$6.99</Card.Body>
    </Card>
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body className="menu-title montserrat center">STEP 1</Card.Body>
            <Card.Body className="menu-description montserrat center">CHOOSE A FLAVOR LISTED BELOW</Card.Body>
            <Card.Body className="menu-title montserrat center">STEP 2</Card.Body>
            <Card.Body className="menu-description montserrat center">CHOOSE 3 TASTY TOPPINGS AFTER YOUR ICE CREAM IS MADE</Card.Body>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <Card.Body className="menu-title montserrat center">Strawbella</Card.Body>
            <Card.Body className="menu-description montserrat center">Strawberry, Graham Cracker & Nutella</Card.Body>
            
            <Card.Body className="menu-title montserrat center">Green Giant</Card.Body>
            <Card.Body className="menu-description montserrat center">Green Tea Base, Lychee & Condensed Milk</Card.Body>
            
            <Card.Body className="menu-title montserrat center">Cookie Monster</Card.Body>
            <Card.Body className="menu-description montserrat center">Oreo Cookie & Chocolate Sauce</Card.Body>
            
            <Card.Body className="menu-title montserrat center">Monkey Business</Card.Body>
            <Card.Body className="menu-description montserrat center">Banana, Graham Cracker, Nutella & Chocolate Sauce</Card.Body>
            
            <Card.Body className="menu-title montserrat center">Cookie Dough</Card.Body>
            <Card.Body className="menu-description montserrat center">Cookie Dough & Caramel Sauce</Card.Body>

            <Card.Body className="menu-title montserrat center">Mucho Mango</Card.Body>
            <Card.Body className="menu-description montserrat center">Strawberry, Mango & Condensed Milk</Card.Body>

            <Card.Body className="menu-title montserrat center">Mint To Be</Card.Body>
            <Card.Body className="menu-description montserrat center">Mint Oreo & Chocolate Sauce</Card.Body>

            <Card.Body className="menu-title montserrat center">Shockers Brownie</Card.Body>
            <Card.Body className="menu-description montserrat center">Chocolate Milk Base, Brownie & Chocolate Sauce</Card.Body>

            <Card.Body className="menu-title montserrat center">Pink Lady</Card.Body>
            <Card.Body className="menu-description montserrat center">Strawberry, Graham Crackers & Condensed Milk</Card.Body>

            <Card.Body className="menu-title montserrat center">Whole Latte Love</Card.Body>
            <Card.Body className="menu-description montserrat center">Coffee Base, Biscoff Cookie & Caramel Sauce</Card.Body>

            <Card.Body className="menu-title montserrat center">Jungle Love</Card.Body>
            <Card.Body className="menu-description montserrat center">Chocolate Base, Strawberry, Banana & Chocolate Sauce</Card.Body>

            <Card.Body className="menu-title montserrat center">Wildcats</Card.Body>
            <Card.Body className="menu-description montserrat center">Blackberry, Strawberry, Banana & Chocolate Sauce</Card.Body>

            <Card.Body className="menu-title montserrat center">Cocolicious</Card.Body>
            <Card.Body className="menu-description montserrat center">Coconut ice cream mixed with Pineapple top with Coconut flakes & Whipped Cream</Card.Body>

          </Card>
        </Col>

        <Col xs={6}>
          <Card>
          <Card.Body className="menu-title montserrat center">Strawbella</Card.Body>
            <Card.Body className="menu-description montserrat center">Strawberry, Graham Cracker & Nutella</Card.Body>
          </Card>
        </Col>
        <Col xs={6}>
          <Card>
          <Card.Body className="menu-title montserrat center">Strawbella</Card.Body>
            <Card.Body className="menu-description montserrat center">Strawberry, Graham Cracker & Nutella</Card.Body>
          </Card>
        </Col>

      </Row>
  </Card>
);

export default IceMenu;