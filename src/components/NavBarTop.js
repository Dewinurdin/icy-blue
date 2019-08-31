import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/icy-blue-logo.jpg';

class NavBarTop extends Component {
  state = {
    logoOnScrollActiveClass: ''
  }
  // componentDidMount (){
  //   window.addEventListener('scroll', () => {
  //     let logoOnScrollActiveClass = 'active';
  //     if ( window.scrollY === 0 ){
  //       logoOnScrollActiveClass = 'normal'
  //     }
  //     this.setState({ logoOnScrollActiveClass });
  //   });
  // }
  render () {
    return (
      <Navbar className="justify-content-center" >
        <Navbar.Brand href="#home">
          <img
            alt="Icy Blue Logo"
            src={logo}
            className="d-inline-block align-top logo"
            // className={`d-inline-block align-top logo ${this.state.logoOnScrollActiveClass}`}
          />      
        </Navbar.Brand>
      </Navbar>
      );
  }
};

export default NavBarTop;