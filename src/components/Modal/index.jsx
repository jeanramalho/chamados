import React from "react";
import { Container } from "./style";

function Modal(){
    
    return (
        <Container>
            <div className="modalForm">
                <input type="text" id="taskTitle" />
                <input type="text" id="taskId" />
                <textarea  id="taskDesc" cols="30" rows="10"></textarea>
            </div>
        
        </Container>
    )
}

export default Modal