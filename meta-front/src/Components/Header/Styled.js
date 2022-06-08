import styled from 'styled-components'

export const Container = styled.div`
    height: 70px;
    background-color:#122870;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Img = styled.img`
    height: 45px;
    margin-top: 1rem;
    margin: 0px 0px 0px 35px;
    z-index: 5;
:hover{
    cursor: pointer;
    transform: scale(1.1);
}
`

export const Button = styled.button`
    background-color:#122870 ;
    border: 0px;
    margin-right: 10px;

:hover{
    cursor: pointer;
}
`

