import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToSignUpManager } from '../../Routes/Coordinates'
import { goToSignUp } from '../../Routes/Coordinates'
import {goToSignUpTeam } from '../../Routes/Coordinates'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import ProtectToken from '../../Hooks/protect'
import Group from '../../assets/group.png'
import Leaguer from '../../assets/leaguer.png'
import Mentor from '../../assets/mentor.png'
import background from "../../assets/backgroundimage.png";
import { Container, ContainerButton, MenuDiv, Img, Button, Icon1, Icon2 } from './Styled'
import GlobalStateContext from '../../context/GlobalStateContext'

const SingUpOptions = () => {

    ProtectToken()
    const Navigate = useNavigate()
    const { menu } = useContext(GlobalStateContext)

    const onClickSignUpManager = () => {
        goToSignUpManager(Navigate)
    }

    const onClickSignUpTeam = () => {
        goToSignUpTeam(Navigate)
    }

    const onClickSignUpLeaguer = () => {
        goToSignUp(Navigate)
    }

    return (
        <>
            <Header />
            <MenuDiv>
                {menu ? <Menu /> : null}
            </MenuDiv>
            <Container>
                <div><Img alt="Imagem de fundo" src={background} /></div>
                <ContainerButton>
                    <p>Quem você deseja cadastrar?</p>
                    <div>
                        <nav>
                            <Button onClick={onClickSignUpManager}><Icon2 alt="Ícone de gestor/mentor" src={Mentor} /></Button>
                            <h1 onClick={onClickSignUpManager}>MENTOR/GESTOR</h1>
                        </nav>
                        <nav>
                            <Button onClick={onClickSignUpTeam}><Icon1 alt="Ícone de grupo" src={Group} /></Button>
                            <h1 onClick={onClickSignUpTeam}>TURMA</h1>
                        </nav>
                        <nav>
                            <Button onClick={onClickSignUpLeaguer}><Icon2 alt="Ícone de leaguer" src={Leaguer} /></Button>
                            <h1  onClick={onClickSignUpLeaguer}>LEAGUER</h1>
                        </nav>
                    </div>
                </ContainerButton>
            </Container>
        </>
    )
}

export default SingUpOptions