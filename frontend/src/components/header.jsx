
import { Outlet, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
const Header = () => {
  
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid d-flex align-items-center">
          <Link to="" className="btn navbar-brand hover">
            marhaba
          </Link>
        
        <div className="">
          <Link to={Login}className="btn navbar-brand hover">Signin</Link>
          <Link to={Register}className="btn navbar-brand hover">Signup</Link>
        </div>
        </div>
      </nav>
       <Outlet />
             
    </div>
  );
};

export default Header;
