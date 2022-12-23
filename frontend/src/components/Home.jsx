import { Link } from "react-router-dom";
import React from "react";
import platsdata from './platsdata'
import Plat from './PlatsPage'
import Footer from "./footer";
const style={"border-radius": "0px 400px 0px 0px ","height":"350px","width": "100%"}

const Home = () => {
  
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

        {platsdata.map(plat=>{
          return <div className="col-md-4 p-3">
          
           <div><Plat plat={plat} />
          
            </div>
          </div>
        })}

<Footer />

               </div>
  );
};
export default Home;
