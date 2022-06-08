import styled from 'styled-components'
import { IoIosSearch } from 'react-icons/io'

export const MenuDiv = styled.div`
    width: 100%;
    position: fixed;
    margin-left: 85%;
    z-index: 1;
`

export const H1 = styled.h1`
    font-weight: 600;
    font-size: 1rem;
    margin-left: 5%;
    margin-top: 1.5%;
`

export const P = styled.p`
    font-weight: 400;
    font-size: 1rem;
    color: #636B6F;
    margin-left: 5%;
    margin-top: 1.5%;
`

export const Search = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    height: 20%;
label {
    display: flex;
    position: relative;
}
input {
    width: 83vw;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 7px;
    font-size: 16px;
    padding-left: 2.5%;
    outline: 0px;

    @media screen and (max-width: 1430px) {
        padding-left: 4%;
}

@media screen and (max-width: 1500px) {
    width: 76vw;
}

::placeholder,
::-webkit-input-placeholder {
    color: #959595;
    font-size: 14px
}

}
`
export const Icon = styled(IoIosSearch)`
    position: absolute;
    right: 98%;
    top: 8px;
    width: 20px;
    height: 20px;
    color: #636B6F;
    @media screen and (max-width: 1430px) {
    right: 97%;
}
`
export const ContainerInput = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    width: 100%;
    gap: 10px;
    @media screen and (max-width: 1500px) {
    width: 98%;
    gap: 10px;
}
`
export const ContainerCards = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    margin-top:30px;
    margin-top: 2%;
`

export const ListCards = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 30px;
    column-gap: 15px;

@media screen and (max-width: 1500px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr)
}

@media screen and (max-width: 1110px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 20px;
    width:80%;
}
`

export const ContainerPages= styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    bottom: 4%;
`

export const ButtonPagination = styled.button`
    border: 0px;
    background-color: #122870;
    color: white;
    font-weight: 600;
    border-radius: 50%;
    width: 4vh;
    margin: 5px;
    height: 4vh;
:hover{
    cursor: pointer;
}
:focus{
        background-color: #0056A8;
    }
`
export const StyleSelect = styled.select`
    width: 100%;
    height: 2.5rem;
    border-radius: 5px;
    border-color: gray;
    
    :active{
        outline: 0px;
    }
`