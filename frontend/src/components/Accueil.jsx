
import React from 'react'
import { Link } from 'react-router-dom'

function Accueil() {  
   const style={width:"100%",height:"95vh"}
  return (
    <div>
    <img  style={style}  src= "https://media.istockphoto.com/id/1300249214/photo/fast-food-on-old-wooden-background-concept-of-junk-eating-top-view-flat-lay.jpg?b=1&s=170667a&w=0&k=20&c=QhijTTxpOPmyPvYuCsRpkQbkAx4yNLHYMP8K_SCKv5w=" ></img>
    <Link to="/noauth/Home" className='position-absolute bottom-0 end-0 m-5' ><button type='submit' style={{width:"150px"}}>Order Now</button>
</Link> 
<h2 className='position-absolute top-50 end-0 translate-middle text-white'>YOU WOULDN'T WANT MISS THIS </h2>

    </div>

  )
}
export default Accueil
