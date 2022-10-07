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

        .divContent {
            margin-bottom: 10px;
            width: 100%;
        }

        input {
            margin: 7px;
            width: 60%;
            height: 35px;
            border-radius: 8px;
        }

`