import React from 'react';
import {Container} from './style'
import { gql, useMutation, useQuery } from '@apollo/client';

const createTicket = gql`
      mutation ($title: String!, $description: String!,  $criticality: String!, $creater: String!){
        createChamado(
          data: {
            title: $title, 
            statusTicket: "Backlog", 
            description: $description, 
            criticality: $criticality, 
            creater: $creater}
        ) {
          title
          statusTicket
          description
          criticality
          creater
        }
`


    let tit = document.getElementById('title').value
    let desc= document.getElementById('description').value
    let creat = document.getElementById('creater').value
    let criti = document.getElementById('crit').value






function Form() {
  
  const  [addTodo, {loading, error, data}]  = useMutation(createTicket)

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

            <button id='criar' onClick={e => {
                addTodo({
      
                  variables: {
                    title: tit,
                    description: desc,
                    criticality: criti,
                    creater: creat,
                  }
                               
              })
                if (loading) return <p>Loading ...</p>
                  if (error) return alert(error)
                  console.log(data)
              
                return alert('deu certo')
            }}>Criar Chamado</button>
        </div>
       
       </div>
              
    </Container>
  );
}

export default Form;