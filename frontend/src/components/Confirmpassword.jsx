
import React from 'react'
import { useState } from "react";
import FormInput from "./Forminput";


export default function Confirmpassword() {
    const inputs=[
        {
          id:1,
          name:"password",
          type:"password",
          label:"Password"
        },

        {
            id:1,
            name:"Confirmpassword",
            type:"password",
            label:"Confirm Password"
          },
      ]
      const [formData, setValues] = useState({
      
        password: "",
        Confirmpassword:""
      });
      const onChange = (e) => {
        setValues({ ...formData, [e.target.name]: e.target.value });
      };
  return (
    <div>
          <div>
       <div className="grid grid-cols-1 sm:grid-cols h-screen w-full">
    <div className="bg-black flex flex-col justify-center">

      <form className="max-w-[500px] w-full mx-auto bg-white p-4">
        <h1 className="text-orange-400 text-4xl font-bold text-center py-6">Change Your Password</h1>
        <p>Enter a new password below to change your password</p>
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
  
    </div>
  )
}
