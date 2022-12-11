import {Outlet, Link} from "react-router-dom";
import { useState ,useEffect } from "react";
import axios from "axios";
import Logout from "./logout";

const Navbar = () => {
    const [role,setRole]=useState("")
    const data= async ()=>{
     const user= await axios.post('http://localhost:8080/api/auth/decrypt',{token:localStorage.getItem('token')})
     setRole(user.data.role)
    }
    useEffect(()=>{
     data()
    },[])
    const homeurl="/auth/"+role+"/home"
    const reseturl="/auth/"+role+"/resetpassword"
    return (
       <div>
       
       </div>
    );
  };
  
  export default Navbar;