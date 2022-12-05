import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import FormInput from "./Forminput";
import axios from 'axios'

const Reset = () => {
  return (
    <div className="App ">
    <form  className="bgf">
      <h1>Reset password</h1>
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
    </form>
  </div>
  );
};

export default Reset;