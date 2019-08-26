import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const IceMenu = () => (
  <Card id="icecreamrolls">
    <Card className="category">
      <Card.Body className="title satisfy">Rolled  Ice Cream</Card.Body>
      <Card.Body className="price satisfy">$6.99</Card.Body>
    </Card>
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body className="step helvetica center">STEP 1</Card.Body>
            <Card.Body className="menu-instructions montserrat center">CHOOSE A FLAVOR LISTED BELOW</Card.Body>
            <Card.Body className="step helvetica center">STEP 2</Card.Body>
            <Card.Body className="menu-instructions montserrat center">CHOOSE 3 TASTY TOPPINGS AFTER YOUR ICE CREAM IS MADE</Card.Body>
          </Card>
          <hr className="hr text-center"></hr>
        </Col>
        <Col xs={12}>
          <Card>
            <Card.Body className="menu-title center Lobster">Strawbella</Card.Body>
            <Card.Body className="menu-description montserrat">Strawberry, Graham Cracker & Nutella</Card.Body>
            
            <Card.Body className="menu-title Lobster center">Green Giant</Card.Body>
            <Card.Body className="menu-description montserrat">Green Tea Base, Lychee & Condensed Milk</Card.Body>
            
            <Card.Body className="menu-title Lobster center">Cookie Monster</Card.Body>
            <Card.Body className="menu-description montserrat">Oreo Cookie & Chocolate Sauce</Card.Body>
            
            <Card.Body className="menu-title Lobster center">Monkey Business</Card.Body>
            <Card.Body className="menu-description montserrat">Banana, Graham Cracker, Nutella & Chocolate Sauce</Card.Body>
            
            <Card.Body className="menu-title Lobster center">Cookie Dough</Card.Body>
            <Card.Body className="menu-description montserrat">Cookie Dough & Caramel Sauce</Card.Body>

            <Card.Body className="menu-title Lobster center">Mucho Mango</Card.Body>
            <Card.Body className="menu-description montserrat">Strawberry, Mango & Condensed Milk</Card.Body>

            <Card.Body className="menu-title Lobster center">Mint To Be</Card.Body>
            <Card.Body className="menu-description montserrat">Mint Oreo & Chocolate Sauce</Card.Body>

            <Card.Body className="menu-title Lobster center">Shockers Brownie</Card.Body>
            <Card.Body className="menu-description montserrat">Chocolate Milk Base, Brownie & Chocolate Sauce</Card.Body>

            <Card.Body className="menu-title Lobster center">Pink Lady</Card.Body>
            <Card.Body className="menu-description montserrat">Strawberry, Graham Crackers & Condensed Milk</Card.Body>

            <Card.Body className="menu-title Lobster center">Whole Latte Love</Card.Body>
            <Card.Body className="menu-description montserrat">Coffee Base, Biscoff Cookie & Caramel Sauce</Card.Body>

            <Card.Body className="menu-title Lobster center">Jungle Love</Card.Body>
            <Card.Body className="menu-description montserrat">Chocolate Base, Strawberry, Banana & Chocolate Sauce</Card.Body>

            <Card.Body className="menu-title Lobster center">Wildcats</Card.Body>
            <Card.Body className="menu-description montserrat">Blackberry, Strawberry, Banana & Chocolate Sauce</Card.Body>

            <Card.Body className="menu-title Lobster center">Cocolicious</Card.Body>
            <Card.Body className="menu-description montserrat">Coconut ice cream mixed with Pineapple top with Coconut flakes & Whipped Cream</Card.Body>

          </Card>
        </Col>

        <Col xs={12}> 
          <hr align="center" width="80%"></hr>
          <div className="menu-subtitle text-center">TOPPINGS</div>
          <hr align="center" width="80%"></hr>

        </Col>
        <Col xs={6}>
          <Card.Body className="menu-title montserrat">CHOCOLATE GOODIES</Card.Body>
          <Card.Body className="menu-item montserrat">Brownies</Card.Body>
          <Card.Body className="menu-item montserrat">Crushed Reeses</Card.Body>
          <Card.Body className="menu-item montserrat">Crushed Butterfingers</Card.Body>
          <Card.Body className="menu-item montserrat">Chocolate Pocky Stick</Card.Body>
          <Card.Body className="menu-item montserrat">Oreo </Card.Body>
          <Card.Body className="menu-item montserrat">Mint Oreo </Card.Body>
          <Card.Body className="menu-item montserrat">Kit Kat </Card.Body>
          <Card.Body className="menu-item montserrat">Chocolate Chips </Card.Body>
          <Card.Body className="menu-item montserrat">M&M's </Card.Body>
          <Card.Body className="menu-item montserrat">Cookie Dough </Card.Body>
          <Card.Body className="menu-item montserrat">Crushed Peanuts </Card.Body>
          <Card.Body className="menu-item montserrat">Pecans</Card.Body>
        </Col>
        <Col xs={6}>
          <Card.Body className="menu-title montserrat">FRUITS</Card.Body>
            <Card.Body className="menu-item montserrat">Cherry</Card.Body>
            <Card.Body className="menu-item montserrat">Blueberry</Card.Body>
            <Card.Body className="menu-item montserrat">Strawberry</Card.Body>
            <Card.Body className="menu-item montserrat">Mango</Card.Body>
            <Card.Body className="menu-item montserrat">Banana</Card.Body>
            <Card.Body className="menu-item montserrat">Lychee</Card.Body>
            <Card.Body className="menu-item montserrat">Pineapple</Card.Body>
            <Card.Body className="menu-item montserrat">Fruit Bubble</Card.Body>
        </Col>

        <Col xs={6}>
          <Card.Body className="menu-title montserrat">CANDIES</Card.Body>
          <Card.Body className="menu-item montserrat">Marshmallow</Card.Body>
          <Card.Body className="menu-item montserrat">Gummy Bear</Card.Body>
          <Card.Body className="menu-item montserrat">Sprinkles</Card.Body>
          <Card.Body className="menu-item montserrat">Skittles</Card.Body>
          <Card.Body className="menu-item montserrat">Coconut Flakes</Card.Body>
          <Card.Body className="menu-item montserrat">Sour Patch Kids</Card.Body>

        </Col>
        <Col xs={6}>
          <Card.Body className="menu-title montserrat">CEREALS</Card.Body>
          <Card.Body className="menu-item montserrat">Cinnamon Toast Crunch</Card.Body>
          <Card.Body className="menu-item montserrat">Fruity Pebbles</Card.Body>
        </Col>

        <Col xs={6}>
          <Card.Body className="menu-title montserrat">COOKIES</Card.Body>
          <Card.Body className="menu-item montserrat">Graham Crackers</Card.Body>
          <Card.Body className="menu-item montserrat">Pretzel Stix</Card.Body>
          <Card.Body className="menu-item montserrat">Wafer Rolls</Card.Body>
          <Card.Body className="menu-item montserrat">Nilla Wafers</Card.Body>
        </Col>
        


        <Col xs={6}>
          <Card.Body className="menu-title montserrat">SYRUPS</Card.Body>
          <Card.Body className="menu-item montserrat">Condensed Milk</Card.Body>
          <Card.Body className="menu-item montserrat">Caramel Sauce</Card.Body>
          <Card.Body className="menu-item montserrat">Chocolate Sauce</Card.Body>
          <Card.Body className="menu-item montserrat">Strawberry Sauce</Card.Body>
        </Col>
        <Col xs={12}>
        <Card.Body className="notations">ADDITIONAL ADD-ONS +$0.50</Card.Body>
        </Col>

      </Row>
  </Card>
);

export default IceMenu;