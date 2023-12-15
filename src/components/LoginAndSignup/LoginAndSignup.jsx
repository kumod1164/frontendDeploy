import React, { useState } from 'react'
import { Box, Button } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import "./login.css"
import axios from "axios"
import { serverUrl } from '../../../configs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const LoginAndSignup = () => {
    const [toggle, setToggle] = useState(true)
    const dispatch = useDispatch()

    const navigate = useNavigate()
    // console.log(data)

    const [email, setEmail] = useState("")
    const [email1, setEmail1] = useState("")
    const [password, setPassword] = useState("")
    const [password1, setPassword1] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    const login = async (url, obj) => {
        try {
            const res = await axios.post(url + "/user/login", obj)
            // console.log(res)
            dispatch({ type: "LOGIN", payload: res.data.token })
            navigate("/dashboard")
        } catch (error) {
            alert(error.response.data.message)
            console.log(error)
        }
    }
    const signup = async (url, obj) => {
        try {
            const res = await axios.post(url + "/user/signup", obj)
            alert(res.data.message)
            setToggle(true)
        } catch (error) {
            alert(error.response.data.message)
            console.log(error)
        }
    }

    const handleLogin = (e) => {
        e.preventDefault()
        login(serverUrl, { email, password })
        // console.log(email, password)
    }
    const handleSignup = (e) => {
        e.preventDefault()
        signup(serverUrl, { email: email1, password: confirmPassword })
        // console.log(email1, password1, confirmPassword)
    }


    return (
        <div id='loginWrapper'>
            <div>

                {
                    toggle ? (<>
                        <h2>Login Form</h2>
                        <div>
                            <button onClick={() => setToggle(true)}>Login</button>
                            <button onClick={() => setToggle(false)}>Signup</button>
                        </div>
                        <form onSubmit={handleLogin}>
                            <input type="email" placeholder='email' required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            <input type="password" placeholder='password' required value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            <p>Forget Password?</p>
                            <button type='submit'>Login</button>
                            <p>Not a member? <span onClick={() => setToggle(false)}>Signup Now</span></p>
                        </form>
                    </>

                    ) : (
                        <>
                            <h2>Signup Form</h2>
                            <div>
                                <button onClick={() => setToggle(true)}>Login</button>
                                <button onClick={() => setToggle(false)}>Signup</button>
                            </div>
                            <form onSubmit={handleSignup}>
                                <input type="email" placeholder='email' required value={email1} onChange={(e) => { setEmail1(e.target.value) }} />
                                <input type="password" placeholder='password' required value={password1} onChange={(e) => { setPassword1(e.target.value) }} />
                                <input type="password" placeholder='Confirm password' required value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                                <button type='submit'>Signup</button>
                            </form>
                        </>)
                }


            </div>

        </div>
    )
}

export default LoginAndSignup