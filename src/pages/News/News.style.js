import styled from "styled-components";

export const Wrapper = styled.div `
    height: 100%;

`
export const Content = styled.div `
    box-sizing: border-box;
	min-height: 100%;
	padding-bottom: 90px;
`
export const NewsContainer = styled.div `
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1170px;
    margin: 0 auto;
    margin-top: 50px;
    
`
export const NewsImg = styled.div `
    position: relative;
    height: 300px;
    background-size: cover;
    transition: all 1s;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    zoom: 1;
    &:hover {
        transform: scale(1.1);
    }
 `
export const NewsBox = styled.div `
    display: flex;
    flex-direction: column;
    width: 49%;
    margin-bottom: 30px;
    background-color: #fafafa;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    
`
export const ImgBox = styled.div`
    overflow: hidden;
    cursor: pointer;
    

`
export const NewsDescription = styled.div `
    margin-top: 15px;
    margin-bottom: 30px;
    padding: 2px 24px;
    text-decoration: none;
    h3:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`
export const NamePage = styled.h1 `
    text-align: center;
    margin-top: 30px;
    color: #4a4949;
    font-size: 38px;
`

export const ShortDescription = styled.p `
    margin: 14px 0;  
`

export const DatePublish = styled.p `
 color: #9fa0a3;

`
