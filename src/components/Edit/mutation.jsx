import React from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';

export const updateChamado = gql`
    mutation($description: String, $statusTicket: String, $title: String, $criticality: String, $taskId: Int ) {
        updateChamado(
          data: {description: $description, statusTicket: $statusTicket, title: $title, criticality: $criticality}
          where: {taskId: $taskId}
        )
      }
`