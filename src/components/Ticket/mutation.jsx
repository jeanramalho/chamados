import React from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';

export const deleteChamado = gql`
mutation ($taskId: Int){
    deleteChamado(where: {taskId: $taskId}) {
      id
      taskId
      title
      description
      creater
      statusTicket
      criticality
    }
`