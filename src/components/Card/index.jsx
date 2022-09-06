import React from 'react';
import { Container } from './style';
import { format } from 'date-fns' 
import ptBR from 'date-fns/locale/pt-BR'

function Card(props) {
  const dateFormat = format(props.date, "dd'/'mm'/'yyyy'", {
    locale: ptBR    
})

console.log(dateFormat)

  return (
    <Container>
        <h3>{props.title}</h3>
        <div>
            <p>{props.creater}</p>
            <span>{dateFormat}</span>
        </div>
        
        
    </Container>
  );
}

export default Card;