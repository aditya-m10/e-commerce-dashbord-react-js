import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash,  } from 'react-icons/fa';


const  ProductList=()=>{
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        getProducts()
    },[])
    const getProducts=async ()=>{
        let productlist=await fetch("http://localhost:5000/products",{
            headers:{
                authorization: JSON.parse(localStorage.getItem("token"))
            }
        }),
        result = await productlist.json();
        setProducts(result)
    }
    const deleteProduct=async(id)=>{
        const myDataObject = { id: id };

        let url=`http://localhost:5000/product/${id}`
        console.log(url)
        let deleteresult=await fetch(url,{
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(myDataObject)
        });

        deleteresult = await deleteresult.json()
        if(deleteresult){
            console.log("deleted")
        getProducts()
        }
    }
    const searchInput=async (e)=>{
    let key=e.target.value;
    if (key){
    let result=await fetch(`http://localhost:5000/search/${key}`)
    result=await result.json()
    if (result){
        setProducts(result)
    }
    }else{
        getProducts()
    }}
    return(
        <div className="product" >
            <h3>Product List</h3>
            <input className="searchbar" placeholder="Search " type="text" onChange={searchInput}></input>
            <table  >
            <tbody>

                <tr>
                    <th>No</th>
                    <th>product name</th>
                    <th>product price (Rs)</th>
                    <th>product category</th>
                    <th>product company</th>
                    <th>Update</th>
                    <th>Delete</th>


                </tr>
                {products.map((item,index)=>
                        <tr key={item._id}>
                            <td>{index+1}</td>
        
                            <td> {item.name}</td>
                            <td> {item.price}</td>
                            <td> {item.category}</td>
                            <td> {item.company}</td>
                            <td><Link to={"/update/"+item._id}><FaEdit style={{color: 'green'}} className="imglink"/></Link></td> 
                            
                            <td><FaTrash onClick={()=>deleteProduct(item._id)}  style={{color: 'red'}} className="imglink"/></td>                          
                        </tr>
                )

                }
                </tbody>
                
                
             </table>
        </div>
    )
}

export default ProductList;