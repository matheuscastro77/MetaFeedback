import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalStateContext from '../../context/GlobalStateContext'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import { goToLogin, goToSignOptions, goToManagement } from '../../Routes/Coordinates'
import { Main, Button } from './styled'
import { MdAppRegistration } from 'react-icons/md'
import {GiExitDoor} from 'react-icons/gi'
const Menu = () => {

  const navigate = useNavigate()

  const { menu, setMenu } = useContext(GlobalStateContext)

  const onClickOptions = () => {
    goToSignOptions(navigate)
    setMenu(false)
  }

  const onClickManager = () => {
    goToManagement(navigate)
    setMenu(false)
  }

  const logout = () => {
    localStorage.removeItem("token")
    goToLogin(navigate)
  }

  return (
    <Main>
      <Button onClick={onClickOptions}>Cadastro<MdAppRegistration /></Button>
      <Button onClick={onClickManager}>Gerenciar Perfis<AccountCircleOutlinedIcon /></Button>
      <Button onClick={logout}>Logout<GiExitDoor /></Button>
    </Main>
  )
}

export default Menu