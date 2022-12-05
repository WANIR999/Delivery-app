// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "../app.css";
// import FormInput from "./Forminput";
// import axios from 'axios'

const Forget = () => {
  const navigate=useNavigate()
  const [errmsg,seterrmsg]=useState(false)
  const [formData, setValues] = useState({
    email: "",
  
  });

  const inputs=[
    {
      id:1,
      name:"email",
      type:"email",
      label:"Email"
    },
  ]
  
  const handleApi = async (e) => {
    e.preventDefault();
    try{
     const user= await axios.post('http://localhost:8080/api/auth/forgotpassword', formData)
     console.log(user.data.data)
     if(user.data.msg) 
     navigate('/login')
     if(user.data.errmsg) seterrmsg(user.data.errmsg)
    }catch(error){
        seterrmsg(error.msg)
    }
  };

  const onChange = (e) => {
    setValues({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
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
      
    </div>
  );
};

export default Forget;