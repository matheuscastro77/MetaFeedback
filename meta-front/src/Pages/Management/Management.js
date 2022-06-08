import React, {useContext} from 'react'
import GlobalStateContext from '../../context/GlobalStateContext';
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import { Logo, H1, MenuDiv } from './Styled'
import LogoImg from '../../assets/logo.png'


const Management = () => {

    const { menu } = useContext(GlobalStateContext)

    return (
        <>
            <Header />
            <MenuDiv>
                {menu ? <Menu /> : null}
            </MenuDiv>
            <Logo src={LogoImg} alt="Logo Meta" />
            <H1>Gerenciamento de Perfis</H1>
        </>
    )
}

export default Management

