import React from 'react';
import Container from 'react-bootstrap/Container';

import NavBarTop from './components/NavBarTop';
import NavBarMenu from './components/NavBarMenu';

import './App.css';

function App() {
  return (
    // <Container className="App" fluid>
      <header className="navigation-container" fluid>
      <Container>
        <NavBarTop />
        <NavBarMenu />
        </Container>
      </header>
    // </Container>
  );
}

export default App;
