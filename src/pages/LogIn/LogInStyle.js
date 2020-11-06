import styled from 'styled-components';

export const LogInBox = styled.div `
    display: flex;
    flex-direction: column;
    width: 270px;
    margin: 0 auto;
    padding: 80px 29px;
    background-color: #f2f2f2;
    border-radius: 2px;
`;
export const InputBox = styled.input `
    margin-bottom: 10px;
    width: 100%;
    padding: 10px 5px;
    box-sizing: border-box;
    border: none;
    border-radius: 2px;
`;
export const Button = styled.button `
    cursor: pointer;
    width: 100%;
    padding: 10px 5px;
    background-color: #212121;
    border: none;
    color: #ffffff;
    border-radius: 2px;
    font-size: 16px;
    margin-top: 12px;
    &:disabled {
        background: #49494a;
    }
`;
export const H2Style = styled.h2 `
    margin-bottom: 36px;
    background-color: #f2f2f2
    margin-top: 23px;

`;
export const LogInPage = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

