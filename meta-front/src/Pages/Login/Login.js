import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { goToHome } from "../../Routes/Coordinates"
import { Main, Body, Container, Logo2, ContainerForm, Logo, Tittle, Formulario, H1, H2, Button } from "./Styled"
import { InputAdornment, OutlinedInput, IconButton, MenuItem, Select, FormControl, InputLabel, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useForm } from "react-hook-form"
import { userLogin } from "../../services/authServices"
import GlobalStateContext from "../../context/GlobalStateContext"
import jwt_decode from "jwt-decode"
import { alerts } from '../../Constants/Alerts'

function Login() {

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const { setUserId, setMenu, values, setValues, setUserRole, setIsModalVisible } = useContext(GlobalStateContext)

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

  const onClickHome = () => {
    goToHome(navigate);
  };

  const onSubmitLogin = async (data) => {
    const { email, senha } = data;
    const body = {
      email,
      password: senha,
    };

    try {
      const { data: response } = await userLogin(body);
      localStorage.setItem("token", response.token);
      onClickHome();
      const token = localStorage.getItem("token")
      var decoded = jwt_decode(token);
      setUserId(decoded.id)
      setUserRole(decoded.role)
      setMenu(false)
      setIsModalVisible(false)

    } catch (err) {
      alerts("error", "E-mail ou senha inválidos!")
    }
  };

  return (
    <Main>
      <Body>
        <Container>
          <Logo2 />
        </Container>

        <ContainerForm>
          <Logo></Logo>
          <Tittle>
            <H1>Bem-vindo!</H1>
            <H2>Faça seu login.</H2>
          </Tittle>
          <Formulario onSubmit={handleSubmit(onSubmitLogin)}>
            <TextField
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              sx={{ width: 475 }}
              name="email"
              {...register("email")}
            />

            <FormControl sx={{ width: 475 }} variant="outlined">
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
                name="senha"
                {...register("senha")}
              />
            </FormControl>
            <Button>ENTRAR</Button>
          </Formulario>
        </ContainerForm>
      </Body>
    </Main>
  );
}

export default Login;
