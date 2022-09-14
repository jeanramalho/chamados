import React from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';

export const createTicket = gql`
      mutation ($title: String, $description: String,  $criticality: String, $creater: String){
        createChamado(
          data: {
            title: $title, 
            statusTicket: "Backlog", 
            description: $description, 
            criticality: $criticality, 
            creater: $creater}
        ) {
          title
          statusTicket
          description
          criticality
          creater
        }}
`