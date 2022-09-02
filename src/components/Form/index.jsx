import React from 'react';

import { Container } from './style';

function Form() {
  return (
    <Container>
        <input type="text" placeholder='Seu nome' />
        <input type="text" placeholder='Título do chamado' />
        <textarea name="descricao" id="" cols="30" rows="10" placeholder='Descreva o chamado...'></textarea>
        <button>Enviar</button>        
    </Container>
  );
}

export default Form;