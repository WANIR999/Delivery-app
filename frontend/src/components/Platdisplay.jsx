import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Platdisplay = ()=> {

    const [formData,setvalues]=useState([])
     
    const data= async ()=>{
        const plats=await axios.get('http://localhost:8080/api/plat/allplats')
        setvalues(plats.data)        
        console.log(plats)

    }
    useEffect(()=>{
        data();
    },[])


  return (
    <div>
       <div className=" ms-5 mt-3">
           <h3 className="ms-5">Plats</h3>
           <hr></hr>   
      <div className="container shadow d-flex flex-column justify-content-start tblw ms-5">
      <h2><Link to="/auth/manager/plat/add"  className="text-secondary" ><i class="bi bi-plus-circle-fill"></i></Link></h2>
       <div className="bg-white mt-3">

        <table className="table table-bordered">
        <thead>
            <tr>
            <th scope="col">image</th>
            <th scope="col">Name plat</th>  
            <th scope="col">categorie</th>
            <th scope="col">Composants</th>
            <th scope="col">prix</th>
            </tr>
        </thead>
        <tbody >
          {
           formData.map((e)=>(
                    <tr key={e._id}>
                    <td><img width={"150px"} height={"70px"} src={`http://localhost:8080/public/${e.image}`}/></td>
                    <td>{e.name}</td>
                    <td>{e.categorie.label}</td>
                    <td>{e.Composent}</td>
                    <td>{e.prix}</td>
                    </tr>
            ))
          }
        
        </tbody>
        </table>

        </div>
       
    </div>
    </div>
    </div>
  )
}
export default Platdisplay