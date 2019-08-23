import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import NavBarMenu from './NavBarMenu';
import logo from '../assets/icy-blue-logo.jpg';

const NavBarTop = () => (
    <Navbar className="justify-content-center" bg="dark" variant="light" sticky="top" >
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="400"
          height="110"
          className="d-inline-block align-top"
        />      
      </Navbar.Brand>
      <NavBarMenu />
    </Navbar>
);

export default NavBarTop;