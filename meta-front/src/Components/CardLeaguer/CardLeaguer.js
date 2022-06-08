
import React, { useContext } from 'react'
import { Container, P2, Content, ContainerOptions, Option, AdormentStyle, ContainerAvatar, Button, Img } from './Styled'
import GlobalStateContext from '../../context/GlobalStateContext'
import LeaguerProfile from '../LeaguerProfile/LeaguerProfile'
import GroupsIcon from '@mui/icons-material/Groups'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import eye from '../../assets/eye.png'
import { BASE_URL } from '../../Constants/Base_URL'
import { Avatar, IconButton, CardContent, CardHeader } from '@mui/material'
import UseRequestData from '../../Hooks/UseRequestData'

const CardLeaguer = ({ leaguer }) => {

  const { isModalVisible, setIsModalVisible } = useContext(GlobalStateContext)
  const [data] = UseRequestData([], `${BASE_URL}/user`)
  const [data2] = UseRequestData([], `${BASE_URL}/team`)

  const users = data.getSystemUser
  const teamss = data2.teams

  const modal = (leaguer) => {
    setIsModalVisible(true)
    localStorage.setItem("id", leaguer._id)
    if (window.history.replaceState) {
      window.history.replaceState(null, "", `/home/${leaguer._id}`);
    }
  }

  return (
    <Container sx={{ boxShadow: 2 }}>
      <CardContent>

        <Content key={leaguer?._id}>
          <ContainerAvatar>
            <CardHeader avatar={<Avatar aria-label="recipe" sx={{ width: 80, height: 80 }} />} />
          </ContainerAvatar>


          <ContainerOptions >
            <h1>{leaguer?._name}</h1>
            <Option>
              <IconButton color="neutral" sx={{ width: 35, height: 35 }}><GroupsIcon /></IconButton>
              {teamss?.map((data) => {
                if (data.id === leaguer._team) {
                  return <P2>{data.team}</P2>
                }
              })}
            </Option>

            <Option>
              <IconButton color="neutral" sx={{ width: 35, height: 35 }}><MenuBookIcon /></IconButton>
              <P2>{leaguer?._stage}</P2>
            </Option>

            <Option>
              <IconButton color="neutral" sx={{ width: 35, height: 35 }}><AssignmentIndIcon /></IconButton>
              {users?.map((user) => {
                if (user.id === leaguer._responsible) {
                  return <P2>{user.name}</P2>
                }
              })}

            </Option>
          </ContainerOptions>

          <AdormentStyle> <Button onClick={() => modal(leaguer)}>   <Img src={eye} />    </Button> {isModalVisible ? <LeaguerProfile leaguer={leaguer} /> : null}</AdormentStyle>

        </Content>

      </CardContent>
    </Container>
  )
}

export default CardLeaguer
