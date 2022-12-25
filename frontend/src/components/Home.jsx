
import React from "react";
// import platsdata from './platsdata'
import Plat from './PlatsPage'
import { useState,useEffect } from "react";
import axios from "axios";
import Footer from "./footer";

const style={"border-radius": "0px 400px 0px 0px ","height":"350px","width": "100%"}
const Home = () => {
  
  const [formData,setvalues]=useState([])
     
  const data= async ()=>{
      const plats=await axios.get('http://localhost:8080/api/plat/allplats')
      setvalues(plats.data)        
      console.log(plats)

  }
  useEffect(()=>{
      data();
  },[])

  

  return (
       <div className="row">
        <div className=" d-flex img justify-cotent-between">  
          
          <div className="col-md-8">
          <img src= "https://curlytales.com/wp-content/uploads/2020/03/online-food-2.jpg" style={style}></img>
          </div>

         <div className="col-md-3 p-5 ">
           <h1>Get your deliveries on the road</h1>
         </div>
          </div>

         <h2 className="text-danger"> Order now</h2>

        {formData.map(plat=>{
          return <div className="col-md-4 p-3">
          
           <div key={plat._id} ><Plat plat={plat} />
          
            </div>
          </div>
        })}

<Footer />

               </div>
       

  );
};
export default Home;
