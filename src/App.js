import React from 'react';
import Container from 'react-bootstrap/Container';

import NavBarTop from './components/NavBarTop';
import NavBarMenu from './components/NavBarMenu';
import IceMenu from './pages/IceMenu';
import PokeMenu from './pages/PokeMenu';

import './App.css';

function App() {
  return (
    <Container className="Site" fluid >
      <header id="header">
      <div className="dark-overlay">
        <NavBarTop />
        <NavBarMenu />
      </div>
      </header>
      <Container fluid className="intro"></Container>
        <IceMenu />
        <PokeMenu/>
    </Container>
  );
}

export default App;
