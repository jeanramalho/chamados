import styled from "styled-components";

export const Container = styled.div`

        .mainDiv {
            width: 80%;
            height: 80%;
            background-color: rgba(25, 2, 47, 0.2);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            display: none;
            position: absolute;
            justify-content: center;
            align-items: center;
        }

        

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
            width: 20% !important;
        }

        .tres {
            display: flex;
            flex-direction: column;
        }

        .taskDesc {
            width: 70%;
            heigth: 150px;
            border-radius: 8px;

        }

        .descTask {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            margin-left: 130px;
            margin-bottom: 20px;
        }

        button {
            width: 80px;
            height: 30px;
            border-radius: 5px;
            font-size: 12pt;
            font-weight: 500;
            text-transform: uppercase;
            margin: 20px;
        }

`