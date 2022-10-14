import React from "react";
import { Container } from "./style";
import List from "../List"

function Modal(props){

    
    return (
        <Container>
                <List />
               <div className="modalForm">
                    <div className="divContent">
                        <p className="titleTicket">Título do Chamado</p>
                        <input type="text" id="taskTitle" className="taskTitle" />
                    </div>

                    <div className="divContentDois">
                        <p>ID do Chamado</p>
                        <input type="text" id="taskId" className="dois"/>

                        <p>Criticidade</p>
                        <input type="text" id="criticidade" className="dois"/>
                    </div>
                    
                    <div className="divContent tres">
                        <p className="descTask">Descrição do Chamado</p>
                        <textarea  id="taskDesc" cols="30" rows="10" className="taskDesc"></textarea>
                    </div>
                    
                    <div className="footer">
                        <button className="fechar">Fechar</button>
                        <button className="saveButton">Salvar</button>
                    </div>
               </div>       
                
                 
        
        </Container>
    )
}

export default Modal