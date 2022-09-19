import React from 'react';
import {Container} from './style'
import { useMutation } from '@apollo/client';
import { createTicket} from './mutation'
import  TaskId  from './taksId'


function Form() {

  const [createTick, {}] = useMutation(createTicket)
  

  function criaChamados() {
    
    
    let tit = document.getElementById('title').value
    let id = document.getElementById('taskId').value
    let desc= document.getElementById('description').value
    let creat = document.getElementById('creater').value
    let criti = document.getElementById('crit').value
  
    
    
    createTick({variables: {
            title: tit, 
            taskId: parseInt(id),
            description: desc, 
            criticality: criti, 
            creater: creat
    }})

   


    document.location.reload()

    return  alert(`Chamado criado com sucesso! O número do seu chamado é ${id}`)
      
    
  }

  
  

  return (
    <Container>
       <div className="content">
          <input type="text" placeholder='Título do chamado' id='title'/>
          <TaskId />
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

            <button id='criar' onClick={criaChamados}>Criar Chamado</button>
        </div>
       
       </div>
              
    </Container>
  );
}

export default Form;