import styled from 'styled-components'
import Form from '../../assets/Form.png'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction:column;
  justify-content: center;
  margin-top: 8%;
p{
  font-size: 2rem;
  font-weight: semibold;
  margin-top: 1%;
  margin-bottom: 2%;
}
`
export const Logo = styled.img`
  width: 10%;
`

export const Img = styled.div`
    background-image: url(${Form});
    background-size: contain;
    width: 32%;
    height: 92.5vh;
    position: fixed;
    top: 41%;
    z-index: 100;
    left: 70%;
`

export const MenuDiv = styled.div`
    width: 100%;
    position: fixed;
    margin-left: 85%;
    z-index: 1;
`
export const FormStyle = styled.form`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const ButtonStyle = styled.button`
  background-color: #97C93C;
  border-radius: 8px;
  height: 5vh;
  border: 0px;
  color: #000C35;
  font-weight: 500;
  font-size: 1.1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 14rem;
  margin-top: 2rem;
:hover{
  cursor: pointer;
  font-size: 1.15rem;
  transition: all 1s ease 0s; 
}
`
export const H1 = styled.h1`
  font-size: 2rem;
  font-weight: semibold;
  margin-top: 2%;
  margin-bottom: 2%;
`
