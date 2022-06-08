import React, { useState } from "react"
import UseRequestData from "../../Hooks/UseRequestData"
import { BASE_URL } from "../../Constants/Base_URL"
import Logo from "../../assets/logometa.png"
import { Container, Group, Input, Input10, ContainerReq, Main, ButtonStyle, H1 } from "./Styled"
import { alerts } from "../../Constants/Alerts"
import { useForm } from "react-hook-form"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, InputLabel } from "@mui/material"

const Form = () => {

    const params = useParams()

    const { register, handleSubmit } = useForm();

    const [data2] = UseRequestData([], `${BASE_URL}/leaguer`)
    const [data] = UseRequestData([], `${BASE_URL}/form`)

    const url = window.location.href
    const selectUrl = url.split('update/')
    const selectedUrl = selectUrl[1]

    const forms = data.form
    const getLeaguer = forms?.find((user) => user._hashlink === selectedUrl);
    const getIdLeaguer = getLeaguer?._LEAGUER_id

    
    
    const [performance, setPerfomance] = useState('')
    const [ceremonies, setCeremonies] = useState('')
    const [commitment, setCommitment] = useState('')
    const [delivery_quality, setDelivery_quality] = useState('')
    const [leadership_ability, setLeadership_ability] = useState('')
    const [proactive, setProactive] = useState('')
    const [punctual, setPunctual] = useState('')
    const [team_work, setTeam_work] = useState('')
    const [work_under_pressure, setWork_under_pressure] = useState('')

    const onChangePerfomance = (event) => {
        setPerfomance(event.target.value)
    }

    const onChangeCeremonies = (event) => {
        setCeremonies(event.target.value)
    }

    const onChangeCommitment = (event) => {
        setCommitment(event.target.value)
    }

    const onChangeDelivery_quality = (event) => {
        setDelivery_quality(event.target.value)
    }

    const onChangeLeadership_ability = (event) => {
        setLeadership_ability(event.target.value)
    }

    const onChangeProactive = (event) => {
        setProactive(event.target.value)
    }

    const onChangePunctual = (event) => {
        setPunctual(event.target.value)
    }

    const onChangeTeam_work = (event) => {
        setTeam_work(event.target.value)
    }

    const onChangeWork_under_pressure = (event) => {
        setWork_under_pressure(event.target.value)
    }


    const editForm = (data) => {
        axios
            .put(`${BASE_URL}/form/update/${params.id}`, data, { headers: { Authorization: localStorage.getItem("token") } })
            .then((res) => {
                alerts("success", "Formulário preenchido")
            })
            .catch((err) => {
                console.log(err)
            })

    }

    const onSubmitUpdateForm = async (data) => {
        const {
            comment_performance,
            comment_delivery_quality,
            comment_team_work,
            comment_commitment,
            comment_punctual,
            comment_work_under_pressure,
            comment_ceremonies,
            comment_leadership_ability,
            comment_proactive,
            skills,
            general_considerations
        } = data;
        console.log("data", data)
        const body = {
            performance: performance,
            comment_performance,
            delivery_quality: delivery_quality,
            comment_delivery_quality,
            team_work: team_work,
            comment_team_work,
            commitment: commitment,
            comment_commitment,
            punctual: punctual,
            comment_punctual,
            work_under_pressure: work_under_pressure,
            comment_work_under_pressure,
            ceremonies: ceremonies,
            comment_ceremonies,
            leadership_ability: leadership_ability,
            comment_leadership_ability,
            proactive: proactive,
            comment_proactive,
            skills,
            general_considerations
        };

        console.log("body", body)
        try {
            const { data: response } = await editForm(body);
            alerts("success", "Formulário preenchido!")
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Container>
            <img src={Logo} alt="Logo Meta" />

            <form onSubmit={handleSubmit(onSubmitUpdateForm)}>
                <Main>
                {data2?.map((user) => {
                            if (user._id === getIdLeaguer) {
                                return <H1>Avaliação sobre {user._name}</H1>
                            }
                        })}
                    <ContainerReq>
                        
                        <Group>
                            <div>
                                <p>1. Demonstrou performance na entrega?</p>
                                <FormControl>
                                    <RadioGroup
                                        name="performance"
                                        onChange={onChangePerfomance}
                                        row
                                        required
                                    >
                                        <FormControlLabel value="Insuficiente" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Insuficiente" />
                                        <FormControlLabel value="Regular" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Regular" />
                                        <FormControlLabel value="Bom" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Bom" />
                                        <FormControlLabel value="Excelente" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Excelente" />
                                    </RadioGroup>
                                </FormControl>


                            </div>
                            <Input
                                placeholder={"Comentário"}
                                required
                                pattern={"^.{10,}$"}
                                title={"A descrição deve conter no mínimo 10 caracteres!"}
                                name={"comment_performance"}
                                {...register("comment_performance")}
                            />
                        </Group>
                        <Group>
                            <div>
                                <p>2. Entregou com qualidade?</p>
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="perfarmoce-value"
                                        name="delivery_quality"
                                        onChange={onChangeDelivery_quality}
                                        row
                                    >
                                        <FormControlLabel value="Insuficiente" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Insuficiente" />
                                        <FormControlLabel value="Regular" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Regular" />
                                        <FormControlLabel value="Bom" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Bom" />
                                        <FormControlLabel value="Excelente" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Excelente" />
                                    </RadioGroup>
                                </FormControl>

                            </div>
                            <Input
                                placeholder={"Comentário"}
                                required
                                pattern={"^.{10,}$"}
                                title={"A descrição deve conter no mínimo 10 caracteres!"}
                                name={"comment_delivery_quality"}
                                {...register("comment_delivery_quality")}
                            />
                        </Group>
                    </ContainerReq>

                    <ContainerReq>
                        <Group>
                            <div>
                                <p>3. Profissional proativo?</p>
                                <FormControl>
                                    <RadioGroup
                                        name="proactive"
                                        row
                                        onChange={onChangeProactive}
                                    >
                                        <FormControlLabel value="Insuficiente" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Insuficiente" />
                                        <FormControlLabel value="Regular" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Regular" />
                                        <FormControlLabel value="Bom" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Bom" />
                                        <FormControlLabel value="Excelente" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Excelente" />
                                    </RadioGroup>
                                </FormControl>

                            </div>
                            <Input
                                placeholder={"Comentário"}
                                required
                                pattern={"^.{10,}$"}
                                title={"A descrição deve conter no mínimo 10 caracteres!"}
                                name={"comment_proactive"}
                                {...register("comment_proactive")}
                            />
                        </Group>
                        <Group>
                            <div>
                                <p>4. Demonstrou comprometimento?</p>
                                <FormControl>
                                    <RadioGroup
                                        name="commitment"
                                        row
                                        control={<Radio />}
                                        onChange={onChangeCommitment}
                                    >
                                        <FormControlLabel value="Insuficiente" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Insuficiente" />
                                        <FormControlLabel value="Regular" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Regular" />
                                        <FormControlLabel value="Bom" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Bom" />
                                        <FormControlLabel value="Excelente" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Excelente" />
                                    </RadioGroup>
                                </FormControl>

                            </div>
                            <Input
                                placeholder={"Comentário"}
                                required
                                pattern={"^.{10,}$"}
                                title={"A descrição deve conter no mínimo 10 caracteres!"}
                                name={"comment_commitment"}
                                {...register("comment_commitment")}
                            />
                        </Group>
                    </ContainerReq>

                    <ContainerReq>
                        <Group>
                            <div>
                                <p>5. Sabe trabalhar em equipe?</p>
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="perfarmoce-value"
                                        name="team_work"
                                        row
                                        onChange={onChangeTeam_work}
                                    >
                                        <FormControlLabel value="Insuficiente" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Insuficiente" />
                                        <FormControlLabel value="Regular" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Regular" />
                                        <FormControlLabel value="Bom" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Bom" />
                                        <FormControlLabel value="Excelente" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Excelente" />
                                    </RadioGroup>
                                </FormControl>

                            </div>
                            <Input
                                placeholder={"Comentário"}
                                required
                                pattern={"^.{10,}$"}
                                title={"A descrição deve conter no mínimo 10 caracteres!"}
                                name={"comment_team_work"}
                                {...register("comment_team_work")}
                            />
                        </Group>
                        <Group>
                            <div>
                                <p>6. Possui capacidade de liderança?</p>
                                <FormControl>
                                    <RadioGroup
                                        name="leadership_ability"
                                        row
                                        onChange={onChangeLeadership_ability}
                                    >
                                        <FormControlLabel value="Insuficiente" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Insuficiente" />
                                        <FormControlLabel value="Regular" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Regular" />
                                        <FormControlLabel value="Bom" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Bom" />
                                        <FormControlLabel value="Excelente" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Excelente" />
                                    </RadioGroup>
                                </FormControl>

                            </div>
                            <Input
                                placeholder={"Comentário"}
                                required
                                pattern={"^.{10,}$"}
                                title={"A descrição deve conter no mínimo 10 caracteres!"}
                                name={"comment_leadership_ability"}
                                {...register("comment_leadership_ability")}
                            />
                        </Group>
                    </ContainerReq>

                    <ContainerReq>

                        <Group>
                            <div>
                                <p>7. É um profissional pontual?</p>
                                <FormControl>
                                    <RadioGroup
                                        name="punctual"
                                        row
                                        onChange={onChangePunctual}
                                    >
                                        <FormControlLabel value="Insuficiente" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Insuficiente" />
                                        <FormControlLabel value="Regular" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Regular" />
                                        <FormControlLabel value="Bom" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Bom" />
                                        <FormControlLabel value="Excelente" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Excelente" />
                                    </RadioGroup>
                                </FormControl>

                            </div>
                            <Input
                                placeholder={"Comentário"}
                                required
                                pattern={"^.{10,}$"}
                                title={"A descrição deve conter no mínimo 10 caracteres!"}
                                name={"comment_punctual"}
                                {...register("comment_punctual")}
                            />
                        </Group>
                        <Group>
                            <div>
                                <p>8. Sabe trabalhar sob pressão?</p>

                                <FormControl>
                                    <RadioGroup
                                        name="work_under_pressure"
                                        row
                                        onChange={onChangeWork_under_pressure}
                                    >
                                        <FormControlLabel value="Insuficiente" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Insuficiente" />
                                        <FormControlLabel value="Regular" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Regular" />
                                        <FormControlLabel value="Bom" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Bom" />
                                        <FormControlLabel value="Excelente" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Excelente" />
                                    </RadioGroup>
                                </FormControl>

                            </div>
                            <Input
                                placeholder={"Comentário"}
                                required
                                pattern={"^.{10,}$"}
                                title={"A descrição deve conter no mínimo 10 caracteres!"}
                                name={"comment_work_under_pressure"}
                                {...register("comment_work_under_pressure")}
                            />
                        </Group>
                    </ContainerReq>

                    <ContainerReq>
                        <Group>
                            <div>
                                <p>9. Participou ativamente das cerimônias (lições aprendidas/retrospectiva)?</p>
                                <FormControl>

                                    <RadioGroup
                                        name="ceremonies"
                                        row
                                        onChange={onChangeCeremonies}
                                    >
                                        <FormControlLabel value="Insuficiente" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Insuficiente" />
                                        <FormControlLabel value="Regular" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Regular" />
                                        <FormControlLabel value="Bom" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Bom" />
                                        <FormControlLabel value="Excelente" control={<Radio sx={{ color: '#97C93C', '&.Mui-checked': { color: '#97C93C', }, }} />} label="Excelente" />
                                    </RadioGroup>

                                </FormControl>


                            </div>
                            <Input
                                placeholder={"Comentário"}
                                required
                                pattern={"^.{10,}$"}
                                title={"A descrição deve conter no mínimo 10 caracteres!"}
                                name={"comment_ceremonies"}
                                {...register("comment_ceremonies")}
                            />
                        </Group>
                        <div>
                            <p>10. Quais as características que o profissional se destaca?</p>
                            <Input
                                placeholder={"Comentário"}
                                required
                                pattern={"^.{10,}$"}
                                title={"A descrição deve conter no mínimo 10 caracteres!"}
                                name={"skills"}
                                {...register("skills")}
                            />
                        </div>



                    </ContainerReq>



                </Main>

                <div>
                    <p>11. Considerações Gerais</p>
                    <Input10
                        placeholder={"Comentário"}
                        required
                        pattern={"^.{10,}$"}
                        title={"A descrição deve conter no mínimo 10 caracteres!"}
                        name={"general_considerations"}
                        {...register("general_considerations")}
                    />
                </div>
                <ButtonStyle>FINALIZAR</ButtonStyle>
            </form>
        </Container>
    );

};

export default Form;
