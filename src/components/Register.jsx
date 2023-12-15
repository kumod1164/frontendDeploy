import React, { useState } from 'react'
import "./Register.css"
const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSignup=()=>{
    const payload = JSON.stringify({email,pass})
    fetch("http://localhost/8080/login", {
      method: "POST",
      headers:{
        "Content-Type":"Application/json"
      },
    })
    .then((res)=>res.json())
    .then((res)=>{
      JSON.stringify(res.token)
    })
    .catch((err)=>console.log(err))
  }
  return (
    <div className='container'>
        <h2>Register</h2>
        <input type="text"  placeholder='name'/>
        <input type="text"  placeholder='name' />
        <input type="text"  placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='password' onChange={(e)=>setPass(e.target.value)}/>
        <button onClick={handleSignup}> Register</button>
    </div>
  )
}

export default Login