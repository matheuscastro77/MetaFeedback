import React, { useContext } from "react";
import { TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import GlobalStateContext from "../../context/GlobalStateContext";
import { Controller, useForm } from "react-hook-form";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import { createForm } from "../../services/authServices";
import LogoImg from "../../assets/logo.png";
import { MenuDiv, FormStyle, H1, ColumnOne, ColumnTwo, ButtonStyle, Container, Logo, Img } from "./Styled";
import { BASE_URL } from "../../Constants/Base_URL";
import UseRequestData from "../../Hooks/UseRequestData";
import { alerts } from '../../Constants/Alerts'
import ProtectToken from '../../Hooks/protect'
import { useNavigate } from "react-router-dom";

const CreateFormOne = () => {

  ProtectToken()
  const navigate = useNavigate()

  const { menu, userId, setForm, form } = useContext(GlobalStateContext);
  const { register, handleSubmit, control } = useForm();

  const [data2] = UseRequestData([], `${BASE_URL}/leaguer`)

  const leaguerId = localStorage.getItem("idLeaguer")

  const filterName = data2?.filter((user) => { if (leaguerId === user?._id) return user })
  const mapFilterName = filterName.map((us) => us._name)
  const nameLeaguer = mapFilterName[0]

  const onSubmitCreate = async (data) => {
    const {
      send_email,
      LEAGUER_id,
      project,
      time,
      technology,
      type_hiring,
    } = data;
    const body = {
      send_email,
      LEAGUER_id,
      project,
      time,
      technology,
      type_hiring,
      SYSTEM_USER_id : userId
    };
    try {
        const { data: response } = await createForm(body);
        alerts("success", "Formulário criado com sucesso!")
        setForm(response)
        navigate('/sendForm')
    } catch (err) {
        alerts("error", "Erro ao criar formulário!")
    }
};

  return (
    <div>
      <Header />
      <MenuDiv>{menu ? <Menu /> : null}</MenuDiv>

      <Container>
        <Logo src={LogoImg} alt="Logo Meta" />
        <H1>Criar Formulário de Feedback</H1>

        <FormStyle onSubmit={handleSubmit(onSubmitCreate)}>

          <ColumnOne>
            <FormControl sx={{ width: 400, borderRadius: 50 }}>
              <InputLabel id="Leaguer">Leaguer</InputLabel>
              <Controller
                name="LEAGUER_id"
                control={control}
                render={({ field }) => (
                  <Select label="Leaguer" {...field}>
                    <MenuItem value={leaguerId} label={leaguerId}>{nameLeaguer}</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="send_email"
              {...register("send_email")}
              sx={{ width: 400 }}
            />

          </ColumnOne>
          <ColumnTwo>
            <FormControl sx={{ width: 400, borderRadius: 50 }}>
              <InputLabel id="contratação">Contratação</InputLabel>
              <Controller
                name="type_hiring"
                control={control}
                render={({ field }) => (
                  <Select label="Contratação" {...field}>
                    <MenuItem value={"CLT"} label={"CLT"}>CLT</MenuItem>
                    <MenuItem value={"Estágio"} label={"CLT"}>Estágio</MenuItem>
                    <MenuItem value={"CNPJ"} label={"CLT"}>CNPJ</MenuItem>
                    <MenuItem value={"Contrato Temporário"} label={"CLT"}> Contrato Temporário</MenuItem>
                  </Select>
                )}
              />

            </FormControl>
            <TextField
              id="outlined-basic"
              label="Tempo de Formação"
              variant="outlined"
              sx={{ width: 400 }}
              name="time"
              {...register("time")}
            />

          </ColumnTwo>

          <ColumnTwo>
            <TextField
              id="outlined-basic"
              label="Projeto"
              variant="outlined"
              sx={{ width: 400 }}
              name="project"
              {...register("project")}
            />

            <TextField
              id="outlined-basic"
              label="Tecnologias"
              variant="outlined"
              sx={{ width: 400 }}
              name="technology"
              {...register("technology")}
            />
          </ColumnTwo>

          <ButtonStyle>CRIAR</ButtonStyle>
        </FormStyle>
      </Container>

      <Img></Img>
    </div>
  );
};

export default CreateFormOne
