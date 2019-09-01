import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/icy-blue-logo.jpg';

class NavBar extends Component {
  state = {
    activeClass: '',
    logoClass: ''
  }
  componentDidMount (){
    window.addEventListener('scroll', () => {
      let activeClass = '';
      let logoClass = '';

      if ( window.scrollY > 0 ){
        activeClass = 'scroll-active'
      }
      if ( window.scrollY > 0 ){
        logoClass = 'logo_active'
      }
      this.setState({ activeClass, logoClass });
    });
  }
  render () {
    return (
      <Container>
        <Navbar className="justify-content-center" >
          <Navbar.Brand href="#home">
            <img
              alt="Icy Blue Logo"
              src={logo}
              className={`d-inline-block align-top logo ${this.state.logoClass}`}
            />      
          </Navbar.Brand>
        </Navbar>

        <Nav className="justify-content-between">
          <Nav.Link className={`link ${this.state.activeClass}`} href="#icecreamrolls">ROLLED ICE</Nav.Link>
          <Nav.Link className={`link ${this.state.activeClass}`} href="#poke_bowl">POKE BOWL</Nav.Link>
          <Nav.Link className={`link ${this.state.activeClass}`} href="#map">LOCATION</Nav.Link>
        </Nav>
      </Container>
      );
  }
};

export default NavBar;