import React from 'react';
import Container from 'react-bootstrap/Container';

import NavBarTop from './components/NavBarTop';
import NavBarMenu from './components/NavBarMenu';

import './App.css';

function App() {
  return (
    <Container className="App" fluid>
      <Container className="navigation-container" fluid>
        <NavBarTop />
        <NavBarMenu />
      </Container>
    </Container>
  );
}

export default App;
