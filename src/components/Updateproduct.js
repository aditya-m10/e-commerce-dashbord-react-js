import React, { useEffect,useState } from 'react'
import {useNavigate, useParams} from "react-router-dom"
const Updateproduct = () => {
    const [name,setName]=useState("")
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("");
    const [company,setCompany]=useState("");
    const navigate= useNavigate()
    const params=useParams()

     useEffect(()=>{
      getProduct()
    },[])
    const getProduct=async (id)=>{
      const myDataObject = { id: id };
      let result = await fetch(`http://localhost:5000/product/${params.id}`)
      result =await result.json()
      setName(result.name)
      setPrice(result.price)
      setCategory(result.category)
      setCompany(result.company)
    }
    const updateProduct=async ()=>{
      let result=await fetch(`http://localhost:5000/update/${params.id}`,{
        method: "put",
        body:JSON.stringify({name,price,category,company}),
        headers:{
                'Content-Type': 'application/json'
            }
      })
      result=await result.json();
      alert("Success")
      navigate("/")
    }
  return (
    <div className='box'>
        <h3>Update Product</h3>
       <input value={name} onChange={(e)=>setName(e.target.value)} className="inputBox" type="text" placeholder="Product name" />
            <input value={price} onChange={(e)=>setPrice(e.target.value)} className="inputBox" type="number" placeholder="Price" />
            <input value={category} onChange={(e)=>setCategory(e.target.value)} className="inputBox" type="text" placeholder="Category" />
            <input value={company} onChange={(e)=>setCompany(e.target.value)} className="inputBox" type="text" placeholder="Company name" />
            <button  onClick={updateProduct} className="button-product inputBox" ><a >Update </a></button>
    </div>
  )
}

export default Updateproduct;
