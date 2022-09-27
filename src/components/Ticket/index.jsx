import React from 'react';
import { format } from 'date-fns' 
import ptBR from 'date-fns/locale/pt-BR'
import { Container } from './style';
import { useMutation } from '@apollo/client';
import { deleteChamado } from './mutation';




function Ticket(props) {
    const dateFormat = format(props.date, "dd'/'MM'/'yyyy'", {
        locale: ptBR    
    })

    const [deleteTicket, {}] = useMutation(deleteChamado)

    function deletarChamado() {
        deleteTicket(
            {
                variables: {
                    taskId: parseInt(props.taskId)
                }
            }
        )
    }

  return (
    <Container>
        <section className='headerInfo'>
            <div className='menuBotoes'>
                <h1>{props.title}</h1>
                <div className="botoes">
                    <button id='del'>Deletar</button>
                    <button>Editar</button>
                </div>                
            </div>
            
            <h4>{props.taskId}</h4>
        </section>

        <div className="info">
            <p>Criado por: {props.creater}</p>
            <p>Data da abertura: {dateFormat}</p>
        </div>

        <div className="info2">
            <p>status: {props.status}</p>
            <p>criticidade: {props.criticality}</p>
        </div>

        <h3>Descrição do chamado</h3>
        <div className="desc">
            <div className="content">
                {props.description}
            </div>
        </div>
        
        
    </Container>
  );
}

export default Ticket;
