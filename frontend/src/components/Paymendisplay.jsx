import "../App.css";
import { useState, useEffect,useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const PaymentList= () => {
    const navigate=useNavigate()
    const [values,setvalues]=useState([])
    const up =useRef()
const data= async ()=>{
    const users= await axios.get('http://localhost:8080/api/payment/allpayments')
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
    <div className="App auth ms-5 mt-5"> 
    <h3>Payments</h3>
    <hr></hr>
        <div className="container shadow-lg d-flex flex-column justify-content-start tblw">
       
        <div className="tbl bg-white">
        <table className="table table-bordered">
        <thead>
            <tr>
            <th scope="col">Type</th>
            <th scope="col">Price</th>
            </tr>
        </thead>
        <tbody >
            {
            values.map((e)=>(
               
                    <tr key={e._id} >
                    <td>{e.type}</td>
                    <td>{e.prix}</td>
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

export default PaymentList;