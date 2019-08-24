import React from 'react';
import Container from 'react-bootstrap/Container';

import NavBarTop from './components/NavBarTop';
import NavBarMenu from './components/NavBarMenu';
import IceMenu from './pages/IceMenu';

import './App.css';

function App() {
  return (
    <Container className="Site" fluid >
      <header className="fixed-position" id="header">
      <Container>
        <NavBarTop />
        <NavBarMenu />
      </Container>
      </header>
      <Container fluid className="intro"></Container>
        <IceMenu />
    </Container>
  );
}

export default App;
