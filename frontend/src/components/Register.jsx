import { useState } from "react";
import "../app.css";
import FormInput from "./Forminput";
import axios from "axios"
import { useNavigate, Link } from "react-router-dom";

const Register = () => {

  return (
    <div className="App auth fill">
    <form >
      <h1>Register</h1>
      {/* {errmsg ? (
        <div class="alert alert-danger" role="alert">{errmsg}</div>
      ):""} */}
      {/* {inputs.map((input) => (
        <FormInput
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}
        />
      ))} */}
      <button>Submit</button>
      <div className="w-100 d-flex justify-content-between align-items-center pb-3">
      <Link to="/login"  className="btn text-secondary" >sign-in?</Link>
      <Link to="/forgetpassword"  className="btn text-secondary" >forget ur password?</Link>
      </div>
    </form>
  </div>
  );
};

export default Register;