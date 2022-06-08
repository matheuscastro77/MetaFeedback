import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
nav{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`

export const MenuDiv = styled.div`
    width: 100%;
    position: fixed;
    margin-left: 85%;
    z-index: 1;
`

export const Img = styled.img`
  height: 92.5%;
  position: absolute;
  left: 0;
`

export const ContainerButton = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-left: 40%;
margin-top: 8%;
div{
    display: flex;
    gap: 5rem;
}
p{
  font-size: 2rem;
  line-height: 10px;
  font-weight: semibold;
  margin-bottom: 8%;
}
h1{
    font-weight: 550;
    font-size: 0.9rem;
    line-height: 160%;
:hover{
    cursor: pointer;
}
}
`
export const Button = styled.button`
    background:#97C93C ;
    border: transparent;
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
:hover{
    cursor: pointer;
img{
    transform: scale(1.1);
    transition: all 0.5s;
}
}
`
export const Icon1 = styled.img`
    width: 7rem;
`
export const Icon2 = styled.img`
    width: 4rem;
`
