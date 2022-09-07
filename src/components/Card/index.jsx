import React from 'react';
import { Container } from './style';
import { format } from 'date-fns' 
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom';

function Card(props) {
  const dateFormat = format(props.date, "dd'/'MM'/'yyyy'", {
    locale: ptBR    
})

console.log(dateFormat)

  return (
    <Link to={`/chamado/${props.id}`} className="link">
      <Container>
          <h3>{props.title}</h3>
          <div>
              <p>{props.creater}</p>
              <span>{dateFormat}</span>
          </div>    
      </Container>
    </Link>
  );
}

export default Card;