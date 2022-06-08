import axios from "axios";
import { BASE_URL } from "../Constants/Base_URL";

export const userLogin = (data) => axios.post(`${BASE_URL}/login`, data);
export const allLeaguer = (data) => axios.get(`${BASE_URL}/leaguer`, data);
export const registerLeaguer = (data) => axios.post(`${BASE_URL}/leaguer/signup`, data, {headers: {Authorization: localStorage.getItem("token")}})
export const registerUserAdmin = (data) => axios.post(`${BASE_URL}/signup`, data, { headers: { Authorization: localStorage.getItem("token") } })
export const createForm = (data) => axios.post(`${BASE_URL}/form/signup`, data, { headers: { Authorization: localStorage.getItem("token") } })
export const createTeam = (data) => axios.post(`${BASE_URL}/team/signup`, data, { headers: { Authorization: localStorage.getItem("token") } })
export const sendMail = (data) => axios.post(`${BASE_URL}/send`, data, { headers: { Authorization: localStorage.getItem("token") } })


