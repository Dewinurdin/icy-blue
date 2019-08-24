import React from 'react';
import Nav from 'react-bootstrap/Nav';

const NavBarMenu = () => (
    <Nav className="justify-content-between" sticky="top">
      <Nav.Link href="#ice">ROLLED ICE</Nav.Link>
      <Nav.Link href="#poke">POKE BOWL</Nav.Link>
      <Nav.Link href="#location">LOCATION</Nav.Link>
    </Nav>

);

export default NavBarMenu;