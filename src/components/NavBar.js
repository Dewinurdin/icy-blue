import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/icy-blue-logo.jpg';

const NavigationBar = () => (
  <Navbar className="justify-content-center" bg="light" variant="light">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={logo}
        width="300"
        height="100"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
  </Navbar>
);

export default NavigationBar;