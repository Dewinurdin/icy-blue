import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import NavBarTop from './components/NavBarTop';
import NavBarMenu from './components/NavBarMenu';
import Footer from './components/Footer';
import IceMenu from './pages/IceMenu';
import PokeMenu from './pages/PokeMenu';
import Map from './components/Map';

import './App.css';

function App() {
  return (
    <Container className="Site" fluid >
      <Container id="header" fluid >
        <NavBarTop />
        <NavBarMenu />
      </Container>
      <Jumbotron />
      <IceMenu />
      <PokeMenu />
      <Map />
      <Footer />
    </Container>
  );
}

export default App;
