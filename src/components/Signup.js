import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

const SignUp=()=>{
    const [name,setUserid]=useState("");
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
    const sumbitData=async ()=>{
        console.log(name,email,password)
        let result=await fetch("http://localhost:5000/register",{
            method: "post",
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        result = await result.json()
        alert("Registered")
        //localStorage.setItem("user",JSON.stringify(result));
        navigate("/login")
        
    }
  
    return(
        <div className="box">
            <h1>Register</h1>
            <input className="inputBox"  value={name} onChange={(e)=>setUserid(e.target.value)} type="text" placeholder="User Id"/>
            <input className="inputBox" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email"/>
            <input className="inputBox"value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password"/>
            <button onClick={sumbitData} className="button-product inputBox" ><a >Sign Up</a></button>

        </div>
    )
}

export default SignUp;