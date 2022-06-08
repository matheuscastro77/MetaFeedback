import styled from 'styled-components'
import background from '../../assets/background.svg'
import logo from '../../assets/logo.png'
import grupoLogo from '../../assets/grupoLogo.svg'

export const Main = styled.div`
  background-image: url(${background}) ;
  background-size: cover ;
  min-height: 100vh ;
  display: flex;
  justify-content: center;
`

export const Body = styled.body`
  background-color: transparent;
  width: 90%;
  height: 77vh;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Container = styled.div`
  bottom: 0;
  width: 40%;
  display: flex;
  justify-content: center;
  margin-top: 10.5%;
`

export const Logo2 = styled.div`
  background-image: url(${grupoLogo}) ;
  background-size: cover;
  width: 65%;
  height: 22vh;
`

export const ContainerForm = styled.div`
  background-color: white;
  width: 35%;
  height: 77vh;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.div`
  background-image: url(${logo}) ;
  background-size: contain;
  width: 37.1%;
  height: 8.5%;
  margin-top: 20%;
`

export const Tittle = styled.div`
  text-align: center;
`

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap:20px;
`

export const H1 = styled.h1`
  font-weight: 500;
`

export const H2 = styled.h2`
  font-weight: 400;
`

export const Button = styled.button`
  background-color: #122870;
  margin-top: 4%;
  height: 5vh;
  width: 100%;
  border: 0px;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  :hover{
    cursor: pointer;
    font-size: 1.1rem;
    transition: all 1s ease 0s;
  }
`
