
import React, { useContext } from "react"
import Header from "../../Components/Header/Header"
import { Controller } from "react-hook-form"
import { useForm } from "react-hook-form"
import GlobalStateContext from "../../context/GlobalStateContext"
import Menu from "../../Components/Menu/Menu"
import LogoImg from '../../assets/logo.png'
import ProtectToken from "../../Hooks/protect"
import { registerLeaguer } from "../../services/authServices"
import { TextField, InputLabel, FormControl, MenuItem, Select } from "@mui/material"
import { Container, Globaldiv, MenuDiv, H1, Main, SegundaColuna, PrimeiraColuna, ButtonStyle, Img, Logo } from "./Styled"
import Background from "../../assets/backgroundimage.png"
import UseRequestData from "../../Hooks/UseRequestData"
import { BASE_URL } from "../../Constants/Base_URL"
import {alerts} from "../../Constants/Alerts"

const SignUp = () => {
  ProtectToken()

  const { register, handleSubmit, control } = useForm();
  const { menu, userId } = useContext(GlobalStateContext);
  const [data] = UseRequestData([], `${BASE_URL}/team`)
  const [data2] = UseRequestData([], `${BASE_URL}/user`)

  const users = data2.getSystemUser
  const teamss = data.teams

  const onSubmitRegister = async (data) => {
    const {
      name,
      email,
      team,
      stage,
      technology,
      language,
      responsible,
      profession
    } = data;
    const body = {
      name,
      email,
      team,
      stage,
      technology,
      language,
      responsible,
      profession,
      SYSTEM_USER_id: userId
    };


    try {
      const { data: response } = await registerLeaguer(body);
      alerts("success", "Cadastro realizado com sucesso!")
    } catch (err) {
      alerts("error", "Erro ao cadastrar Leaguer!")
    }
  }

  return (
    <Main>
      <Header />
      <MenuDiv>{menu ? <Menu /> : null}</MenuDiv>

      <Globaldiv>

        <form onSubmit={handleSubmit(onSubmitRegister)}>
          <Logo src={LogoImg} alt="Logo Meta" />

          <H1>Cadastro de Leaguer</H1>

          <Container>
            <PrimeiraColuna>
              <TextField
                id="outlined-basic"
                label="Nome"
                required
                variant="outlined"
                name="name"
                {...register("name")}
                sx={{ width: 475 }}
              />

              <TextField
                id="outlined-basic"
                label="E-mail"
                required
                variant="outlined"
                name="email"
                {...register("email")}
                sx={{ width: 475 }}
              />

              <TextField
                id="outlined-basic"
                label={"Tecnologia"}
                required
                variant="outlined"
                sx={{ width: 475 }}
                name="technology"
                {...register("technology")}
              />

              <TextField
                id="outlined-basic"
                label="Idioma"
                required
                variant="outlined"
                sx={{ width: 475 }}
                name="language"
                {...register("language")}
              />



            </PrimeiraColuna>

            <SegundaColuna>
              <FormControl sx={{ width: 475 }}>
                <InputLabel>Turma</InputLabel>
                <Controller
                  name="team"
                  control={control}
                  render={({ field }) => (
                    <Select label="Turma" {...field}>
                      {teamss?.map((data) => {
                        return <MenuItem value={data.id} label={data.id}>{data.team}</MenuItem>
                      })}
                    </Select>
                  )}
                />
              </FormControl>

              <FormControl sx={{ width: 475, borderRadius: 50 }} >
                <InputLabel id="Fase" >Fase</InputLabel>
                <Controller
                  name="stage"
                  required
                  control={control}
                  render={({ field }) => (
                    <Select label="Fase" {...field}>
                      <MenuItem value={"Introdução"} label={"Introdução"}>Introdução</MenuItem>
                      <MenuItem value={"Lab"} label={"Lab"}>Labs</MenuItem>
                      <MenuItem value={"Beta"} label={"Beta"}>Beta</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>

              <FormControl sx={{ width: 475, borderRadius: 50 }}>
                <InputLabel id="Profissão">Profissão</InputLabel>
                <Controller
                  name="profession"
                  required
                  control={control}
                  render={({ field }) => (
                    <Select label="Profissão" {...field}>
                      <MenuItem value={"BI-Analista de Business Intelligence"} label={"BI-Analista de Business Intelligence"}>BI-Analista de Business Intelligence</MenuItem>
                      <MenuItem value={"Cientista de dados"} label={"Cientista de dados"}>Cientista de dados</MenuItem>
                      <MenuItem value={"Back-end"} label={"Back-end"}>Back-end</MenuItem>
                      <MenuItem value={"FullStack"} label={"FullStack"}>FullStack</MenuItem>
                      <MenuItem value={"Administrador de sistemas"} label={"Administrador de sistemas"}>Administrador de sistemas</MenuItem>
                      <MenuItem value={"Administrador de rede"} label={"Administrador de rede"}>Administrador de rede</MenuItem>
                      <MenuItem value={"Segurança da informação"} label={"Segurança da informação"}>Segurança da informação</MenuItem>
                      <MenuItem value={"Computação em nuvem"} label={"Computação em nuvem"}>Computação em nuvem</MenuItem>
                      <MenuItem value={"other"} label={"other"}>Outra</MenuItem>
                    </Select>
                  )}

                />
              </FormControl>
              <FormControl sx={{ width: 475, borderRadius: 50 }} >
                <InputLabel id="Responsavel" >Responsavel</InputLabel>
                <Controller
                  name="responsible"
                  required
                  control={control}
                  render={({ field }) => (
                    <Select label="Responsavel" {...field}>
                      {users?.map((use) => {
                        return <MenuItem value={use.id} label={use.id}>{use.name}</MenuItem>
                      })}
                    </Select>
                  )}
                />
              </FormControl>

            </SegundaColuna>
          </Container>

          <ButtonStyle>CADASTRAR</ButtonStyle>
        </form>
        <div>
          <Img alt="Foto de fundo" src={Background} />
        </div>
      </Globaldiv>
    </Main>
  );
};

export default SignUp;
