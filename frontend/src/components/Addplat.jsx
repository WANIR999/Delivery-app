import { useState , useEffect } from "react";
import "../App.css";
import FormInput from "./Forminput";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'

const Addplat = () => {
    const [file,setFile]=useState([])
    const [cat,setCat]=useState([])
    const [values, setValues] = useState({
        name: "",
        composent: "",
        prix: "",
        categorie:"",
      });
    const inputs = [
        {
            id: 1,
            name: "name",
            type: "text",
            placeholder: "name",
            errorMessage:
              "Username should be 3-16 characters and shouldn't include any special character!",
            label: "plat name",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
          },
          {
            id: 2,
            name: "composent",
            type: "text",
            placeholder: "composents",
            errorMessage:
              "composent area should be 3-16 characters and shouldn't include any special character!",
            label: "composent",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
          },
          {
            id: 3,
            name: "prix",
            type: "text",
            placeholder: "price",
            errorMessage:
              "price area should be 3-10 characters and shouldn't include any special character!",
            label: "price",
            pattern: "^[0-9]{1,10}$",
            required: true,
          },
      ];

    const getCat= async ()=>{
        const users= await axios.get('http://localhost:8080/api/categorie/allcategories')
       setCat(users.data)
       console.log(users.data)
       }
    
    useEffect(()=>{
        getCat();
    },[])
    

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

   const handlechange = async (e) => {
    e.preventDefault();
    setFile(e.target.files[0])

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData= new FormData();
    formData.append("name",values.name)
    formData.append("categorie",values.categorie)
    formData.append("composent",values.composent)
    formData.append("file",file)
    formData.append("prix",values.prix)
    const test=await axios.post('http://localhost:8080/api/plat/create',formData)
    console.log(test.data)
  };
  
  return (
    <div className="App auth mx-auto">
      <form onSubmit={handleSubmit} enctype="multipart/form-data">
        <h1>add a plat</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <FormInput
            type="file"
            name="file"
            onChange={handlechange}
            label="image"
          />
          <label>categorie</label>
          <select name="categorie" class="form-select" aria-label="Default select example" onChange={onChange}>
            <option selected>none</option>
            {
                cat.map(c=>(
                    <option value={c._id}>{c.label}</option>
                ))
            }
           
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Addplat;