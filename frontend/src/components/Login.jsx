
import { useState } from "react";
import "../App.css";
import FormInput from "./Forminput";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'

const Login = () => {
  const navigate=useNavigate()
  const [errmsg,seterrmsg]=useState(false)
  // const [msg,setmsg]=useState(false)
  const [formData, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs=[
  {
    id:1,
    name:"email",
    type:"email",
    label:"Email"
  },

  {
    id:2,
    name:"password",
    type:"password",
    label:"Password",
  },

];

const handleApi =  async (e) => {
  e.preventDefault();

  try{
  const user= await axios.post(`http://localhost:8080/api/auth/login`, formData)

  if(user.data.msg){    
    localStorage.setItem('role',user.data.data.role)
    localStorage.setItem('token',user.data.token)
    localStorage.setItem('name',user.data.data.name)
    localStorage.setItem('email',user.data.data.email)
   navigate('/auth/'+localStorage.getItem('role')+'/home')
  }

  if(user.data.errmsg) seterrmsg(user.data.errmsg)

}catch(error){
    seterrmsg(error.msg)
  }

}

const onChange = (e) => {
  setValues({ ...formData, [e.target.name]: e.target.value });
};

return (
    <div className="grid grid-cols-1 sm:grid-cols h-screen w-full">
    <div className="bg-black flex flex-col justify-center">
     
      <form className="max-w-[500px] w-full mx-auto bg-white p-4" onSubmit={handleApi}>
        <h1 className="text-orange-400 text-4xl font-bold text-center py-6">Login</h1>
        <div className="flex flex-col py-2">
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={formData[input.name]}
            onChange={onChange}
          />
        ))}
        </div>

        <button className="border w-full my'5 py-2 bg-amber-500 hover:bg-amber-400 text-white">Sign in</button>
        <div className="flex justify-between">
          <Link to="/register">Create an account?</Link>
          <Link to="/forgetpassword">Forgot password?</Link>

        </div>
      
      </form>

     
    </div>
   </div>
  );
};

export default Login;