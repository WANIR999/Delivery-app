import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";
import FormInput from "./Forminput";
import axios from 'axios'

const CatAdd = () => {
  const navigate=useNavigate()
  const [errmsg,seterrmsg]=useState(false)
  const [msg,setmsg]=useState(false)
  const [values, setValues] = useState({
    label: "",
  });

  const inputs = [
    {
        id: 1,
        name: "label",
        type: "text",
        placeholder: "Title",
        errorMessage:
          "Username should be 3-16 characters and shouldn't include any special character!",
        label: "Title",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
      },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body={
        label:values.label,
    }
    try{
     const user= await axios.post('http://localhost:8080/api/categorie/create',{...body})
     if(user.data.msg) navigate('/auth/manager/categorie/list')
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
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CatAdd;