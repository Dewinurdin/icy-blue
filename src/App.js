import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import IceMenu from './pages/IceMenu';
import PokeMenu from './pages/PokeMenu';
import Map from './components/Map';

import './App.css';

function App() {
  return (
    <Container className="Site" fluid >
      <Container id="header" fluid >
        {/* <NavBarTop /> */}
        <NavBar />
      </Container>
      <Container className="intro" fluid/>
      <Jumbotron fluid>
        <Container>
          <h1 className="welcome">Welcome to Icy Blue</h1>
          <p className="about">
            Our Ice Cream begins with premium organic milk and organic cream. 
            We do not use any gums, thickeners, stabilizers, artificial ingredients, or coloring agents.
            <br/>
            <br/>
            Enjoy!
          </p>
        </Container>
      </Jumbotron>
      <Container>
        <IceMenu />
        <PokeMenu />
        <Map />
      </Container>
      <Footer />
    </Container>
  );
}

export default App;
