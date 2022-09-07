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
  console.log(typeof(parseInt(id)))

  const { data } = useQuery(getTicketById, {
    variables: {
      idTask: parseInt(id),
    }
  })

  console.log(data)

  return (
    <Container>
        <List />
        <Ticket key={id} />
    </Container>
  );
}

export default Board;