import React from 'react';
import {Container} from './style'


const button = document.getElementById('criar')

button.addEventListener("click", e => {
  alert('fui clicado')
})

function Form() {
 

  return (
    <Container>
       <div className="content">
          <input type="text" placeholder='Título do chamado' id='title'/>
          <textarea name="descricao" cols="30" rows="20" placeholder='Descreva o chamado...' id='description'></textarea>
            
       </div>
       <div className="infos">
        <div className="configs">
          <input type="text" placeholder='Seu nome' id='creater'/>
          
            <p>
              Criticidade: 
              <select name="criticidade" id="crit">
                <option value="Baixa">Baixa</option>
                <option value="Media">Média</option>
                <option value="Alta">Alta</option>
              </select>
            </p>

            <button id='criar'>Criar Chamado</button>
        </div>
       
       </div>
              
    </Container>
  );
}

export default Form;