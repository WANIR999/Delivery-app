import { useState } from "react";
import "../App.css";
import FormInput from "./Forminput";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'

  const Login = () => {

  return (
    <div className="App auth fill">
      <form>
        <h1>Login</h1>
         errmsg ? (
          <div className="alert alert-danger text-center" role="alert">{errmsg}</div>
        ):msg? (
          <div className="alert alert-success text-center" role="alert">{msg}</div>
        ):
          {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={formData[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
        <div className="w-100 d-flex justify-content-between align-items-center pb-3">
        <Link to="/register"  className="btn text-secondary" >sign-up?</Link>
        <Link to="/forgetpassword"  className="btn text-secondary" >forget ur password?</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;