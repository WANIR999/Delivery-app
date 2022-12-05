import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";
import FormInput from "./Forminput";
import axios from 'axios'

const Forget = () => {
  return (
    <div className="App auth fill">
      <form>
        <h1>Forget password</h1>
        {/* {errmsg ? (
          <div className="alert alert-danger text-center" role="alert">{errmsg}</div>
        ):msg? (
          <div className="alert alert-success text-center" role="alert">{msg}</div>
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
        <Link to="/register"  className="btn text-secondary" >sign-up?</Link>
        <Link to="/login"  className="btn text-secondary" >sign-in?</Link>
        </div>
      </form>
    </div>
  );
};

export default Forget;