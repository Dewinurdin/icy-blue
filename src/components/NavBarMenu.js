import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const NavBarMenu = () => (
  <Container>
    <Nav className="justify-content-between">
      <Nav.Link href="#icecreamrolls">ROLLED ICE</Nav.Link>
      <Nav.Link href="#poke_bowl">POKE BOWL</Nav.Link>
      <Nav.Link href="#location">LOCATION</Nav.Link>
    </Nav>
    </Container>

);

export default NavBarMenu;