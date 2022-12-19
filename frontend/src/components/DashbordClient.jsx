import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";
import { useEffect,history } from "react";
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
    <div >
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
            <div class="card">
            <div class="card">
                    <div class="card-body">
                        <h5 class="card-title  fs-4 fw-bold">Totale des commands</h5>
                        <p class="card-text  fs-4 fw-bold text-danger" >{Countcmd} </p>
                    </div>
                </div>
                </div>
            </div>
            <div class="col">
            <div class="card">
            <div class="card">
                    <div class="card-body">
                        <h5 class="card-title  fs-4 fw-bold">Totale des commands livrer</h5>
                        <p class="card-text  fs-4 fw-bold"></p>
                    </div>
                </div>
                </div>
            </div>
           
 
  
</div>
    </div>
)

}
export default DashbordClient