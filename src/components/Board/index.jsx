import React from 'react';
import List from '../List';
import Ticket from '../Ticket';
import { Container } from './style';
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

function Board() {

  const { id } = useParams()
  const { loading, error, data } = useQuery(getTicketById, {
    variables: {
      idTask: parseInt(id),
    }
  })
  if (loading) return <p>Loading ...</p>

  const chamado = data.chamado

  return (
    <Container>
        <List />
        <Ticket 
        key={chamado.id}
        title={chamado.title} 
        creater={chamado.creater}
        criticality={chamado.criticality}
        description={chamado.description}
        date={new Date(chamado.createdAt)}
        taskId={chamado.taskId}
        status={chamado.statusTicket}
        />
    </Container>
  );
}

export default Board;