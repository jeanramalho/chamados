import React from 'react'
import { Container } from './style'
import { gql, useQuery } from "@apollo/client"

import Card from '../Card'

const getTickets = gql`
query MyQuery {
  chamados {
    id
    title
    creater
    description
    criticality
    createdAt
  }
}
`
 

export default function List() {

  const  { data }  = useQuery(getTickets)
  console.log(data)

  return (
    
    <Container>
      <ul>
       {data.chamados.map(chamado => {
        return (
          <Card key={chamado.id} title={chamado.title} creater={chamado.creater}/>
        )
       })}
      </ul>
      
    </Container>   
  )
}
