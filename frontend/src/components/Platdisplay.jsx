import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import '../App.css'
const Platdisplay = ()=> {
  const navigate=useNavigate()
    const [Data,setvalues]=useState([])
     
    const data= async ()=>{
        const plats=await axios.get('http://localhost:8080/api/plat/allplats')
        setvalues(plats.data)        
        console.log(plats)

    }
    useEffect(()=>{
        data();
    },[])
console.log(Data)
    const update= async (e)=>{
      e.preventDefault()
      const plats=await axios.post('http://localhost:8080/api/plat/getone',{id:e.target.value})
      const user= await axios.post('http://localhost:8080/api/auth/encrpttoken',{data:plats.data.data})
      navigate(`/auth/manager/plat/update/${user.data.token}`)
    }

    const remove= async (e)=>{
      e.preventDefault()
      const plats=await axios.post('http://localhost:8080/api/plat/removeone',{id:e.target.value})
      if(plats.data.msg) window.location.reload(false);
    }


  return (
    <div>
       <div className=" ms-5 mt-3">
           <h3 className="ms-5">Plats</h3>
           <hr></hr>   
      <div className="container shadow d-flex flex-column justify-content-start tblw ms-5">
      <h2><Link to="/auth/manager/plat/add"  className="text-secondary" ><i class="bi bi-egg-fried"></i></Link></h2>
       <div className="bg-white mt-3">
        
        <table className="table table-bordered">
        <thead>
            <tr>
            <th scope="col" className='text-center'>image</th>
            <th scope="col" className='text-center'>Name plat</th>  
            <th scope="col" className='text-center'>categorie</th>
            <th scope="col" className='text-center'>Composants</th>
            <th scope="col" className='text-center'>prix</th>
            <th scope="col" className='text-center'>update</th>
            <th scope="col" className='text-center'>delete</th>
            </tr>
        </thead>
        <tbody >
          {
           Data.map((e)=>(
                    <tr key={e._id}>
                    <td><img src={`http://localhost:8080/public/${e.image}`} className="im"/></td>
                    <td className='text-center'>{e.name}</td>
                    <td className='text-center'>{e.categorie.label}</td>
                    <td className='text-center'>{e.Composent}</td>
                    <td className='text-center'>{e.prix}</td>
                    <td className='text-center'>
                        <button type="submit"  value={e._id} onClick={update}  className="btn btn-primary w-25 h-25 "></button>
                        </td>
                        <td className='text-center'>
                        <button type="submit"  value={e._id} onClick={remove}  className=" btn btn-danger w-25 h-25 "></button>
                        </td>
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