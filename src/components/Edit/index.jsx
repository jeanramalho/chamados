import React from "react";
import { Container } from "./style";
import List from "../List"

function Edit(props){

    
    return (
        <Container>
                <List />
               <div className="editForm">
                    <input type="text" className="titleTask" />
               </div>       
                
                 
        
        </Container>
    )
}

export default Edit