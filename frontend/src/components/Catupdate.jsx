import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import "../App.css";
import FormInput from "./Forminput";
import axios from 'axios'

const Catupdate = () => {
  const navigate=useNavigate()
  const {token}=useParams()
  const [errmsg,seterrmsg]=useState(false)
  const [msg,setmsg]=useState(false)
  const [data,setData]=useState([])
    const getdata= async ()=>{
        const cat= await axios.post('http://localhost:8080/api/auth/decrypt2',{token:token})
       setData(cat.data.data.data)
       }
      useEffect(()=>{
          getdata();
      },[])
  const inputs = [
    {
        id: 1,
        name: "label",
        type: "text",
        placeholder: "Title",
        errorMessage:
          "Username should be 3-16 characters and shouldn't include any special character!",
        label: "Title",
        pattern: "^[A-Za-z0-9]{4,16}$",
        required: true,
      },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cat= await axios.post('http://localhost:8080/api/categorie/update',data)
    if(cat.data.msg) navigate('/auth/manager/categorie/list')
  };

  const onChange = (e) => {
    setData({...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="App auth mx-auto justify-content-center mb-5">
      <form onSubmit={handleSubmit}>
        <h1>New categorie</h1>
        {errmsg ? (
          <div className="alert alert-danger text-center" role="alert">{errmsg}</div>
        ):msg? (
          <div className="alert alert-success text-center" role="alert">{msg}</div>
        ):""}
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={data[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Catupdate;