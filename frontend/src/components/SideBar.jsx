import {Outlet, Link} from "react-router-dom";
import { useState ,useEffect } from "react";
import axios from "axios";
import './sidebar.css'

const SideBar = () => {
    const [role,setRole]=useState("")
    const data= async ()=>{
     const user= await axios.post('http://localhost:8080/api/auth/decrypt',{token:localStorage.getItem('token')})
     setRole(user.data.role)
    }
    useEffect(()=>{
     data()
    },[])
    const homeurl="/auth/"+role+"/home"
    return (
        (role=="manager") ?
       <div className="sidebox d-flex flex-column justify-content-around align-items-start py-3">
         <Link to={homeurl}  className="btn navbar-brand text-white ms-3 hover" ><i class="bi bi-house-fill"></i> Home</Link>
          <Link to="/auth/manager/users" className="btn navbar-brand text-white ms-3 hover" ><i class="bi bi-people-fill"></i> Users</Link>
          <Link to="/auth/manager/categorie/list"  className="btn navbar-brand text-white ms-3 hover" ><i class="bi bi-journal-text"></i> Categories </Link>
          <Link to=""  className="btn navbar-brand text-white ms-3 hover" ><i class="bi bi-egg-fried"></i> plats</Link>
          <Link to="/auth/manager/payment/list"  className="btn navbar-brand text-white ms-3 hover" ><i class="bi bi-credit-card-fill"></i> Payments</Link>
          <Link to=""  className="btn navbar-brand text-white ms-3 hover" ><i class="bi bi-command"></i> Commands </Link>
          <Link to=""  className="btn navbar-brand text-white ms-3 hover" ><i class="bi bi-book-fill"></i> sells </Link>
          <Link to=""  className="btn navbar-brand text-white ms-3 hover" ><i class="bi bi-graph-up"></i> statistic </Link>
       </div>
       :(role=="livreur") ? 
       <div className="sidebox d-flex flex-column justify-content-around align-items-start ">
       <Link to={homeurl}  className="btn navbar-brand text-white ms-3 hover" ><i class="bi bi-house-fill"></i> Home</Link>
       </div>
       :(role=="client") ? 
       <div className="sidebox d-flex flex-column justify-content-around align-items-start py-3">
       <Link to="/auth/client/ProfilClient"  className="btn navbar-brand text-white ms-3 hover" ><i class="bi bi-house-fill"></i> Profil</Link>
       <Link to="/auth/client/Dashbord"  className="btn navbar-brand text-white ms-3 hover" ><i class="bi bi-house-fill"></i>Dashbord</Link>
       <Link to="/auth/client/Command" className="btn navbar-brand text-white ms-3 hover" ><i class="bi bi-house-fill"></i>Command</Link>
       <Link to="/auth/client/logout  "className="btn navbar-brand text-white ms-3 hover" ><i class="bi bi-house-fill"></i> logout</Link>
       </div>:""
    );

  };
  
  export default SideBar;