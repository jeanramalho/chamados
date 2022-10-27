import React from 'react';
import { useMutation } from '@apollo/client';
import { updateChamado } from './mutation';

function updateTask() {

    let tit = document.getElementById('title').value
    let id = document.getElementById('Id').value
    let desc= document.getElementById('description').value
    let criti = document.getElementById('crit').value
    let status = document.getElementById('statusTask').value


    const [upChamado, {}] = useMutation(updateChamado)
    
        upChamado(
            {
                variables: {
                    description: desc,
                    statusTicket: status,
                    title: tit,
                    criticality: criti,
                    taskId: parseInt(id)
                }
            }
        )
}

export default updateTask