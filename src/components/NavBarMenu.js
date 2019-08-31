import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

class NavBarMenu extends Component {
  state = {
    activeClass: ''
  }
  componentDidMount (){
    window.addEventListener('scroll', () => {
      let activeClass = 'scroll-active';
      if ( window.scrollY === 0 ){
        activeClass = 'link'
      }
      this.setState({ activeClass });
    });
  }
  render () {
    return (
      <Container>
        <Nav className="justify-content-between">
          <Nav.Link className={`${this.state.activeClass}`} href="#icecreamrolls">ROLLED ICE</Nav.Link>
          <Nav.Link className={`${this.state.activeClass}`} href="#poke_bowl">POKE BOWL</Nav.Link>
          <Nav.Link className={`${this.state.activeClass}`} href="#map">LOCATION</Nav.Link>
        </Nav>
      </Container>
      );
  }
};

export default NavBarMenu;