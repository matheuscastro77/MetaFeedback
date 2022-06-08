import React, { useContext, useEffect } from 'react'
import GlobalStateContext from '../../context/GlobalStateContext'
import { useForm } from "react-hook-form"
import { Controller } from "react-hook-form"
import Menu from '../../Components/Menu/Menu'
import Header from "../../Components/Header/Header";
import FormControl from "@mui/material/FormControl";
import { MenuItem, Select, InputLabel, TextField } from '@mui/material'
import { InfoLeaguer, P1, P2, DivInfoLeaguer, DivBackground, Div, ColumnOne, ColumnTwo, Container, MenuDiv, ButtonStyle, GlobalDiv } from './Styled'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../../Constants/Base_URL'
import UseRequestData from '../../Hooks/UseRequestData'
import axios from 'axios'
import ProtectToken from '../../Hooks/protect'
import { alerts } from '../../Constants/Alerts'


const EditLeaguer = () => {

    ProtectToken()

    const params = useParams()
    const navigate = useNavigate()

    const { register, handleSubmit, control } = useForm();
    const { menu, userRole, setIsModalVisible } = useContext(GlobalStateContext)
    const [data] = UseRequestData([], `${BASE_URL}/leaguer`)
    const [data2] = UseRequestData([], `${BASE_URL}/user`)
    const [data3] = UseRequestData([], `${BASE_URL}/team`)

    const users = data2.getSystemUser
    const teamss = data3.teams

    const editLeaguer = (data) => {
        axios
            .put(`${BASE_URL}/profile/update/${params.id}`, data, { headers: { Authorization: localStorage.getItem("token") } })
            .then((res) => {
                alerts("success", "Perfil atualizado!")
            })
            .catch((err) => {
                alerts("error", "Erro ao atualizar perfil!")
            })

    }

    const onSubmitEdit = async (data) => {
        const {
            name,
            email,
            team,
            technology,
            language,
            stage,
            responsible,
            profession,
            role
        } = data;
        const body = {
            name,
            email,
            team,
            technology,
            language,
            stage,
            responsible,
            profession,
            role
        };
        try {
            const { data: response } = await editLeaguer(body);
            alerts("success", "Leaguer editado com sucesso!")
        } catch (err) {
        }
    };

    useEffect(()=>{
        if( userRole === 'GESTOR'){
            navigate('/home')
            setIsModalVisible(false)
            alerts("error", "Não autorizado! Você não tem autorização para editar Leaguer!")
        }
    },[navigate])

    return (
        <>
            <Header />
            <MenuDiv>
                {menu ? <Menu /> : null}
            </MenuDiv>
            <GlobalDiv>
                <Div>
                    {data.map((leaguer) => {
                        if (params.id === leaguer._id) {
                            return <>
                                <h2>Informações do Leaguer</h2>
                                <DivInfoLeaguer>
                                    <InfoLeaguer>
                                        <P1>Nome:</P1> <P2>{leaguer._name}</P2>
                                        <P1>Email:</P1> <P2>{leaguer._email}</P2>
                                        <P1>Tecnologias:</P1> <P2>{leaguer._technology}</P2>
                                        <P1>Linguages:</P1> <P2>{leaguer._language}</P2>
                                    </InfoLeaguer>
                                    <InfoLeaguer>
                                        <P1>Turma:</P1> <P2>{teamss?.map((team) => {
                                            if (team.id === leaguer?._team) {
                                                return <P2>{team.team}</P2>
                                            }
                                        })}</P2>
                                        <P1>Fase:</P1> <P2> {leaguer._stage}</P2>
                                        <P1>Responsável:</P1> <P2>{users?.map((user) => {
                                            if (user.id === leaguer?._responsible) {
                                                return <P2>{user.name}</P2>
                                            }
                                        })}</P2>
                                        <P1>Profissão:</P1> <P2>{leaguer._profession}</P2>
                                    </InfoLeaguer>
                                </DivInfoLeaguer>
                            </>
                        }
                    })}

                    <form onSubmit={handleSubmit(onSubmitEdit)}>
                        <h2>EDITAR LEAGUER</h2>

                        <Container>
                            <ColumnOne>
                                <TextField
                                    id="outlined-basic"
                                    label="Nome"
                                    required
                                    variant="outlined"
                                    sx={{ width: 425 }}
                                    name="name"
                                    {...register("name")}
                                />

                                <TextField
                                    id="outlined-basic"
                                    label={"Email"}
                                    required
                                    variant="outlined"
                                    sx={{ width: 425 }}
                                    name="email"
                                    {...register("email")}
                                />

                                <TextField
                                    id="outlined-basic"
                                    label={"Tecnologia"}
                                    required
                                    variant="outlined"
                                    sx={{ width: 425 }}
                                    name="technology"
                                    {...register("technology")}
                                />

                                <TextField
                                    id="outlined-basic"
                                    label="Idioma"
                                    required
                                    variant="outlined"
                                    sx={{ width: 425 }}
                                    name="language"
                                    {...register("language")}
                                />

                            </ColumnOne>

                            <ColumnTwo>
                                <FormControl sx={{ width: 425, borderRadius: 50 }} >
                                    <InputLabel id="Turma" >Turma</InputLabel>
                                    <Controller
                                        name="team"
                                        required
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

                                <FormControl sx={{ width: 425, borderRadius: 50 }} >
                                    <InputLabel id="Fase" >Fase</InputLabel>
                                    <Controller
                                        name="stage"
                                        required
                                        control={control}
                                        render={({ field }) => (
                                            <Select label="Fase" {...field}>
                                                <MenuItem value={"Introdução"} label={"Introdução"}>Introdução</MenuItem>
                                                <MenuItem value={"Lab"} label={"Lab"}>Lab</MenuItem>
                                                <MenuItem value={"Beta"} label={"Beta"}>Beta</MenuItem>
                                            </Select>
                                        )}
                                    />
                                </FormControl>

                                <FormControl sx={{ width: 425, borderRadius: 50 }} >
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

                                <FormControl>
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


                            </ColumnTwo>
                        </Container>
                        <ButtonStyle>EDITAR</ButtonStyle>
                    </form>
                </Div>
                <DivBackground>

                </DivBackground>
            </GlobalDiv>
        </>
    )
}

export default EditLeaguer



