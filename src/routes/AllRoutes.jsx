
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import Profile from '../components/Profile'
import Calculator from '../components/Calculator'



const AllRoutes = () => {

    return (
        <Routes>
                <Route path='/Profile' element= {<Profile/>}>Profile</Route>
                <Route path='/' element= {<Register/>}>Register</Route>
                <Route path='/Login' element= {<Login/>}>Login</Route>
                <Route path='/Calculator' element= {<Calculator/>}>Calculator</Route>
        </Routes>
    )
}

export default AllRoutes