import React from "react";
import { Container } from "./style";
import List from "../List"
import { useParams } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client';

const getTicketById = gql`
    query MyQuery ($idTask: Int) {
        chamado(where: {taskId: $idTask}) {
        creater
        createdAt
        id
        title
        taskId
        statusTicket
        description
        criticality
        }
    }
`

function Edit(props){

    const { id } = useParams()
    const { loading, error, data } = useQuery(getTicketById, {
    variables: {
      idTask: parseInt(id),
    }
  })
  if (loading) return <p>Loading ...</p>

  const chamado = data.chamado
    console.log(chamado.taskId)

    return (
        <Container>
                <List />

               <div className="editForm">
                    <input type="text" className="titleTask" value={chamado.title} />
                    <div className='divInfo1'>
                        <input type="text" className="idTask" value={chamado.taskId} disabled/>
                        <select name="criticidade" id="" className="critTask">
                            <option value={chamado.criticality}>"{chamado.criticality}"</option>
                            <option value="Alta">Alta</option>
                            <option value="Media">Media</option>
                            <option value="Baixa">Baixa</option>
                        </select>
                    </div>
                    <div>
                        <select name="status" id="statusTask">
                            <option value={chamado.statusTicket}>"{chamado.statusTicket}"</option>
                            <option value="Backlog">Backlog</option>
                            <option value="Em Andamento">Em Andamento</option>
                            <option value="Blocked">Blocked</option>
                            <option value="Concluida">Concluida</option>
                        </select>
                    </div>
                    <textarea name="descTaks" id="" cols="30" rows="10" className="descTask" value={chamado.description}></textarea>
               </div>       
                
                 
        
        </Container>
    )
}

export default Edit