import { useState } from "react";
import "../App.css";
import FormInput from "./Forminput";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'

const LivreurAdd = () => {
  const navigate=useNavigate()
  const [errmsg,seterrmsg]=useState(false)
  const [msg,setmsg]=useState(false)
  const [values, setValues] = useState({
    email: "",
    name: "",
  });

  const inputs = [
    {
        id: 1,
        name: "name",
        type: "text",
        placeholder: "name",
        errorMessage:
          "Username should be 3-16 characters and shouldn't include any special character!",
        label: "Username",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
      },
  
    {
      id: 2,
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
      name:values.name,
    }
    try{
     const user= await axios.post('http://localhost:8080/api/user/create',{...body})
     if(user.data.msg){
    const role= await axios.post('http://localhost:8080/api/auth/decrypt',{token:localStorage.getItem('token')})
      navigate('/auth/'+role.data.role+'/home')
    }
    if( user.data.errmsg) seterrmsg(user.data.errmsg)
   
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
        <h1>add delivrer</h1>
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
      </form>
    </div>
  );
};

export default LivreurAdd;