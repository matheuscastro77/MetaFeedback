import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext"
const GlobalState = (props, initialState) => {

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [values, setValues] = useState('')
    const [menu, setMenu] = useState(false)
    const [leaguer, setLeaguer] = useState([])
    const [itensPerPage, setItensPerPage] = useState(12)
    const [currentPage, setCurrentePage] = useState(0)
    const [userId, setUserId] = useState('')
    const [nome, setNome] = useState('')
    const [userRole, setUserRole] = useState('')
    const [form, setForm] = useState(initialState)

    return (
        <GlobalStateContext.Provider value ={{ userId, form, setForm, nome, userRole, setUserRole, setNome, setUserId, currentPage, setCurrentePage, itensPerPage, setItensPerPage, isModalVisible, setIsModalVisible, values, setValues, menu, setMenu, leaguer, setLeaguer}}>
            {props.children}
        </GlobalStateContext.Provider> 
    )
}
export default GlobalState
