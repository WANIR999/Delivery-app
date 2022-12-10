import { useState , useEffect } from "react";
import "../App.css";
import axios from "axios"
import { useNavigate, Outlet} from "react-router-dom";

const NoauthRoutes = () => {
  const navigate=useNavigate()
  return (
      !localStorage.getItem('token') ? <Outlet/> : window.history.go(-1)
  );
};

export default NoauthRoutes;