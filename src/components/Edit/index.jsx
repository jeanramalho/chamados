import React from "react";
import { Container } from "./style";
import List from "../List"

function Edit(props){

    
    return (
        <Container>
                <List />

               <div className="editForm">
                    <input type="text" className="titleTask" />
                    <div className='divInfo1'>
                        <input type="text" className="idTask" />
                        <select name="criticidade" id="" className="critTask">
                            <option value="Alta">Alta</option>
                            <option value="Media">Media</option>
                            <option value="Baixa">Baixa</option>
                        </select>
                    </div>
                    <div>
                        <select name="status" id="statusTask">
                            <option value="Backlog">Backlog</option>
                            <option value="Em Andamento">Em Andamento</option>
                            <option value="Blocked">Blocked</option>
                            <option value="Concluida">Concluida</option>
                        </select>
                    </div>
                   
               </div>       
                <textarea name="descTaks" id="" cols="30" rows="10"></textarea>
                 
        
        </Container>
    )
}

export default Edit