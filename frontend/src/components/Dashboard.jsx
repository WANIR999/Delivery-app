
import "../App.css";
import { useState, useEffect,useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
    const navigate=useNavigate()
    const [values,setvalues]=useState([])
    const up =useRef()

const data= async ()=>{
    const users= await axios.get('http://localhost:8080/api/auth/allUsers')
   setvalues(users.data)
   }

useEffect(()=>{
    data();
},[])

const update= async (a)=>{
    a.preventDefault()
    const id=a.target.value
   const updates= await axios.post('http://localhost:8080/api/auth/switchtoliv',{id})
  if( updates.data.msg) window.location.reload(false);
}

const ban= async (a)=>{
    a.preventDefault()
    const id=a.target.value
   const updates= await axios.post('http://localhost:8080/api/user/Ban',{id})
  if( updates.data.msg) window.location.reload(false);
}

  return (
    <div className="App auth">
        <div className="container d-flex flex-column justify-content-start tblw  ms-5">
        <h2><Link to="/auth/manager/livreur/add"  className="text-secondary" ><i class="bi bi-person-fill-add"></i></Link></h2>
        <div className="tbl bg-white">
        <table className="table ">
        <thead>
            <tr>
            <th scope="col">name</th>
            <th scope="col" >email</th>
            <th scope="col" >role</th>
            <th scope="col" >status</th>
            <th scope="col" >switch it</th>
            <th scope="col" >de/ban it</th>
            </tr>
        </thead>
        
        <tbody >
            {
            values.map((e)=>(
               
                    <tr key={e._id} >
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.role}</td>
                    <td>{(e.confirmation && !e.baned)?"confirmed":(e.confirmation && e.baned)?"baned":(!e.confirmation)?"not confirmed":"-"}</td>
                        <td>
                        <button type="submit"  value={e._id}  onClick={update} className="btn btn-primary w-25 h-25 "></button>
                        </td>
                        <td>
                        <button type="submit"  value={e._id} onClick={ban} className=" btn btn-danger w-25 h-25 "></button>
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

export default Dashboard;