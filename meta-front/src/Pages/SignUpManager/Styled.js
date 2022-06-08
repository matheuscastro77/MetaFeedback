import styled from "styled-components";
import manegerBackground from "../../assets/manegerBackground.svg";

export const Main = styled.div`
  background-size: cover;
  min-height: 100vh;
  
`
export const Logo = styled.img`
  width: 15%;
`
export const MenuDiv = styled.div`
    width: 100%;
    position: fixed;
    margin-left: 85%;
    z-index: 1;
`

export const Globaldiv = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-y: hidden;
  
p{
  font-size: 2rem;
  line-height: 10px;
  font-weight: semibold;
  margin-bottom: 4%;
}
`

export const H1 = styled.h1`
  font-size: 2rem;
  font-weight: semibold;
  margin-top: 2%;
  margin-bottom: 2%;
`

export const PrimeiraColuna = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:20px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  width: 63%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Cadastrar = styled.div`
  display: flex;
  justify-content: center;
`

export const Button = styled.button `
  background-color: #122870;
  margin-top: 0%;
  height: 5vh;
  border: 0px;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 16rem;
  margin-top: 2rem;

  :hover{
    cursor: pointer;
    font-size: 1.1rem;
    transition: all 1s ease 0s;
    
  }
`
export const Img = styled.div`
  background-image: url(${manegerBackground});
  background-size: contain;
  width: 37%;
  height: 92.5vh;
`