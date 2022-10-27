import React from 'react';
import { useMutation } from '@apollo/client';
import { updateChamado } from './mutation';

function updateTask(desc, status, title, crit, taskId) {
    const [upChamado, {}] = useMutation(updateChamado)
    
        upChamado(
            {
                variables: {
                    description: desc,
                    statusTicket: status,
                    title: title,
                    criticality: crit,
                    taskId: parseInt(taskId)
                }
            }
        )
}

export default updateTask