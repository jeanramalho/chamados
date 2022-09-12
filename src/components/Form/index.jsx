import React from 'react';

import { Container } from './style';

function Form() {
  return (
    <Container>
       <div className="content">
          <input type="text" placeholder='Título do chamado' />
          <textarea name="descricao" id="" cols="30" rows="20" placeholder='Descreva o chamado...'></textarea>
            
       </div>
       <div className="infos">
        <div className="configs">
          <input type="text" placeholder='Seu nome' />
          
            <p>
              Criticidade: 
              <select name="criticidade" id="crit">
                <option value="Baixa">Baixa</option>
                <option value="Media">Média</option>
                <option value="Alta">Alta</option>
              </select>
            </p>

            <button>Criar Chamado</button>
        </div>
       
       </div>
              
    </Container>
  );
}

export default Form;