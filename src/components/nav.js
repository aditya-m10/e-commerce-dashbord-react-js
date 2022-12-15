import React from "react";
import { Link, useNavigate } from  "react-router-dom";
const Nav=()=>{
    const auth=localStorage.getItem("user");
    const navigate=useNavigate();
    const logout=()=>{
            localStorage.clear()
            navigate("/")
    }

    return (
        <div>
            {auth? 
            <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                < div className="text-logout" >
                <li >Welcome {JSON.parse(auth).name},</li>
                <li ><Link onClick={logout} to="/login"> Logout</Link></li>
                </div>
                </ul>
               
                :
                <ul className="nav-ul text-right ">
                <li><Link to="/signup">SignUp</Link></li>
                <li><Link to="/login">Login</Link></li>
                </ul>}

          
            
        </div>
    )
}
export default Nav;
