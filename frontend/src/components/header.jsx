
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid d-flex align-items-center">
          <Link to="" className="btn navbar-brand hover">
            marhaba
          </Link>
        
        <div className="">
          <Link to="/login" className="btn navbar-brand hover">Signin</Link>
          <Link to="/register" className="btn navbar-brand hover">Signup</Link>
        </div>
        </div>
      </nav>
       <Outlet />
             
    </div>
  );
};

export default Header;
