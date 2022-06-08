import styled from "styled-components";

export const Main = styled.div`
  background-size: cover;
  min-height: 100vh;
`

export const MenuDiv = styled.div`
    width: 100%;
    position: fixed;
    margin-left: 85%;
    z-index: 1;
`
export const LogoStyled = styled.img`
  width: 100px;
`

export const H1 = styled.h1`
  font-size: 2rem;
  font-weight: semibold;
  margin-top: 2%;
  margin-bottom: 2%;
`

export const Globaldiv = styled.div`
  display: flex;
p {
  font-size: 2rem;
  line-height: 10px;
  font-weight: semibold;
  margin-bottom: 4%;
}
form {
  display:flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2%;
  align-items: center;
  margin-top: 7%;
}
`
export const Img = styled.img`
  height: 92.7%;
  position: absolute;
  right: 0;
`

export const PrimeiraColuna = styled.div`
  display: flex;
  flex-direction: column;
  gap:20px;
`
export const SegundaColuna = styled.div`
  display: flex;
  flex-direction: column;
  gap:20px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap:30px;
`
export const ButtonStyle = styled.button `
  background-color: #122870;
  margin-top: 7%;
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
export const InputFile = styled.input`
  display: none;
`
export const Label = styled.label`
  padding: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  color:  #696969;
  font-weight: 380;
  width: 28.5rem;
  height: 30px;
  border: 1px solid #C1C1C1;
  border-radius: 4px;
  padding-top: 15px;
:hover{
  cursor: pointer;
}
`
export const Logo = styled.img`
  width: 15%;
`