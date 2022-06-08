import React, { useContext, useState } from 'react'
import Header from '../../Components/Header/Header'
import CardLeaguer from '../../Components/CardLeaguer/CardLeaguer'
import GlobalStateContext from '../../context/GlobalStateContext'
import Menu from '../../Components/Menu/Menu'
import ProtectToken from '../../Hooks/protect'
import { BASE_URL } from '../../Constants/Base_URL'
import UseRequestData from '../../Hooks/UseRequestData'
import { InputLabel, MenuItem, Select, FormControl } from '@mui/material'
import { H1, MenuDiv, P, ContainerInput, Search, Icon, ContainerCards, ListCards, ContainerPages, ButtonPagination, StyleSelect } from './Styled'

const HomePage = () => {

    ProtectToken()

    const { menu, currentPage, setCurrentePage, itensPerPage, userId, userRole } = useContext(GlobalStateContext)
    const [data] = UseRequestData([], `${BASE_URL}/leaguer`)
    const [search, setSearch] = useState("")
    const [order, setOrder] = useState("")
    const pages = Math.ceil(data.length / itensPerPage)
    const startIndex = currentPage * itensPerPage
    const endIndex = startIndex + itensPerPage
    const currentItens = data.slice(startIndex, endIndex)

    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    const onChangeOrder = (e) => {
        setOrder(e.target.value)
    }

    const listLeaguer = currentItens && currentItens
        .filter((leaguer) => {
            if (userRole === 'GESTOR') {
                if (leaguer._responsible === userId) {
                    return leaguer
                }
            } else {
                return currentItens
            }
        })
        .filter((leaguer) => {
            return leaguer?._name.toLowerCase().includes(search.toLowerCase())
        })
        .sort((leaguer, nextLeaguer) => {
            return order * leaguer?._name.localeCompare(nextLeaguer?._name)
        })
        .map((leaguer) => {
            return (
                <CardLeaguer key={leaguer?._id} leaguer={leaguer} />
            )
        })

    return (
        <>
            <Header />

            <MenuDiv>
                {menu ? <Menu /> : null}
            </MenuDiv>

            <H1>Página Inicial</H1>

            <ContainerInput>
                <Search>
                    <label >
                        <input
                            value={search}
                            onChange={onChangeSearch}
                            placeholder="Busca por nome" />
                        <Icon />
                    </label>
                </Search>
                <div>
                    <StyleSelect
                        name="order"
                        value={order}
                        onChange={onChangeOrder}
                    >
                        <option value={""} disabled> Ordenar </option>
                        <option value={1}> A - Z </option>
                        <option value={-1}> Z - A </option>
                    </StyleSelect>
                </div>
            </ContainerInput>

            <P>Exibindo {listLeaguer.length} de {listLeaguer.length} colaboradores</P>

            <ContainerCards>
                <ListCards>
                    {listLeaguer}
                </ListCards>
            </ContainerCards>

            <ContainerPages>
                {Array.from(Array(pages), (item, index) => {
                    return <ButtonPagination value={index} onClick={(e) => setCurrentePage(Number(e.target.value))}>{index + 1}</ButtonPagination>
                })}
            </ContainerPages>

        </>
    )
}

export default HomePage