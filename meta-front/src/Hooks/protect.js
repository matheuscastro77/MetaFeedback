import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {alerts} from '../Constants/Alerts'

const ProtectToken = () => {

    const navigate = useNavigate();
    
    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token === null || token === ""){
            navigate("/")
            alerts("error", "Não autorizado! Usuário precisa estar logado!")
        }
    },[navigate])
    return(
        <>
        </>
    )
}

export default ProtectToken

