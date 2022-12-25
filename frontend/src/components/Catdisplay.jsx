import "../App.css";
import { useState, useEffect,useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const CategoriesList= () => {
    const navigate=useNavigate()
    const [values,setvalues]=useState([])
    const up =useRef()

const data= async ()=>{
    const users= await axios.get('http://localhost:8080/api/categorie/allcategories')
   setvalues(users.data)
   }

useEffect(()=>{
    data();
},[])

 const update= async (e)=>{
    e.preventDefault()
    const plats=await axios.post('http://localhost:8080/api/categorie/getone',{id:e.target.value})
    const user= await axios.post('http://localhost:8080/api/auth/encrpttoken',{data:plats.data.data})
    navigate(`/auth/manager/categorie/update/${user.data.token}`)
  }

const remove= async (a)=>{
    a.preventDefault()
    const id=a.target.value
   const updates= await axios.post('http://localhost:8080/api/categorie/remove',{id})
  if( updates.data.msg) window.location.reload(false);
}

  return (
    <div className="auth ms-5 mt-3">
        <h3 className="ms-5">Categories</h3>
        <hr></hr>
        <div className="container shadow-lg d-flex flex-column justify-content-start tblw">
        <h2><Link to="/auth/manager/categorie/add"  className="text-secondary" ><i class="bi bi-journal-text"></i></Link></h2>
        <div className="tbl bg-white">
        <table className="table table-bordered ">
        <thead>
            <tr>
            <th scope="col" className='text-center'>label</th>
            <th scope="col" className='text-center'>update</th>
            <th scope="col" className='text-center'>delete</th>
            </tr>
        </thead>
        <tbody >
            {
            values.map((e)=>(
               
                    <tr key={e._id} >
                    <td className='text-center'>{e.label}</td>
                    <td className='text-center'>
                        <button type="submit"  value={e._id} onClick={update}  className="btn btn-primary minimize"></button>
                        </td>
                        <td className='text-center'>
                        <button type="submit"  value={e._id} onClick={remove} className=" btn btn-danger minimize "></button>
                        </td>
                    </tr>
                  
            ))
        }
        </tbody>
        </table>

        </div>
        </div>
       
    </div>
  );
};

export default CategoriesList;