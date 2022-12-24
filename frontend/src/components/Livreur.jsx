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
 
  const updateStatus= async (e)=>{
    e.preventDefault()
    const id= e.target.value
    const status = await axios.post('http://localhost:8080/api/achat/Updatestatus',{id})
    if( status.data) window.location.reload(false);
  }

  return (
    <div  className="App ms-5 mt-3">
           <h3>Plats à Livrés</h3>
           <hr></hr>

    <div className="container shadow-lg d-flex flex-column justify-content-start tblw ms-5">
       <div className="bg-white mt-3">
        <table className="table table-bordered">
        <thead>
            <tr>
            <th scope="col">Quantite</th>
            <th scope="col">Type payement</th>
            <th scope="col">Total</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody >
          
          {
            formData.map((e)=>(
                    <tr key={e._id}>
                    <td>{(e.command_id)?e.command_id: 0}</td>
                    <td>{e.payment_id.type}</td>
                    <td>{e.payment_id.prix}</td>
                    <td>{e.statu}</td>
                    <td className="d-flex justify-content-center align-items-center">
                    <button type="submit" value={e._id} onClick={updateStatus} className="d-flex justify-content-center align-items-center h-50 w-50">changer</button>
                     </td>
                    </tr>
            ))
          }
        
        </tbody>
        </table>

        </div>
       
    </div>
    </div>
  )
}

export default Livreur

