import styled from "styled-components";

export const Container = styled.div`
        width: 100%;
        height: 100%;
        background-color: rgba(25, 2, 47, 0.2);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;


        .modalForm {
            width: 80%;
            height: 80%;
            background: #333;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .divContent, .divContentDois {
            margin-bottom: 10px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .divContentDois {
            justify-content: space-evenly;
        }

        .titleTicket {
            width: 15%;
            display: flex;
            justify-content: flex-end;
            margin-rigth: 10px;

        }

        input {
            margin: 7px;
            width: 60%;
            height: 35px;
            border-radius: 8px;
        }

        .taskTitle {
            width: 65%;
        }

        .dois {
            width: 25% !important;
        }

`