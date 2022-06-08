import styled from "styled-components";

export const Main = styled.main`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 10px;
    width: 15%;
    height: 15vh;
    border-radius: 0px 0px 0px 8px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    gap: 5px;
    height: 6vh;
    width: 100%;
    border-color: #c8c8c8;
    border-style: solid;
    border-bottom-width: 0.5px;
    border-top-width: 0.5px;
    border-right-width: 0;
    border-left-width: 0;
    color: #122870;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 0.95rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    :hover{
      cursor: pointer;
      background: #f7f7f7;
  }

`