import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";
import FormInput from "./Forminput";
import axios from 'axios'

const Forget = () => {
  const navigate=useNavigate()
  const [errmsg,seterrmsg]=useState(false)
  const [msg,setmsg]=useState(false)
  const [values, setValues] = useState({
    email: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body={
      email:values.email,
    }
    try{
     const user= await axios.post('http://localhost:8080/api/auth/forgotpassword',{...body})
     if(user.data.msg) window.location.replace('http://mail.google.com/mail/'+body.email)
     if(user.data.errmsg) seterrmsg(user.data.errmsg)
    }catch(error){
        seterrmsg(error.msg)
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="App auth fill">
      <form onSubmit={handleSubmit}>
        <h1>Forget password</h1>
        {errmsg ? (
          <div className="alert alert-danger text-center" role="alert">{errmsg}</div>
        ):msg? (
          <div className="alert alert-success text-center" role="alert">{msg}</div>
        ):""}
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
        <div className="w-100 d-flex justify-content-between align-items-center pb-3">
        <Link to="/register"  className="btn text-secondary fw-bold fs-6" >sign-up?</Link>
        <Link to="/login"  className="btn text-secondary fw-bold fs-6" >sign-in?</Link>
        </div>
      </form>
    </div>
  );
};

export default Forget;