import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UseRequestData from '../../Hooks/UseRequestData'
import { goToCreateForm, goToEditLeaguer } from '../../Routes/Coordinates'
import { BASE_URL } from '../../Constants/Base_URL'
import Loading from '../Loading/loading'
import GlobalStateContext from '../../context/GlobalStateContext'
import { Main, Container, CloseButton, ContainerPicName, H2, ContainerInfoMain, ContainerInfo, H3, ContainerButton, Button, ContainerPreview, LoadingDiv } from './styled'
import GroupsIcon from '@mui/icons-material/Groups';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ContactPageIcon from '@mui/icons-material/ContactPage';


const LeaguerProfile = () => {

  const navigate = useNavigate();

  const { setIsModalVisible, setMenu } = useContext(GlobalStateContext)

  const [data] = UseRequestData([], `${BASE_URL}/leaguer`)
  const [data2] = UseRequestData([], `${BASE_URL}/team`)
  const [data3] = UseRequestData([], `${BASE_URL}/user`)

  const users = data3.getSystemUser
  const teamss = data2.teams
  const url = window.location.href
  const selectUrl = url.split('home/')
  const selectedUrl = selectUrl[1]

  const Closemodal = () => {
    setIsModalVisible(false)
    localStorage.removeItem("id")
    if (window.history.replaceState) {
      window.history.replaceState(null, "", `/home`);
    }
  }

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
    <Main>
      <Container>
        <CloseButton onClick={() => Closemodal()}>x</CloseButton>
        {data && data.length > 0 ? data.map((leaguer) => {
          if (localStorage.getItem("id") === leaguer._id) {
            return <>
              <ContainerPicName>
                <ContactPageIcon sx={{ color: '#2D2D2D', fontSize: '105px' }} />
                <H2>{leaguer?._name}</H2>
              </ContainerPicName>
              <ContainerInfoMain>
                <ContainerInfo>
                  <GroupsIcon sx={{ color: '#2D2D2D', fontSize: '35px' }} />
                  {teamss?.map((data) => {
                    if (data.id === leaguer._team) {
                      return <H3>{data.team}</H3>
                    }
                  })}
                </ContainerInfo>
                <ContainerInfo>
                  <MenuBookIcon sx={{ color: '#2D2D2D', fontSize: '30px' }} />
                  <H3>{leaguer._stage}</H3>
                </ContainerInfo>
                <ContainerInfo>
                  <AssignmentIndIcon sx={{ color: '#2D2D2D', fontSize: '30px' }} />
                  {users?.map((user) => {
                    if (user.id === leaguer?._responsible) {
                      return <H3>{user.name}</H3>
                    }
                  })}
                </ContainerInfo>
              </ContainerInfoMain>
              <ContainerButton>
                <Button onClick={onClickForm}> Abrir Abrir Avaliação</Button>
                <Button onClick={onClickEdit}> Editar Perfil </Button>
                <Button> Histórico de Avaliações </Button>
              </ContainerButton>
              <ContainerPreview>
                <H2>Última Avaliação</H2>

              </ContainerPreview>
            </>
          }
        }) : <LoadingDiv> <Loading /> </LoadingDiv>}
      </Container>
    </Main>
  )
}

export default LeaguerProfile
