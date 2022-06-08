import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import Home from '../Pages/Home/Home'
import SignUp from "../Pages/SignUp/SignUp"
import SignUpManager from '../Pages/SignUpManager/SignUpManager'
import SignUpOptions from '../Pages/SignUpOptions/SignUpOptions'
import SignUpTeam from '../Pages/SignUpTeam/SignUpTeam'
import EditLeaguer from '../Pages/EditLeaguer/EditLeaguer'
import LeaguerPage from '../Pages/LeaguerPage/LeaguerPage'
import CreateForm from '../Pages/CreateForm/CreateForm'
import SendForm from '../Pages/SendForm/SendForm'
import Form from '../Pages/Form/Form'
import ProfileManagement from '../Pages/Management/Management'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/signUpOptions"} element={<SignUpOptions />} />
        <Route path={"/signUp"} element={<SignUp />} />
        <Route path={"/signUpManager"} element={<SignUpManager />} />
        <Route path={"/signUpTeam"} element={<SignUpTeam />} />
        <Route path={"/editLeaguer/:id"} element={<EditLeaguer />} />
        <Route path={"/home/:id"} element={<LeaguerPage />} />
        <Route path={"/createForm/:id"} element={<CreateForm />} />
        <Route path={"/sendForm"} element={<SendForm />} />
        <Route path={"/form/update/:id"} element={<Form />} />
        <Route path={"/management"} element={<ProfileManagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
