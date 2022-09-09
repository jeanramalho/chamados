import React from 'react';
import  {Container}  from './HeaderListStyle';
import { Link } from 'react-router-dom';



function HeaderList() {

  return (
        <Container>
            <Link to={`/`} className="link"><h2>chamados</h2></Link>
            <button>Criar</button>            
        </Container>        
  );
}

export default HeaderList;