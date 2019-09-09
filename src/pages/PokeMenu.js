import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const IceMenu = () => (
  <Container id="poke_bowl">
    <Container className="category">
      <div className="title satisfy">Poke Bowl</div>
    </Container>
      <Row>
        <Col xs={12}>
          <div className="step helvetica center">REGULAR</div>
          <div className="menu-instructions montserrat center">Select 2 protein option (24oz) $10.95</div>
          <div className="step helvetica center">LARGE</div>
          <div className="menu-instructions montserrat center">Select 3 protein option (32oz) $13.50</div>
          <hr className="hr"></hr>
        </Col>
        <Col xs={6} className="center">
          <div className="menu-title montserrat">BASE (choose up to 2)</div>
          <div className="menu-item montserrat">White Rice</div>
          <div className="menu-item montserrat">Brown Rice</div>
          <div className="menu-item montserrat">Organic Purple Rice</div>
          <div className="menu-item montserrat">Salad</div>
          <div className="menu-item montserrat">&#189; Salad &#189; White Rice</div>
        </Col>
        <Col xs={6} className="center">
          <div className="menu-title montserrat">PROTEIN</div>
          <div className="menu-item montserrat">Ahi Tuna</div>
          <div className="menu-item montserrat">Scottish Salmon</div>
          <div className="menu-item montserrat">Pepper Tuna</div>
          <div className="menu-item montserrat">Spicy Tuna</div>
          <div className="menu-item montserrat">Creamy Scallops</div>
          <div className="menu-item montserrat">Organic Tofu</div>
          <div className="menu-item montserrat">Popcorn Shrimp</div>
        </Col>

        <Col xs={12}>
          <div className="menu-title montserrat center py-3">CHOOSE FIVE TOPPING</div>
        </Col>

        <Col xs={6} className="center">
          <div className="menu-item montserrat">Green Onion</div>
          <div className="menu-item montserrat">Cilantro</div>
          <div className="menu-item montserrat">Sweet Onions</div>
          <div className="menu-item montserrat">Pineapple</div>
          <div className="menu-item montserrat">Tempura Flakes</div>
          <div className="menu-item montserrat">Crispy Onion</div>
          <div className="menu-item montserrat">Jalapeno</div>
          <div className="menu-item montserrat">Edamame</div>
        </Col>

        <Col xs={6} className="center" >
          <div className="menu-item montserrat">Cucumber Slices</div>
          <div className="menu-item montserrat">Crabmeat</div>
          <div className="menu-item montserrat">Masago (Fish egg)</div>
          <div className="menu-item montserrat">Avocado</div>
          <div className="menu-item montserrat">Sweet Corn</div>
          <div className="menu-item montserrat">Seaweed Salad</div>
        </Col>

        <Col xs={12}>
          <div className="notations">ADDITIONAL ADD-ONS +$0.50</div>
        </Col>

        <Col xs={12}> 
          <hr className="hr"></hr>
          <div className="menu-subtitle text-center">DRESSING</div>
        </Col>

        <Col xs={12}> 
          <Container className="poke">
            <div className="menu-title center Lobster">Shoyu</div>
            <div className="menu-description montserrat">Sesame Soy Sauce with Ginger</div>
            <div className="menu-title center Lobster">Ponzu</div>
            <div className="menu-description montserrat">Citrus Soy Sauce</div>
            <div className="menu-title center Lobster">Spicy Ponzu</div>
            <div className="menu-description montserrat">Ponzu Sauce with Jalapeno &amp; Garlic</div>
            <div className="menu-title center Lobster">Wasabi Aioli</div>
            <div className="menu-description montserrat">Sweet Creamy Wasabi Sauce</div>
            <div className="menu-title center Lobster">Sweet Chili Gochu</div>
            <div className="menu-description montserrat">Sweet Chili </div>
            <div className="menu-title center Lobster">Sriracha Aioli</div>
            <div className="menu-description montserrat">Spicy Mayo</div>
            <div className="menu-title center Lobster">Wasabi Yuzu</div>
            <div className="menu-description montserrat">Soy Sauce Citrus with Wasabi</div>
            <div className="menu-title center Lobster">Mango Sauce</div>
            <div className="menu-description montserrat">Sweet Creamy Mango Puree</div>
            <div className="menu-title center Lobster">Eel Sauce</div>
            <div className="menu-description montserrat">Thick soy sauce</div>
          </Container>
        </Col> 

        <Col xs={12}>
          <div className="notations">Consuming raw or under cooked meat, fish, shellfish or fresh egg may increase your risk of food borne illness, especially if you have certain medical conditions</div>
        </Col>

        <Col xs={12}> 
          <hr className="hr"></hr>
        </Col>
        <Col xs={12}>
          <div className="signature text-center">Hawaiian Barbecue Bowl</div>
        </Col>

        <Col xs={12}> 
          <Container className="poke">
            <div className="menu-description montserrat">Your choice of Steam Rice, Brown Rice, Purple Rice or</div>
            <div className="menu-description montserrat">substitute to Fried Rice (+ $2)</div>
            <div className="menu-description montserrat">served with Steamed Asparagus, Sweet corn, Broccoli, Carrot drizzled with Hawaiian barbecue sauce</div>
            <div className="pick">PICK YOUR PROTEIN</div>
            <Row>
              <Col className="menu-description montserrat" xs={6}>Chicken <span className="space">$9</span></Col>
              <Col className="menu-description montserrat" xs={6}>Steak <span className="space">$12</span></Col>
              <Col className="menu-description montserrat" xs={6}>Shrimp <span className="space">$10</span></Col>
              <Col className="menu-description montserrat" xs={6}>Salmon <span className="space">$12</span></Col>
            </Row>
          
            <div className="pick">MAKE IT A COMBO</div>
            <Row>
              <Col className="menu-description montserrat" xs={6}>Combination of 2 <span className="space">$16</span></Col>
              <Col className="menu-description montserrat" xs={6}>Combination of 3 <span className="space">$20</span></Col>
            </Row>
          </Container>
        </Col>
        <Col> 
          <hr className="hr"></hr>
        </Col>

      </Row>
  </Container>
);

export default IceMenu;