import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate()
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth)
        {
            navigate('/')
        }
    },[])
    
    const handleLogin=async ()=>{
        let result=await fetch("http://localhost:5000/login",{
            method: "post",
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        result = await result.json()

        if (result.email){
        localStorage.setItem("user",JSON.stringify(result));
        navigate("/")}
        else{
            alert(result.error)
        }
        
    }
    return(
        <div className="box">
            <h1>Login</h1>
            <input onChange={(e)=>setEmail(e.target.value)} value={email} className="inputBox" type="email" placeholder="Email"></input>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} className="inputBox" type="password" placeholder="Password"></input>
            <button onClick={handleLogin} className="button-product inputBox"><a>Login</a></button>
        </div>
    )
}

export default Login;