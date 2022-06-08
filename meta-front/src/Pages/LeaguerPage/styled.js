import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5%;
`

export const MenuDiv = styled.div`
    width: 100%;
    position: fixed;
    margin-left: 85%;
    z-index: 1;
`

export const Container = styled.div`
    background-color: #f3f7fa; 
    color: #000;
    width: 60%;
    height: 75vh;
    border-radius: 20px;
`

export const CloseButton = styled.button`
    border: 0px;
    background-color: #f3f7fa;
    font-weight: 600;
    padding: 8px;
    font-size: 1.5rem;
    margin-top: 0.5%;
    margin-left: 95%;
    :hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`

export const ContainerPicName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 25%;
`

export const Img = styled.img`
    width: 30%;
    border-radius: 50%;
`

export const H2 = styled.h2`
    padding: 5px;
    font-weight: 600;
`

export const ContainerInfoMain = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
`

export const ContainerInfo = styled.div `
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`

export const H3 = styled.h3 `
    font-size: 0.9rem;
    font-weight: 500;
`

export const ContainerButton = styled.div`
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 2%;
`

export const Button = styled.button`
    background-color: #122870;
    border-radius: 10px;
    font-size: 0.85rem;
    font-weight: 500;
    color: white;
    height: 4vh;
    border: 0px;
    width: 20%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    :hover{
    cursor: pointer;
    transform: scale(1.05);
    transition: all 1s ease 0s;
  }
`

export const ContainerPreview = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3%;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
`

export const LoadingDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 65vh;
`