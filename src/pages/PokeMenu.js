import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import poke_bowl from '../assets/poke_bowl.jpg';


const IceMenu = () => (
  <Container id="poke_bowl">
      <Container className="category" >
      <img src={poke_bowl} className="poke_bowl" alt="Poke Bowl Section"/>
      <div className="centered">
        <div className="title">Poke Bowl</div>
      </div>
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
          <div className="menu-title">BASE</div>
          <div className="upto2">(choose up to 2)</div>

          <div className="menu-description">White Rice</div>
          <div className="menu-description">Brown Rice</div>
          <div className="menu-description">Organic Purple Rice</div>
          <div className="menu-description">Salad</div>
          <div className="menu-description">&#189; Salad &#189; White Rice</div>
        </Col>
        <Col xs={6} className="center">
          <div className="menu-title">PROTEIN</div>
          <div className="menu-description">Ahi Tuna</div>
          <div className="menu-description">Scottish Salmon</div>
          <div className="menu-description">Pepper Tuna</div>
          <div className="menu-description">Spicy Tuna</div>
          <div className="menu-description">Creamy Scallops</div>
          <div className="menu-description">Organic Tofu</div>
          <div className="menu-description">Popcorn Shrimp</div>
        </Col>

        <Col xs={12}>
          <div className="menu-title center py-3">CHOOSE FIVE TOPPING</div>
        </Col>

        {/* <Col xs lg="2"></Col> */}

        <Col xs={6}>
          <div className="menu-description">Green Onion</div>
          <div className="menu-description">Cilantro</div>
          <div className="menu-description">Sweet Onions</div>
          <div className="menu-description">Pineapple</div>
          <div className="menu-description">Tempura Flakes</div>
          <div className="menu-description">Crispy Onion</div>
          <div className="menu-description">Jalapeno</div>
        </Col>

        <Col xs={6}>
          <div className="menu-description">Cucumber Slices</div>
          <div className="menu-description">Crabmeat</div>
          <div className="menu-description">Masago (Fish egg)</div>
          <div className="menu-description">Avocado</div>
          <div className="menu-description">Sweet Corn</div>
          <div className="menu-description">Seaweed Salad</div>
          <div className="menu-description">Edamame</div>
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
            <div className="menu-title center">Shoyu</div>
            <div className="menu-description">Sesame Soy Sauce with Ginger</div>
            <div className="menu-title center">Ponzu</div>
            <div className="menu-description">Citrus Soy Sauce</div>
            <div className="menu-title center">Wasabi Aioli</div>
            <div className="menu-description">Sweet Creamy Wasabi Sauce</div>
            <div className="menu-title center">Sriracha Aioli</div>
            <div className="menu-description">Spicy Mayo</div>
            <div className="menu-title center">Wasabi Yuzu</div>
            <div className="menu-description">Soy Sauce Citrus with Wasabi</div>
            <div className="menu-title center">Mango Sauce</div>
            <div className="menu-description">Sweet Creamy Mango Puree</div>
            <div className="menu-title center">Eel Sauce</div>
            <div className="menu-description">Thick soy sauce</div>
          </Container>
        </Col> 

        <Col xs={12}>
          <div className="notations">Consuming raw or under cooked meat, fish, shellfish or fresh egg may increase your risk of food borne illness, especially if you have certain medical conditions</div>
        </Col>

        <Col xs={12}> 
          <hr className="hr"></hr>
        </Col>
        <Col xs={12}>
          <h2 className="signature text-center">Hawaiian Barbecue Bowl</h2>
        </Col>

        <Col xs={12}> 
          <Container className="poke">
            <div className="menu-description">Your choice of Steam Rice, Brown Rice, Purple Rice or</div>
            <div className="menu-description">Substitute to Fried Rice (+ $2)</div>
            <div className="menu-description">served with Steamed Asparagus, Sweet corn, Broccoli, Carrot drizzled with Hawaiian barbecue sauce</div>
            <div className="pick">PICK YOUR PROTEIN</div>
            <Row>
              <Col className="menu-description" xs={6}>Chicken <span className="space">$9</span></Col>
              <Col className="menu-description" xs={6}>Steak <span className="space">$12</span></Col>
              <Col className="menu-description" xs={6}>Shrimp <span className="space">$10</span></Col>
              <Col className="menu-description" xs={6}>Salmon <span className="space">$12</span></Col>
            </Row>
          
            <div className="pick">MAKE IT A COMBO</div>
            <Row>
              <Col className="menu-description" xs={6}>Combination of 2 <span className="space">$16</span></Col>
              <Col className="menu-description" xs={6}>Combination of 3 <span className="space">$20</span></Col>
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