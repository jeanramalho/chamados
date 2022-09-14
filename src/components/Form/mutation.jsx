import React from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';

export const createTicket = gql`
      mutation ($title: String, $taskId: Int, $description: String,  $criticality: String, $creater: String){
        createChamado(
          data: {
            title: $title, 
            taskId: $taskId,
            statusTicket: "Backlog", 
            description: $description, 
            criticality: $criticality, 
            creater: $creater}
        ) {
          title
          taskId
          statusTicket
          description
          criticality
          creater
        }
      
        publishChamado(where: {taskId: $taskId}, to: PUBLISHED) {
          taskId
        }
      
      
      }
`
