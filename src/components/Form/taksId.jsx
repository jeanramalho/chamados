import React from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';

const getTaskId = gql`
query MyQuery {
  chamados(orderBy: taskId_DESC, first: 1) {
    taskId
  }
}
`

function taskId() {
    const {loading, error, data} = useQuery(getTaskId)
    if(loading) return <p>#0000</p>
  
    const maiorTaskId = data.chamados[0].taskId
    
   
    const idTask = maiorTaskId + 1
    
  return idTask

  ;
}

export default taskId;