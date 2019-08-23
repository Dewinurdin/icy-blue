import React from 'react';
import Nav from 'react-bootstrap/Nav';

const NavBarMenu = () => (
  <Nav className="justify-content-center">
    <Nav.Link href="#ice">Rolled Ice</Nav.Link>
    <Nav.Link href="#poke">Poke Bowl</Nav.Link>
    <Nav.Link href="#location">Location</Nav.Link>
  </Nav>

);

export default NavBarMenu;