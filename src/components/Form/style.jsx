import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   width: 100%;
   height: calc(100% - 88px);
   align-items: center;
   flex-direction: row;
   justify-content: space-evenly;

   .content {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   }

   .infos {
    width: 30%;
    height: 100%;
    background: red;
   }

   input, textarea, button {
     border-radius: 8px;
     width: 90%; 
     margin-top: 10px;   
     padding: 8px; 
     background: #444;
     color: #fff;
   };

   input {
    height: 50px;    
   };

   button {
    color: #222;
    background: #9400D3;
    height: 30px; 
    border: none;
    font-weight: 600;
    font-size: 14px;
   };

   
`;

