import React from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { updateChamado } from './mutation';

function UpdateTask(desc, status, tit, criti, idChamado){

    const [upChamado, {}] = useMutation(updateChamado)

    upChamado(
        {
            variables: {
                description: desc,
                statusTicket: status,
                title: tit,
                criticality: criti,
                taskId: parseInt(idChamado)
            }
        }
    )
}



export default UpdateTask

