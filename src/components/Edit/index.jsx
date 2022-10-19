import React from "react";
import { Container } from "./style";
import List from "../List"

function Edit(props){

    
    return (
        <Container>
                <List />
               <div className="editForm">
                    <input type="text" className="titleTask" />
                    <input type="text" className="idTask" />
                    <select name="criticidade" id="" className="critTask">
                        <option value="Alta">Alta</option>
                        <option value="Media">Media</option>
                        <option value="Baixa">Baixa</option>
                    </select>
               </div>       
                
                 
        
        </Container>
    )
}

export default Edit