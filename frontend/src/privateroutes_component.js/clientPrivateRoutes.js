import { Outlet, Navigate } from "react-router-dom";
// import axios from "axios";

const ClientRoutes = () => {
    return (
       (localStorage.getItem('role')=='client') ? <Outlet/> : <Navigate to='/accessdenied'/>
    );
  };
  
  export default ClientRoutes;