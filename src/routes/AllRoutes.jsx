

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginAndSignup from '../components/LoginAndSignup/LoginAndSignup'
import Dashboard from '../components/Dashboard/Dashboard'
import { useSelector } from 'react-redux'

const AllRoutes = () => {
    const isAuth = useSelector((store) => store.authReducer.isAuth)
    return (
        <Routes>
            <Route path='/' element={<LoginAndSignup />} />
            <Route path='/dashboard' element={isAuth ? <Dashboard /> : <LoginAndSignup />} />
        </Routes>
    )
}

export default AllRoutes