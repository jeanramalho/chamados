import React from 'react';

function UpdateTask(){


    let tit = document.getElementById('title').value
    let idChamado = document.getElementById('Id').value
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
                taskId: parseInt(idChamado)
            }
        }
    )

    return alert("Chamado atualizado com sucesso")
}


export default UpdateTask

