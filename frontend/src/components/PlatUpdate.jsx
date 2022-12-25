import { useState , useEffect } from "react";
import "../App.css";
import FormInput from "./Forminput";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from 'axios'

const Updateplat = () => {
    const navigate=useNavigate()
    const {token}=useParams()
    const [file,setFile]=useState([])
    const [cat,setCat]=useState([])
    const [data,setData]=useState([])
    const getdata= async ()=>{
        const plat= await axios.post('http://localhost:8080/api/auth/decrypt2',{token:token})
       setData(plat.data.data.data)
       }

     const inputs = [
        {
            id: 1,
            name: "name",
            type: "text",
            placeholder:"plat name",
            value:data.name,
            errorMessage:
              "Username should be 3-16 characters and shouldn't include any special character!",
            label: "plat name",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
          },
          {
            id: 2,
            name: "Composent",
            type: "text",
            placeholder: "composant",
            value:data.Composent,
            errorMessage:
              "composent area should be 3-16 characters and shouldn't include any special character!",
            label: "Composent",
            pattern: "/^[a-zA-Z][a-zA-Z\\s]+{3,16}$",
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
            value:data.prix,
            required: true,
          },
      ];
     

    const getCat= async ()=>{
        const users= await axios.get('http://localhost:8080/api/categorie/allcategories')
       setCat(users.data)
       }
    
    useEffect(()=>{
        getCat();
        getdata();
    },[])


    const onChange = (e) => {
        setData({...data, [e.target.name]: e.target.value });
      };
      console.log(data)

   const handlechange = async (e) => {
    e.preventDefault();
    setFile(e.target.files[0])

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData= new FormData();
    formData.append("name",data.name)
    formData.append("id",data._id)
    formData.append("categorie",data.categorie)
    formData.append("Composent",data.Composent)
    formData.append("file",file)
    formData.append("oldfile",data.image)
    formData.append("prix",data.prix)
    const test=await axios.post('http://localhost:8080/api/plat/update',formData)
    if(test.data.msg) navigate('/auth/manager/plat/list')
  };
  
  return (
    <div className="App auth mx-auto mb-5">
      <form onSubmit={handleSubmit} enctype="multipart/form-data">
        <h1>add a plat</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
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
            <option >none</option>
            {
                cat.map(c=>(
                    <option value={c._id} selected={c._id==data.categorie? true: false}>{c.label}</option>
                ))
            }
           
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Updateplat;