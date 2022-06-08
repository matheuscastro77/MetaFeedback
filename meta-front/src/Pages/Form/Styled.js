import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #122870;
    color: #F5F5F5;
img{
    margin-top: 3rem;
    margin-bottom: 3rem;
    width: 15rem;
}
form{
    display: flex;
    flex-direction: column;
    align-items: center;
}
`
export const FormGroup = styled.div`
  display: flex;
`
export const Input = styled.input`
    color: white;
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid #F5F5F5;
    height: 5rem;
    width: 30rem;
    display: flex;
    padding: 0px 0px 0px 15px;
&:hover {
    color: white;
    background-color: transparent;
}
&:focus {
    outline: none;
    background-color: transparent;
}
&::placeholder {
  color: white;
}
`

export const H1 = styled.h2`
    color: white;
    text-align: center;
    margin-bottom: 4%;
`

export const Input10 = styled.input`
    color: white;
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid #F5F5F5;
    height: 7rem;
    width: 30rem;
    display: flex;
    padding: 0px 0px 0px 15px;
&:hover {
    color: white;
    background-color: transparent;
}
&:focus {
    outline: none;
    background-color: transparent;
}
&::placeholder {
  color: white;
}
`

export const Group = styled.div`
    display: flex;
    flex-direction: column;
`
export const ContainerReq = styled.div`
    display: flex;
    gap: 10rem;
    margin-bottom: 2rem;
`
export const Main = styled.div`
    display: flex;
    flex-direction: column;
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
  margin-bottom: 5%;
:hover{
  cursor: pointer;
  font-size: 1.15rem;
  transition: all 1s ease 0s; 
}

`