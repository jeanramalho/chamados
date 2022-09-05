import React from 'react';
import List from '../List';
import Ticket from '../Ticket';
import { Container } from './style';

function Board() {
  return (
    <Container>
        <List />
        <Ticket />
    </Container>
  );
}

export default Board;