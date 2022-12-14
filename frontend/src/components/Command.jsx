import { Row } from "react-bootstrap";
import Col from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const over={'overflow': 'auto','height': '100vh'}
const bgg={'color':'white'}

const Allcommands=()=>{

   const [Commands,setcommanClient]=useState([])
   
   const allCommands= async()=>{
      const commands=await axios.get('http://localhost:8080/api/command/allCommand')
      setcommanClient(commands.data)
    //   console.log(commands)


   }
   useEffect(()=>{
      allCommands();
   },[])

return(
    <div className="bg-white">
        <div className="d-flex">
            <div className=" p-1 w-100" style={over} >
                {/* col sidebar */}
                
                    <Row className="  m-auto mt-3 bg-light text-dark">
                        <div>
                            <div className=" p-1 w-100 " style={over} >
                                <Row className="  m-auto mt-3  ">
                                <div className="tbl bg-white">
                                    <Table className="table ">
                                            <thead>
                                                <tr className="bg-secondary" style={bgg}>
                                                    <th scope="col" >Nom de Plat </th>
                                                    <th scope="col" >Quantié</th>
                                                    <th scope="col" >Prix</th>
                                                    <th scope="col" >Status</th>
                                                    <th scope="col" >Date de Commmand</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                              {
                                       
                                            Commands.map((e)=>(
                                                   <tr key={e._id}>
                                                   <td>{e.plat_id.name}</td>
                                                   <td>{e.Quantité}</td>
                                                   <td>{e.Prix}</td>
                                                   <td>{e.Status_du_command}</td>
                                                   <td>{e.date_Command}</td>
                                                  
                                               </tr>
                                               ))
                                              }
                                            </tbody>
                                        </Table>
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </Row>
            </div>
        </div>
    </div>
    
)
}
export default Allcommands
