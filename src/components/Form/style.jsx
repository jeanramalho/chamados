import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   width: 65%;
   align-items: center;
   flex-direction: column;
   justify-content: center;

   input, textarea, button {
     border-radius: 8px;
     width: 90%; 
     margin-top: 10px;   
     padding: 8px; 
   };

   input {
    height: 30px;    
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

