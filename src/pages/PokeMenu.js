import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const IceMenu = () => (
  <Container id="poke_bowl">
    <Container className="category">
      <Card.Body className="title satisfy">Poke Bowl</Card.Body>
    </Container>
      <Row>
        <Col xs={12}>
          <Card.Body className="step helvetica center">REGULAR</Card.Body>
          <Card.Body className="menu-instructions montserrat center">Select 2 protein option (24oz) $10.95</Card.Body>
          <Card.Body className="step helvetica center">LARGE</Card.Body>
          <Card.Body className="menu-instructions montserrat center">Select 3 protein option (32oz) $13.50</Card.Body>
          <hr className="hr"></hr>
        </Col>
        <Col xs={6}>
          <Card.Body className="menu-title montserrat">BASE (choose up to 2)</Card.Body>
          <Card.Body className="menu-item montserrat">Sushi Rice</Card.Body>
          <Card.Body className="menu-item montserrat">Brown Rice</Card.Body>
          <Card.Body className="menu-item montserrat">Organic Purple Rice</Card.Body>
          <Card.Body className="menu-item montserrat">Organic Kale</Card.Body>
          <Card.Body className="menu-item montserrat">Organic Spring Mix</Card.Body>
        </Col>
        <Col xs={6}>
          <Card.Body className="menu-title montserrat">PROTEIN</Card.Body>
          <Card.Body className="menu-item montserrat">Ahi Tuna</Card.Body>
          <Card.Body className="menu-item montserrat">Scottish Salmon</Card.Body>
          <Card.Body className="menu-item montserrat">Pepper Tuna</Card.Body>
          <Card.Body className="menu-item montserrat">Crabmeat</Card.Body>
          <Card.Body className="menu-item montserrat">Spicy Tuna</Card.Body>
          <Card.Body className="menu-item montserrat">Creamy Scallops</Card.Body>
          <Card.Body className="menu-item montserrat">Organic Tofu</Card.Body>
          <Card.Body className="menu-item montserrat">Popcorn Shrimp</Card.Body>
        </Col>

        <Col xs={6}>
          <Card.Body className="menu-title montserrat">MIX-INS</Card.Body>
            <Card.Body className="menu-item montserrat">Green Onion</Card.Body>
            <Card.Body className="menu-item montserrat">Cilantro</Card.Body>
            <Card.Body className="menu-item montserrat">Sweet Onions</Card.Body>
            <Card.Body className="menu-item montserrat">Pineapple</Card.Body>
            <Card.Body className="menu-item montserrat">Cucumber</Card.Body>
            <Card.Body className="menu-item montserrat">Mango</Card.Body>
            <Card.Body className="menu-item montserrat">Hijiki Seaweed</Card.Body>
        </Col>

        <Col xs={6}>
          <Card.Body className="menu-title montserrat">TOPPINGS</Card.Body>
          <Card.Body className="menu-item montserrat">Tempura Flakes</Card.Body>
          <Card.Body className="menu-item montserrat">Crispy Onion</Card.Body>
          <Card.Body className="menu-item montserrat">Jalapeno</Card.Body>
          <Card.Body className="menu-item montserrat">Wakame Seaweed</Card.Body>
          <Card.Body className="menu-item montserrat">Masago (Fish egg)</Card.Body>
          <Card.Body className="menu-item montserrat">Kizami Nori</Card.Body>
          <Card.Body className="menu-item montserrat">Crispy Lotus Root</Card.Body>
        </Col>

        <Col xs={6}>
          <Card.Body className="menu-title montserrat">FREE ADD ONS</Card.Body>
          <Card.Body className="menu-item montserrat">Cucumber Slices</Card.Body>
          <Card.Body className="menu-item montserrat">Edamame</Card.Body>
          <Card.Body className="menu-item montserrat">Sweet Corn</Card.Body>
          <Card.Body className="menu-item montserrat">Seaweed Salad</Card.Body>
        </Col>

        <Col xs={6}>
          <Card.Body className="menu-title montserrat">PREMIUM ADD ONS (+ $1)</Card.Body>
          <Card.Body className="menu-item montserrat">Crabmeat</Card.Body>
          <Card.Body className="menu-item montserrat">Black Tobiko</Card.Body>
          <Card.Body className="menu-item montserrat">Red Tobiko</Card.Body>
          <Card.Body className="menu-item montserrat">Avocado</Card.Body>
        </Col>

        <Col xs={12}> 
          <hr className="hr"></hr>
          <div className="menu-subtitle text-center">DRESSING</div>
        </Col>

        <Col xs={12}> 
          <Container className="poke">
            <Card.Body className="menu-title center Lobster">Shoyu</Card.Body>
            <Card.Body className="menu-description montserrat">Sesame Soy Sauce with Ginger</Card.Body>
            <Card.Body className="menu-title center Lobster">Ponzu</Card.Body>
            <Card.Body className="menu-description montserrat">Citrus Soy Sauce</Card.Body>
            <Card.Body className="menu-title center Lobster">Spicy Ponzu</Card.Body>
            <Card.Body className="menu-description montserrat">Ponzu Sauce with Jalapeno & Garlic</Card.Body>
            <Card.Body className="menu-title center Lobster">Wasabi Aioli</Card.Body>
            <Card.Body className="menu-description montserrat">Sweet Creamy Wasabi Sauce</Card.Body>
            <Card.Body className="menu-title center Lobster">Sweet Chili Gochu</Card.Body>
            <Card.Body className="menu-description montserrat">Sweet Chili </Card.Body>
            <Card.Body className="menu-title center Lobster">Sriracha Aioli</Card.Body>
            <Card.Body className="menu-description montserrat">Spicy Mayo</Card.Body>
            <Card.Body className="menu-title center Lobster">Wasabi Yuzu</Card.Body>
            <Card.Body className="menu-description montserrat">Soy Sauce Citrus with Wasabi</Card.Body>
            <Card.Body className="menu-title center Lobster">Mango Sauce</Card.Body>
            <Card.Body className="menu-description montserrat">Sweet Creamy Mango Puree</Card.Body>
            <Card.Body className="menu-title center Lobster">Eel Sauce</Card.Body>
            <Card.Body className="menu-description montserrat">Thick soy sauce</Card.Body>
          </Container>
        </Col> 

        <Col xs={12}>
        <Card.Body className="notations">Consuming raw or under cooked meat, fish, shellfish or fresh egg may increase your risk of food borne illness, especially if you have certain medical conditions</Card.Body>
        </Col>

      </Row>
  </Container>
);

export default IceMenu;