import React from 'react';
import Container from 'react-bootstrap/Container';

import NavBarTop from './components/NavBarTop';

import './App.css';

function App() {
  return (
    <Container className="App" fluid>
      <NavBarTop />
    </Container>
  );
}

export default App;
