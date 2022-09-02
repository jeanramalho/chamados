import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   width: 65%;
   align-items: center;
   flex-direction: column;
   justify-content: center;

   input, textarea, button {
     border-radius: 8px;
     width: 80%; 
     margin-top: 10px;    
   };

   input {
    height: 30px;
    padding: 8px;
   };
`;

