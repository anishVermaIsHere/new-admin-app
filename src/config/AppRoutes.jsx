import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Error401 from '../pages/Error401'
import Error404 from '../pages/Error404'
import Error500 from '../pages/Error500'
import Dashboard from '../components/dashboard/Dashboard'
import { URL_LINK } from './routes/contants.'
import Static from '../components/layout/Static'
import LightSideNav from '../components/layout/LightSideNav'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import ForgotPassword from '../components/auth/ForgotPassword'
import Chart from '../components/Chart'
import TableSection from '../components/table/TableSection';



const {LAYOUTS,AUTH,CHARTS,TABLES}=URL_LINK;

const AppRoutes = () => {
  return (
    <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path={LAYOUTS.STATIC} element={<Static />} />
            <Route path={LAYOUTS.LIGHT_SIDENAV} element={<LightSideNav />} />
            <Route path={CHARTS} element={<Chart />} />
            <Route path={TABLES} element={<TableSection />} />


        </Route>
        <Route path={AUTH.LOGIN} element={<Login />} />
        <Route path={AUTH.REGISTER} element={<Register />} />
        <Route path={AUTH.FORGOT_PWD} element={<ForgotPassword />} />
        <Route path="/401" element={<Error401 />} />
        <Route path="**" element={<Error404 />} />
        <Route path="/500" element={<Error500 />} />
    </Routes>
  )
}

export default AppRoutes