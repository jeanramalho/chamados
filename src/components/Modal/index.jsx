import React from "react";
import { Container } from "./style";

function Modal(){
    
    return (
        <Container>
            <div className="modalForm">
                <div>
                    <p>Título do Chamado</p>
                    <input type="text" id="taskTitle" />
                </div>

                
                
                <input type="text" id="taskId" />
                <textarea  id="taskDesc" cols="30" rows="10"></textarea>
                <input type="text" id="criticidade"/>
            </div>
        
        </Container>
    )
}

export default Modal