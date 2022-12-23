import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";
import { useEffect,history } from "react";
const stl={
    "width":"79%"
}
const stlcrd={
    "border-radius":" 15px",
  "padding": "27px",
   "box-shadow": "0 15px 34px var(--bleuNoir-two-color)",
    "margin-left": "16px",
}
const stlcrd1={
    "border-radius":" 15px",
  "padding": "12px",
   "box-shadow": "0 15px 34px var(--bleuNoir-two-color)",
    "margin-left": "16px",
}

const DashbordClient=()=>{
    const [Countcmd,setCountcommand]=useState("")
    const CountCommand=async()=>{
        const CommandClient=await axios.get("http://localhost:8080/api/command/CountCommandbyclient")
        setCountcommand(CommandClient.data)
        // console.log(CommandClient.dta)

    }

    useEffect(()=>{
        CountCommand();
    },[])
return(
    <div style={stl} >
        <div >
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
            <div class="card" style={stlcrd1}>
            <div class="card" style={stlcrd}>
                    <div class="card-body">
                        <h5 class="card-title  fs-4 fw-bold">Totale des commands</h5>
                        <p class="card-text  fs-4 fw-bold text-danger" >{Countcmd} </p>
                    </div>
                </div>
                </div>
            </div>
            <div class="col">
            <div class="card" style={stlcrd1}>
            <div class="card" style={stlcrd}>
                    <div class="card-body">
                        <h5 class="card-title  fs-4 fw-bold">Commands livrer</h5>
                        <p class="card-text  fs-4 fw-bold text-danger">  yyyyy</p>
                    </div>
                </div>
                </div>
            </div>
           
 
  
        </div>
        </div>
    </div>
)

}
export default DashbordClient