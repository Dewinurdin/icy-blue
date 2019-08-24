import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/icy-blue-logo.jpg';

const NavBarTop = () => (
    <Navbar className="justify-content-center"  >
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="400"
          height="110"
          className="d-inline-block align-top logo"
        />      
      </Navbar.Brand>
    </Navbar>
);

export default NavBarTop;