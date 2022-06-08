import { useEffect, useState } from 'react'
import axios from 'axios'

const UseRequestData = (initialState, url) => {
    const [data, setData] = useState(initialState)
    const [data2, setData2] = useState(initialState)
    const [data3, setData3] = useState(initialState)
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        axios.get(url, {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        })
            .then((response) => {
                setLoading(false)
                setData(response.data)
                setData2(response.data)
                setData3(response.data)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [url])

    return [data, setData, data2, setData2, data3, setData3, loading]
}
export default UseRequestData
