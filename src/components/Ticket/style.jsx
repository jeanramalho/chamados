import styled from 'styled-components';

export const Container = styled.div`
    width: 87%;
    height: 100%;
    padding: 15px;
    

    .headerInfo {

        margin-bottom: 30px;

        h1 {
            text-transform: uppercase;
            font-size: 2rem;
        };

        h4 {
            font-size: 1.3rem;
            font-weight: 600;
        };
    };

    .info, .info2 {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 12pt;
        margin-top: 10px;
    };

    h3 {
        margin: 30px 0 15px 0;
    };

    .desc {
        display: flex;
        width: 100%;
        height: 60%;
        align-items: center;
        justify-content: center;
        overflow: hide;
    }

    .content {
        border: 2px solid #8888;
        overflow-y: scroll;
        width: 95%;
        height: 100%;
        border-radius: 8px;
        padding: 10px 20px;
    }

    .content::-webkit-scrollbar {
        width: 12px;              
      }
      
      .content::-webkit-scrollbar-track {
        background: #555;        
      }
      
      .content::-webkit-scrollbar-thumb {
        background-color: #222;    
        border-radius: 20px;       
        border: 3px solid #333;  
      }

      .menuBotoes {
        width: 100%;
        display: flex;
        justify-content: space-between
      }

    
`;
