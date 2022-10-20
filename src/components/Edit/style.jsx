import styled from "styled-components";

export const Container = styled.div`
            width: 100%;
            height: calc(100% - 80px);
            display: flex;
            
             .editForm {
                width: 100%;
                height: 100%;
                background: #333;
                display: flex;
                flex-direction: column;
             }   
             
             input {
               width: 40%;
               height: 40px;
               margin: 10px;
               border-radius: 5px;
             }

             select {
               width: 180px;
               height: 30px;
             }

             .idTask {
               width: 180px !important;
             }


`