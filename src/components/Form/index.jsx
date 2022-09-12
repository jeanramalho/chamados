import React from 'react';

import { Container } from './style';

function Form() {
  return (
    <Container>
       <div className="content">
          <input type="text" placeholder='Seu nome' />
          <input type="text" placeholder='Título do chamado' />
          <textarea name="descricao" id="" cols="30" rows="20" placeholder='Descreva o chamado...'></textarea>
          <button>Enviar</button>  
       </div>
       <div className="infos">
          <select name="testando" id="test">
            <option value="nois">teste 1</option>
            <option value="nois">teste 3</option>
            <option value="nois">teste 2</option>
          </select>
       </div>
              
    </Container>
  );
}

export default Form;