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
    overflow-y: scroll;
`;
