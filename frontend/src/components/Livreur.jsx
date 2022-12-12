
import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Livreur=()=> {
const [formData,setvalues]=useState([])

  const getachat= async ()=>{
     const achats= await axios.get('http://localhost:8080/api/achat/allachats')
     setvalues(achats.data)
     console.log(achats)
  }

useEffect(()=>{
  getachat();
  },[])

  const updateStatus=(e)=>{
    const id=e.target.value
    axios.put('http://localhost:8080/api/achat/Updatestatus',{id})
  }
 
  return (
    <div  className="app mt-5" >
       <div className="container">
        <table className="table table-dark ">
        <thead>
            <tr>
            <th scope="col">Quantite</th>
            <th scope="col">prix</th>
            <th scope="col">Type payement</th>
            <th scope="col">Total</th>
            <th scope="col">Status</th>
            </tr>
        </thead>

        <tbody >
          {
            formData.map((e)=>(
                    <tr key={e._id}>
                    <td>{e.command_id.Quantité}</td>
                    <td>{e.command_id.Prix}</td>
                    <td>{e.payment_id.type}</td>
                    <td>{e.payment_id.prix}</td>
                    <td>{e.statu}</td>
                    <td className="d-flex justify-content-center align-items-center">
                    <button type="submit" value={e._id} onClick={updateStatus} className="d-flex justify-content-center align-items-center h-30 w-100"></button>
                      </td>
                    </tr>
            ))
          }
        
        </tbody>
        </table>

        </div>
       
    
    </div>
  )
}

export default Livreur