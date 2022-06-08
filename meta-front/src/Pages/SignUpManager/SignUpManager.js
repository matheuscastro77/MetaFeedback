import React, { useContext, useEffect } from "react";
import Header from "../../Components/Header/Header";
import { InputAdornment, OutlinedInput, IconButton, MenuItem, Select, FormControl, InputLabel, TextField } from '@mui/material'
import GlobalStateContext from "../../context/GlobalStateContext";
import Menu from "../../Components/Menu/Menu";
import ProtectToken from "../../Hooks/protect";
import { registerUserAdmin } from "../../services/authServices";
import { Controller, useForm } from "react-hook-form";
import LogoImg from '../../assets/logo.png'
import { Container, Globaldiv, H1, MenuDiv, Main, Form, PrimeiraColuna, Button, Img, Logo } from "./Styled"
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { alerts } from '../../Constants/Alerts'
import { useNavigate } from "react-router-dom";


const SignUpManager = () => {

  ProtectToken()

  const navigate = useNavigate()

  const { register, handleSubmit, control } = useForm();
  const { values, setValues, menu, userRole } = useContext(GlobalStateContext)

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }



  const onSubmitRegisterAdmin = async (data) => {
    const {
      name,
      email,
      password,
      role

    } = data;
    const body = {
      name,
      email,
      password,
      role
    };
    try {
      const { data: response } = await registerUserAdmin(body)
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

        <Form onSubmit={handleSubmit(onSubmitRegisterAdmin)}>
          <Logo src={LogoImg} alt="Logo Meta" />
          <H1>Cadastro de Mentor/Gestor</H1>
          <Container>
            <PrimeiraColuna>
              <TextField
                id="outlined-basic"
                label="Nome"
                variant="outlined"
                sx={{ width: 575 }}
                name="name"
                {...register("name")}
              />
              <TextField
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                sx={{ width: 575 }}
                name="email"
                {...register("email")}
              />
              <FormControl sx={{ width: 575 }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Senha"
                  name="password"
                  {...register("password")}
                />
              </FormControl>
              <FormControl sx={{ width: 575, borderRadius: 50 }} >
                <InputLabel id="Tipo de Usuário" >Tipo de Usuário</InputLabel>
                <Controller

                  name="role"
                  control={control}
                  render={({ field }) => (
                    <Select label="Tipo de Usuário" {...field}>
                      <MenuItem value={"GESTOR"} label={"GESTOR"}>GESTOR</MenuItem>
                      <MenuItem value={"MENTOR"} label={"MENTOR"}>MENTOR</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
              <Button>CADASTRAR</Button>
            </PrimeiraColuna>
          </Container>
        </Form>
        <Img></Img>
      </Globaldiv>
    </Main>
  )
}

export default SignUpManager
