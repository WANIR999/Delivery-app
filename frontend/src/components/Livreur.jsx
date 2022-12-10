import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Livreur=()=> {

const [formData,setvalues]=useState([])
 
  const achat= async ()=>{
     const achats= await axios.get('http://localhost:8080/api/achat/allachats')
     setvalues(achats.data)
  }

  useEffect(()=>{
    achat();
  },[])
 
  return (
    <div>
       <div className="container tbl">
        <table className="table ">
        <thead>
            <tr>
            {/* <th scope="col">Plat</th> */}
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
                    <td>{e.Quantité}</td>
                    <td>{e.Prix}</td>
                    <td>{e.Date}</td>
                    <td>{e.type}</td>
                    <td>{e.prix}</td>
                    <td>{e.statu}</td>

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