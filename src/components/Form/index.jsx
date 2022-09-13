import React from 'react';

import { Container } from './style';

function Form() {

  function saveData() {
    let title = document.getElementById('title').value
    let description = document.getElementById('description').value
    let creater = document.getElementById('creater').value
    let crit = document.getElementById('crit').value
    
    console.log(`${title} e ${description} e ${creater} e ${crit}`)
  }

  return (
    <Container>
       <div className="content">
          <input type="text" placeholder='Título do chamado' id='title'/>
          <textarea name="descricao" id="" cols="30" rows="20" placeholder='Descreva o chamado...' id='description'></textarea>
            
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

            <button onClick={saveData}>Criar Chamado</button>
        </div>
       
       </div>
              
    </Container>
  );
}

export default Form;