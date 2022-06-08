import React, { useContext } from 'react'
import { goToHome } from '../../Routes/Coordinates'
import {useNavigate} from 'react-router-dom'
import { Container, Img, Button  } from './Styled'
import Logo from '../../assets/logometa.png'
import MenuIcon from '@mui/icons-material/Menu';
import GlobalStateContext from '../../context/GlobalStateContext'

const Header = () => {

    const Navigate = useNavigate()

    const { menu, setMenu, setIsModalVisible } = useContext(GlobalStateContext)

    const menuIsVisible = () => {
        setMenu(!menu)
      }

    const onClickHome = () => {
        goToHome(Navigate)
        setIsModalVisible(false)
    }

    return (
        <>
        <Container >
            <Img onClick={onClickHome} alt="Logomarca" src={Logo} />
            <Button onClick={() => menuIsVisible()}><MenuIcon sx={{ margin: '0px 35px 0px 0px', fontSize: '40px', color: 'white' }}/></Button>
        </Container>
        </>
    )
}

export default Header

