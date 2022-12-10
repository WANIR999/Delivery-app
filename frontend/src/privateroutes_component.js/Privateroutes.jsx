import { Outlet, Navigate } from "react-router-dom";

const Private = () => {
  return (
    localStorage.getItem('token') ? <Outlet/> : <Navigate to="/login"/>
  );
};

export default Private;