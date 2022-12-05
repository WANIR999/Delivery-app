import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import FormInput from "./Forminput";
import axios from 'axios'

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
       <div className="grid grid-cols-1 sm:grid-cols h-screen w-full">
    <div className="bg-black flex flex-col justify-center">
      
      <form className="max-w-[400px] w-full mx-auto bg-white p-4" onSubmit={handleApi}>
        <h1 className="text-orange-400 text-4xl font-bold text-center py-6">Forgot password??</h1>
        <p>Enter your email address and we will send you instructions to reset your password.</p>

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

        <button className="border w-full my'5 py-2 bg-amber-500 hover:bg-amber-400 text-white">Submit</button>
        
      </form>

    </div>
   </div>
    </div>
  );
};

export default Forget;