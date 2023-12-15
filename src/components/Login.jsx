import React, { useState } from 'react'
import "./login.css"
const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin=()=>{
    const payload = JSON.stringify({email,pass})
    fetch("http://localhost/8080/login", {
      method: "POST",
      headers:{
        "Content-Type":"Application/json"
      },
      body:payload
    })
    .then((res)=>res.json())
    .then((res)=>{
      JSON.stringify(res.token)
    })
    .catch((err)=>console.log(err))
  }
  return (
    <div className='wrapper'>
        <h2>Login</h2>
        <input type="text"  placeholder='name' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='password' onChange={(e)=>setPass(e.target.value)}/>
        <button onClick={handleLogin}> Submit</button>
    </div>
  )
}

export default Login