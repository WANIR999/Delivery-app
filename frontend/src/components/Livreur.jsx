import React from 'react'
import { useState,useEffect,useRef } from 'react'
import axios from 'axios'

const Livreur=()=> {

const [formData,setvalues]=useState([])
const up =useRef()
 
  const achat= async ()=>{
     const achats= await axios.get('http://localhost:8080/api/achat/allachats')
     setvalues(achats.data)
  }

  useEffect(()=>{
    achat();
  },[])
 
  return (
    <div  className="app mt-5" >
       <div className="container">
        <table className="table table-dark ">
        <thead>
            <tr>
            <th scope="col">Quantite</th>
            <th scope="col">prix</th>
            <th scope="col">Date</th> 
            <th scope="col">Type payement</th>
            <th scope="col">Total</th>
            <th scope="col">Status</th>

            </tr>
        </thead>
        <tbody >
          {
            formData.map((e)=>(
                    <tr key={e._id}>
                    <td scope='col'>{e.Quantité}</td>
                    <td scope='col'>{e.Prix}</td>
                    <td scope='col'>{e.type}</td>
                    <td scope='col'>{e.prix}</td>
                    <td scope='col'>{e.statu}</td>
                    <td className="d-flex justify-content-center align-items-center">
                    <button type="submit"  value={e._id} className="d-flex justify-content-center align-items-center h-30 w-100"></button>
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