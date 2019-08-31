import React from 'react';
import IceMenu  from './IceMenu';
import PokeMenu  from './PokeMenu';
import Map  from '../components/Map';

import Container from 'react-bootstrap/Container';

const Content = () =>  (
  <Container>
    <IceMenu />
    <PokeMenu/>
    <Map />
  </Container>
);

export default Content;