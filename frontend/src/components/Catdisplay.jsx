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

const ban= async (a)=>{
    a.preventDefault()
    const id=a.target.value
   const updates= await axios.post('http://localhost:8080/api/categorie/remove',{id})
  if( updates.data.msg) window.location.reload(false);
}

  return (
    <div className="App auth ms-5 mt-3">
        <h3>Categories</h3>
        <hr></hr>
        <h2><Link to="/auth/manager/categorie/add"  className="text-secondary" ><i class="bi bi-plus-circle-fill"></i></Link></h2>

        <div className="container shadow-lg d-flex flex-column justify-content-start tblw">
        <div className="tbl bg-white">
        <table className="table table-bordered ">
        <thead>
            <tr>
            <th scope="col">label</th>
            <th scope="col">Remove it</th>
            </tr>
        </thead>
        <tbody >
            {
            values.map((e)=>(
               
                    <tr key={e._id} >
                    <td>{e.label}</td>
                        <td>
                        <button type="submit"  value={e._id} onClick={ban} className=" btn btn-danger minimize "></button>
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