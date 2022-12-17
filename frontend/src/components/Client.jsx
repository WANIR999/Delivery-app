import { Row } from "react-bootstrap";
import Col from "react-bootstrap";
import { AiFillEdit, AiOutlineConsoleSql } from "react-icons/ai";
import { RiDeleteBin2Fill} from "react-icons/ri";
import Table from 'react-bootstrap/Table';
import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";
import { useEffect,history } from "react";



const Clientcmd=()=>{
const [ID,setID]=useState("")
const [name,setPlat]=useState("")
const [Prix,setprix]=useState("")
const [Quantité,setQuantité]=useState()
// affichege command
const [commandclient,setcommanClient]=useState([])
const ClientCommand= async()=>{
    const CommandClient=await axios.get('http://localhost:8080/api/command/commandClient')
    setcommanClient(CommandClient.data)
}
useEffect(()=>{
    ClientCommand();
},[])

// update command
const setData = (e) => {
    setID(e._id)
    setPlat(e.plat_id.name)
    setprix(e.Prix)
    setQuantité(e.Quantité)
 }

let dataupdate={ID,name,Prix,Quantité}
const savedaat=async(e)=>{
    e.preventDefault()
    await axios.put(`http://localhost:8080/api/command/updateCommand/${ID}`,dataupdate)

        .then((responce)=>{
            // console.log(dataupdate)
            window.location.reload(false);        
        }).catch((err)=>{
            history.push('/auth/client/home')
        })

}
// delet command
const DeletId=async(id)=>{
// console.log(id)
    await axios.delete(`http://localhost:8080/api/command/deletCommand/${id}`)
    .then((responce)=>{
        // console.log(responce)
        window.location.reload(false);        
    }).catch((err)=>{
        history.push('/auth/client/home')
    })
}


return(
    <div >
     <div className="container tbl">
        <table className="table ">
        <thead>
        <tr>
            <th >Nom de Plat </th>
            <th >Quantié</th>
            <th >Prix</th>
            <th >Status</th>
            <th >Date de Commmand</th>
            <th >Option</th>
        </tr>
    </thead>
    <tbody>
        {commandclient.map((e)=>(
            <tr key={e._id}>
            <td>{e.plat_id.name}</td>
            <td>{e.Quantité}</td>
            <td>{e.Prix}</td>
            <td>{e.Status_du_command}</td>
            <td>{e.date_Command}</td>
            <td style={{display:"flex"}}>
            <button className="btn"  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setData(e)} ><AiFillEdit className="fs-3 text-success"/></button>
            <button className="btn"  onClick={()=>{ if (window.confirm('Are you sure you wish to delete this Command  ?')) DeletId(e._id)}}><RiDeleteBin2Fill className="fs-3 text-danger "/></button> 
            </td>
        </tr>
         ))}
    </tbody>
</table>
{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modifier command </h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-dark">
            <form method="POST" onSubmit={savedaat}>
                <div>
                    {/* <label className="fs-5">ID</label> */}
                    {/* <input type="text" name="ID" value={ID}   /> */}
                    <label className="fs-5">Nom de Plat</label>
                    <input type="text" name="name"  value={name} onChange={(e)=>setPlat(e.target.value)} readOnly />

                    <label className="fs-5">Quantité</label>
                    <input type="number" name="Quantité"  value={Quantité} onChange={(e)=>setQuantité(e.target.value)}  />

                    <label className="fs-5">Prix</label>
                    <input type="number" name="Prix"  value={Prix} onChange={(e)=>setprix(e.target.value)} />
                </div>
               <div style={{display:"flex"}}>
                <button type="button" className="fs-5 btn-secondary me-3" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn-primary">save change</button>
               </div>
            </form>
      </div>
       
      </div>
    </div>
  </div>
</div>
</div>
    
)
}
export default Clientcmd
