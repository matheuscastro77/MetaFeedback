import React, { useContext } from 'react'
import { TextField } from '@mui/material'
import GlobalStateContext from '../../context/GlobalStateContext'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import LogoImg from '../../assets/logo.png'
import ProtectToken from '../../Hooks/protect'
import { MenuDiv, H1, FormStyle, ColumnOne, ButtonStyle, Container, Logo, Img } from './Styled'
import { alerts } from '../../Constants/Alerts'
import { useForm } from 'react-hook-form'
import { sendMail } from '../../services/authServices'

const SendForm = () => {
    ProtectToken()


    const { register, handleSubmit } = useForm();
    const { menu, form } = useContext(GlobalStateContext)
    const formu = form.form

    const baseVercel = "https://meta-feedback.vercel.app/"

    

    const onSubmitSendMail = async (data) => {
        const {
            name,
            email,
            body
        } = data;
        const bodyy = {
            name,
            email,
            body
        };
        try {
          const { data: response } = await sendMail(bodyy)
          alerts("success", "Email enviado com sucesso!")
        } catch (err) {
          alerts("error", "Erro ao cadastrar!")
          console.log('err', err)
        }
      };

    return (
        <div>
            <Header />
            <MenuDiv>
                {menu ? <Menu /> : null}
            </MenuDiv>

            <Container>
                <Logo src={LogoImg} alt="Logo Meta" />
                <H1>Envio de Formulário</H1>
                <FormStyle  onSubmit={handleSubmit(onSubmitSendMail)}>

                    <ColumnOne>
                        <TextField
                            id="outlined-basic"
                            label="Nome"
                            variant="outlined"
                            sx={{ width: 400 }}
                            name="name"
                            {...register("name")}
                        />
                        <TextField
                            id="outlined-basic"
                            label="E-mail"
                            defaultValue={formu._send_email}
                            variant="outlined"
                            sx={{ width: 400 }}
                            name="email"
                            {...register("email")}
                        />

                        <TextField
                            id="outlined-basic"
                            label="Link do Formulário"
                            defaultValue={`${baseVercel}form/update/${formu._hashlink}`}
                            variant="outlined"
                            sx={{ width: 400 }}
                            name="body"
                            {...register("body")}
                        />
                    </ColumnOne>


                    <ButtonStyle>ENVIAR</ButtonStyle>
                </FormStyle>
            </Container>

            <Img></Img>
        </div>
    )
}

export default SendForm