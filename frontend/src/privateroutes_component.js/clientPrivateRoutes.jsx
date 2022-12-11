import { useState , useEffect } from "react";
import "../App.css";
import axios from "axios"
import { useNavigate, Outlet} from "react-router-dom";

const ClientRoutes = () => {
   const navigate=useNavigate()
   const [role,setRole]=useState("")
    const data= async ()=>{
     const user= await axios.post('http://localhost:8080/api/auth/decrypt',{token:localStorage.getItem('token')})
     setRole(user.data.role)
    }
    useEffect(()=>{
     data()
    },[])
 
   return (
 
        (role==='client') ? <Outlet/> :navigate('/auth/'+role+'/home')
 
   );
  };
  
  export default ClientRoutes;

