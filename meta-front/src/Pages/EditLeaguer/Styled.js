import styled from 'styled-components'
import background from "../../assets/backgroundimage.png";

export const GlobalDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
h2 {
  margin-top: 3%;
  color:#122870;
}
form {
  display:flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2.5%;
  align-items: center;
}

`

export const InfoLeaguer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50%;
  align-items: center;
`

export const DivInfoLeaguer = styled.div`
  display: flex;
  min-width: 65%;
  padding: 15px;
  border-radius: 15px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  `

export const P1 = styled.span`
  font-weight: 700;
  color:#122870;
  font-size: 1rem;
  margin-top: 1.5%;
`

export const P2 = styled.span`
  color: black;
  font-size: 1rem;
  margin-top:  1.5%;
`

export const Div = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: -3%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap:30px;
  margin-top: 2%;
`
export const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  gap:20px;
`
export const ColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap:20px;
`
export const DivBackground = styled.div`
  background-image: url(${background}) ;
  background-size: cover;
  width: 45%;
  height: 92.5vh;
`
export const MenuDiv = styled.div`
    width: 100%;
    position: fixed;
    margin-left: 85%;
    z-index: 1;
`
export const ButtonStyle = styled.button `
  background-color: #122870;
  margin-top: 7%;
  height: 5vh;
  border: 0px;
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