import React from 'react';
import {Container} from './style'
import { gql, useMutation, useQuery } from '@apollo/client';
import { createTicket } from './mutation'


function Form() {

  const [createTick, {data, error, loading}] = useMutation(createTicket)

  function criaChamados() {
    const tit = document.getElementById('title').value
    const desc= document.getElementById('description').value
    const creat = document.getElementById('creater').value
    const criti = document.getElementById('crit').value
 

    createTick({variables: {
            title: tit, 
            description: desc, 
            criticality: criti, 
            creater: creat
    }})

    tit = ""
    desc = ""
    creat = ""
    criti = ""

    return alert(data)
  }
 

  
  

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

            <button id='criar' onClick={criaChamados}>Criar Chamado</button>
        </div>
       
       </div>
              
    </Container>
  );
}

export default Form;