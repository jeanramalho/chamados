import React from "react";
import { Container } from "./style";

function Modal(){
    
    return (
        <Container>
            <div className="modalForm">
                <input type="text" id="taskTitle" />
                <input type="text" id="taskId" />
            </div>
        
        </Container>
    )
}

export default Modal