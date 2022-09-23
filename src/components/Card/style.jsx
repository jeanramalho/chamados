import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;
    border-bottom: 1.5px solid #8888;
    cursor: pointer;
    text-decoration: none !important;
    color: #fff;


   div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
   }

   :hover {
    background: #333;
   }
   
   .link {
    text-decoration: none !important;
   }

  button {
    position: absolute;
  }
`;
