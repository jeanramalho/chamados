import React from 'react';
import { Container } from './style';

function Card(props) {
  return (
    <Container>
        <h3>{props.title}</h3>
        <div>
            <p>{props.creater}</p>
            
        </div>
        
        
    </Container>
  );
}

export default Card;