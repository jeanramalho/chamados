import React from "react";
import { Container } from "./style";

function Modal(){
    
    return (
        <Container>
            <div className="modalForm">
                <div className="divContent">
                    <p>Título do Chamado</p>
                    <input type="text" id="taskTitle" />
                </div>

                <div className="divContentDois">
                    <p>ID do Chamado</p>
                    <input type="text" id="taskId" className="dois"/>

                    <p>Criticidade</p>
                    <input type="text" id="criticidade" className="dois"/>
                </div>
                
                <div className="divContent">
                    <p>Descrição do Chamado</p>
                    <textarea  id="taskDesc" cols="30" rows="10"></textarea>
                </div>
                
                
            </div>

            <button className="save">Salvar</button>
        
        </Container>
    )
}

export default Modal