import React from 'react';
import {Container} from './style'
import { gql, useMutation, useQuery } from '@apollo/client';
import { createTicket} from './mutation'

const getTaskId = gql`
query MyQuery {
  chamados(orderBy: taskId_DESC, first: 1) {
    taskId
  }
}
`


function Form() {

  const {loading2, error2, data2} = useQuery(getTaskId)

  console.log(` maiorO taskId  eh ${data2}`)

  const [createTick, {data, error, loading}] = useMutation(createTicket)
  

  function criaChamados() {
    
    
    let tit = document.getElementById('title').value
    let taskId = document.getElementById('taskId').value
    let desc= document.getElementById('description').value
    let creat = document.getElementById('creater').value
    let criti = document.getElementById('crit').value
  

    
    createTick({variables: {
            title: tit, 
            taskId: parseInt(taskId),
            description: desc, 
            criticality: criti, 
            creater: creat
    }})

   


  

    return alert(`${data}`)
  }

  
  

  return (
    <Container>
       <div className="content">
          <input type="text" placeholder='Título do chamado' id='title'/>
          <input type="text" placeholder='ID do chamado'className="taskId" id='taskId'/>
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