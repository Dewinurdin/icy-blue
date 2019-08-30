import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const IceMenu = () => (
  <Container id="icecreamrolls">
    <Container className="category">
      <div className="title satisfy">Rolled  Ice Cream</div>
      <div className="price satisfy">$6.99</div>
    </Container>
      <Row>
        <Col xs={12}>
            <div className="step helvetica center">STEP 1</div>
            <div className="menu-instructions montserrat center">CHOOSE A FLAVOR LISTED BELOW</div>
            <div className="step helvetica center">STEP 2</div>
            <div className="menu-instructions montserrat center">CHOOSE 3 TASTY TOPPINGS AFTER YOUR ICE CREAM IS MADE</div>
          <hr className="hr"></hr>
        </Col>
        <Col xs={12}>
          <Container className="ice-menu">
            <div className="menu-title center Lobster">Strawbella</div>
            <div className="menu-description montserrat">Strawberry Base, Graham Cracker & Nutella</div>
            
            <div className="menu-title Lobster center">Green Giant</div>
            <div className="menu-description montserrat">Green Tea Base, Lychee & Condensed Milk</div>
            
            <div className="menu-title Lobster center">Cookie Monster</div>
            <div className="menu-description montserrat">Vanilla Base, Oreo Cookie & Chocolate Sauce</div>
            
            <div className="menu-title Lobster center">Monkey Business</div>
            <div className="menu-description montserrat">Banana Base, Graham Cracker, Nutella & Chocolate Sauce</div>
            
            <div className="menu-title Lobster center">Cookie Dough</div>
            <div className="menu-description montserrat">Vanilla Base, Cookie Dough & Caramel Sauce</div>

            <div className="menu-title Lobster center">Mucho Mango</div>
            <div className="menu-description montserrat">Mango Base, Strawberry & Condensed Milk</div>

            <div className="menu-title Lobster center">Mint To Be</div>
            <div className="menu-description montserrat">Mint Base, Oreo Cookie & Chocolate Sauce</div>

            <div className="menu-title Lobster center">Shockers Brownie</div>
            <div className="menu-description montserrat">Chocolate Milk Base, Brownie & Chocolate Sauce</div>

            <div className="menu-title Lobster center">Pink Lady</div>
            <div className="menu-description montserrat">Strawberry Base, Graham Crackers & Condensed Milk</div>

            <div className="menu-title Lobster center">Whole Latte Love</div>
            <div className="menu-description montserrat">Coffee Base, Biscoff Cookie & Caramel Sauce</div>

            <div className="menu-title Lobster center">Jungle Love</div>
            <div className="menu-description montserrat">Chocolate Base, Strawberry, Banana & Chocolate Sauce</div>

            <div className="menu-title Lobster center">Wildcats</div>
            <div className="menu-description montserrat">Banana Base, Blackberry, Strawberry & Chocolate Sauce</div>

            <div className="menu-title Lobster center">Cocolicious</div>
            <div className="menu-description montserrat">Coconut ice cream mixed with Pineapple top with Coconut flakes & Whipped Cream</div>

          </Container>
        </Col>

        <Col xs={12}> 
          <hr className="hr"></hr>
          <div className="menu-subtitle text-center">TOPPINGS</div>
        </Col>
        
        <Col xs={6}>
          <div className="menu-title montserrat">CHOCOLATE GOODIES</div>
          <div className="menu-item montserrat">Brownies</div>
          <div className="menu-item montserrat">Crushed Reeses</div>
          <div className="menu-item montserrat">Crushed Butterfingers</div>
          <div className="menu-item montserrat">Chocolate Pocky Stick</div>
          <div className="menu-item montserrat">Oreo </div>
          <div className="menu-item montserrat">Mint Oreo </div>
          <div className="menu-item montserrat">Kit Kat </div>
          <div className="menu-item montserrat">Chocolate Chips </div>
          <div className="menu-item montserrat">M&M's </div>
          <div className="menu-item montserrat">Cookie Dough </div>
          <div className="menu-item montserrat">Crushed Peanuts </div>
          <div className="menu-item montserrat">Pecans</div>
        </Col>
        <Col xs={6}>
          <div className="menu-title montserrat">FRUITS</div>
            <div className="menu-item montserrat">Cherry</div>
            <div className="menu-item montserrat">Blueberry</div>
            <div className="menu-item montserrat">Strawberry</div>
            <div className="menu-item montserrat">Mango</div>
            <div className="menu-item montserrat">Banana</div>
            <div className="menu-item montserrat">Lychee</div>
            <div className="menu-item montserrat">Pineapple</div>
        </Col>

        <Col xs={6}>
          <div className="menu-title montserrat">CANDIES</div>
          <div className="menu-item montserrat">Marshmallow</div>
          <div className="menu-item montserrat">Gummy Bear</div>
          <div className="menu-item montserrat">Sprinkles</div>
          <div className="menu-item montserrat">Skittles</div>
          <div className="menu-item montserrat">Coconut Flakes</div>
          <div className="menu-item montserrat">Sour Patch Kids</div>

        </Col>
        <Col xs={6}>
          <div className="menu-title montserrat">CEREALS</div>
          <div className="menu-item montserrat">Cinnamon Toast Crunch</div>
          <div className="menu-item montserrat">Fruity Pebbles</div>
        </Col>

        <Col xs={6}>
          <div className="menu-title montserrat">COOKIES</div>
          <div className="menu-item montserrat">Graham Crackers</div>
          <div className="menu-item montserrat">Pretzel Stix</div>
          <div className="menu-item montserrat">Wafer Rolls</div>
          <div className="menu-item montserrat">Nilla Wafers</div>
        </Col>

        <Col xs={6}>
          <div className="menu-title montserrat">SYRUPS</div>
          <div className="menu-item montserrat">Condensed Milk</div>
          <div className="menu-item montserrat">Caramel Sauce</div>
          <div className="menu-item montserrat">Chocolate Sauce</div>
          <div className="menu-item montserrat">Strawberry Sauce</div>
        </Col>
        <Col xs={12}>
        <div className="notations">ADDITIONAL ADD-ONS +$0.50</div>
        </Col>

      </Row>
  </Container>
);

export default IceMenu;