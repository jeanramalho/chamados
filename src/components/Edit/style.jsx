import styled from "styled-components";

export const Container = styled.div`
            width: 100%;
            height: calc(100% - 80px);
            display: flex;
            background: #333;
            
            
             .editForm {
                width: 70%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
             }   
             
             input {
               width: 50%;
               height: 35px;
               margin: 10px;
               border-radius: 5px;
             }

             select {
               width: 180px;
               height: 30px;
             }

             .idTask {
               width: 180px !important;
               height: 30px !important;
             }

             .divInfo1 {
              width: 50%;
              display: flex;
              align-items: center;
              justify-content: space-between;
             }

             .descTask {
               border-radius: 8px;
             }


`