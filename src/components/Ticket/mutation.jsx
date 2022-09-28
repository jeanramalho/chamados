import React from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';

export const deleteChamado = gql`
mutation ($idTask: Int){
    deleteChamado(where: {taskId: $idTask}) {
      id
      taskId
      title
      description
      creater
      statusTicket
      criticality
    }}
`