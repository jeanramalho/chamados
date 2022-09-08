import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 1.5px solid #8888;
    text-decoration: none !important;
    color: #fff;

    h2 {
        font-weight: 600;
        text-transform: uppercase;
        color: #fff;
        text-shadow: black 0.1em 0.1em 0.2em;
    }

    button {
        width: 4.5rem;
        height: 30px;
        border-radius: 8px;
        background: #9400D3;
        color: #fff;
        text-transform: uppercase;
        font-weight: 700;
        cursor: pointer;
        border: none;
        box-shadow: black 0.1em 0.1em 0.2em;
    }
`;
