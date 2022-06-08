import React, { useContext, useEffect } from "react"
import GlobalStateContext from "../../context/GlobalStateContext"
import Header from "../../Components/Header/Header"
import Menu from "../../Components/Menu/Menu"
import LogoImg from '../../assets/logo.png'
import ProtectToken from '../../Hooks/protect'
import {TextField} from "@mui/material"
import { Container, H1, Globaldiv, MenuDiv, Main, Form, PrimeiraColuna, Button, Img, Logo } from "./Styled"
import { alerts } from "../../Constants/Alerts"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { createTeam } from "../../services/authServices"

const SignUpTeam = () => {

    ProtectToken()

    const navigate = useNavigate()

    const { menu, userRole, userId } = useContext(GlobalStateContext)
    const { register, handleSubmit } = useForm();

    const onSubmitRegisterTeam = async (data) => {
        const {
            team,
        } = data;
        const body = {
            team,
            SYSTEM_USER_id : userId
        };
        try {
          const { data: response } = await createTeam(body)
          alerts("success", "Cadastro realizado com sucesso!")
        } catch (err) {
          alerts("error", "Erro ao cadastrar!")
        }
      };

    useEffect(() => {
        if (userRole !== 'ADMINISTRATOR') {
          navigate('/home')
          alerts("error", "Somentes ADMINS podem acessar essa página!")
        }
      }, [navigate])
    

    return (
        <Main>
            <Header />
            <MenuDiv>
                {menu ? <Menu /> : null}
            </MenuDiv>
            <Globaldiv>
                <Form onSubmit={handleSubmit(onSubmitRegisterTeam)}>
                <Logo src={LogoImg} alt="Logo Meta" />
                    <H1>Cadastro de Turma</H1>

                    <Container>
                        <PrimeiraColuna>
                            <TextField
                                id="outlined-basic"
                                label="Nome da Turma"
                                variant="outlined"
                                sx={{ width: 475 }}
                                name="team"
                                {...register("team")}
                            />
                            <Button>CADASTRAR</Button>
                        </PrimeiraColuna>
                    </Container>
                </Form>

                <Img></Img>
            </Globaldiv>
        </Main>
    )
}

export default SignUpTeam

