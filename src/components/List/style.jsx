import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 22%;
    height: calc(100% - 80px);
    background: #444;
    border: none;
    align-items: center;
    justify-content: center;
    box-shadow: inset -15px 0px 15px 0px rgba(0, 0, 0, 0.7);
    border-radius: 8px;
    
    
    ul {
        height: 100%;
        width: 100%;
        overflow-y: scroll;        
    }

    ul::-webkit-scrollbar {
        width: 12px;              
      }
      
      ul::-webkit-scrollbar-track {
        background: #555;        
      }
      
      ul::-webkit-scrollbar-thumb {
        background-color: #222;    
        border-radius: 20px;       
        border: 3px solid #333;  
      }
`;
