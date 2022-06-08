import styled from 'styled-components'
import { Box, Card} from '@mui/material'

export const Container = styled(Card)`
    display: flex;
    background-color: #def2fe;
    flex-direction: column;
    max-width:450px;
    max-height: 160px;
    font-size: 15px;
  @media screen and (max-width: 824px) {
    width:300px;
}
`

export const P2 = styled.span`
  color: black;
  font-size: 14px;
  margin-top:  1.5%;
`

export const Content = styled.div`
  display: flex;
  
`
export const ContainerOptions = styled(Box)`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  column-gap: 0;
  margin-right: 15%;
  h1{
    color: #0056A8;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: -2px;
}

@media screen and (max-width: 1255px) {
  margin-right: 5%;
}
@media screen and (max-width: 1125px) {
  margin-right: 0;
}
`
export const Option = styled.div`
    display: flex;
    align-items: center;
    line-height: 0;
    margin-bottom: -1px;
`
export const AdormentStyle = styled.div`
   display: flex;
   align-items: center;
   margin-left: -10%;
   @media screen and (max-width: 1110px) {
   margin-left: 10%;
}
@media screen and (max-width: 825px) {
  margin-left: 5%;
} 
`
export const ContainerAvatar = styled.div`
  @media screen and (max-width: 905px) {
  margin-left: -10px;
  margin-right: -20px;
} 
  @media screen and (max-width: 825px) {
  margin-left: -15px;
} 
`

export const Button = styled.button`
  border: 0px;
  background-color: white;

  :hover {
    cursor: pointer;
    transition: all 0.5s ease 0s;
    transform: scale(1.1);
  }
`

export const Img = styled.img`
  height: 3vh;
`