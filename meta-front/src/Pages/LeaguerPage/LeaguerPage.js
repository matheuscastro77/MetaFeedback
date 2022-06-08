import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import pessoa from '../../assets/pessoa.png'
import { goToCreateForm, goToEditLeaguer } from '../../Routes/Coordinates'
import UseRequestData from '../../Hooks/UseRequestData'
import GroupsIcon from '@mui/icons-material/Groups'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import { BASE_URL } from '../../Constants/Base_URL'
import Loading from '../../Components/Loading/loading'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import GlobalStateContext from '../../context/GlobalStateContext'
import ProtectToken from '../../Hooks/protect'
import { Main, MenuDiv, ContainerPicName, Img, H2, ContainerInfoMain, ContainerInfo, H3, ContainerButton, Button, ContainerPreview, LoadingDiv } from './styled'

export default function LeaguerPage() {

  ProtectToken()
  const navigate = useNavigate()

  const { setIsModalVisible, setMenu } = useContext(GlobalStateContext)
  const { menu } = useContext(GlobalStateContext)
  const [data] = UseRequestData([], `${BASE_URL}/leaguer`)
  const [data2] = UseRequestData([], `${BASE_URL}/team`)

  const teamss = data2.teams
  const url = window.location.href
  const selectUrl = url.split('home/')
  const selectedUrl = selectUrl[1]

  const onClickEdit = () => {
    goToEditLeaguer(navigate, selectedUrl);
  }

  const onClickForm = () => {
    goToCreateForm(navigate)
    localStorage.setItem("idLeaguer", selectedUrl)
    if (window.history.replaceState) {
      window.history.replaceState(null, "", `/createForm/${selectedUrl}`);
    }
    setMenu(false)
  }

  return (
    <>
      <Header />
      <MenuDiv>
        {menu ? <Menu /> : null}
      </MenuDiv>
      <Main>
        {data && data.length > 0 ? data.map((leaguer) => {
          if (selectedUrl === leaguer._id) {
            return <>
              <ContainerPicName>
                <Img src={pessoa} />
                <H2>{leaguer?._name}</H2>
              </ContainerPicName>
              <ContainerInfoMain>
                <ContainerInfo>
                  <GroupsIcon sx={{ color: '#2D2D2D', fontSize: '35px' }} />
                  <H3>{teamss?.map((data) => {
                    if (data.id === leaguer._team) {
                      return <H3>{data.team}</H3>
                    }
                  })}</H3>
                </ContainerInfo>
                <ContainerInfo>
                  <MenuBookIcon sx={{ color: '#2D2D2D', fontSize: '30px' }} />
                  <H3>{leaguer._stage}</H3>
                </ContainerInfo>
                <ContainerInfo>
                  <AssignmentIndIcon sx={{ color: '#2D2D2D', fontSize: '30px' }} />
                  <H3>{leaguer._name}</H3>
                </ContainerInfo>
              </ContainerInfoMain>
              <ContainerButton>
                <Button onClick={onClickForm}> Abrir Avaliação </Button>
                <Button onClick={onClickEdit}> Editar Perfil </Button>
                <Button> Histórico de Avaliações </Button>
              </ContainerButton>
              <ContainerPreview>
                <H2>Última Avaliação</H2>
              </ContainerPreview>
            </>
          }
        }) : <LoadingDiv> <Loading /> </LoadingDiv>}
      </Main>
    </>
  )
}
