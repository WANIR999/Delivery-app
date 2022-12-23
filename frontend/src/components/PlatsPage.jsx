import React from 'react'
export default function PlatsPage({plat}) {
  return (
    <div className='container p-1'>
    <div style={{margin:'15px'}} className='shadow-lg p-3 bg-white rounded-3'>
    
      <h3>{plat.name}</h3>
      <img src={plat.image} className='img-fluid rounded' style={{height:'150px' , width:'400px'}} />

       <div className='flex-container'>
       <div className='w-100 m-1'>
       <span class="badge rounded-pill bg-danger">{plat.categorie}</span>
       </div>    

       <div className='w-100 m-1'>
          <p>{plat.Composent}</p>
        </div>

      </div> 
      <div className='w-100 m-1'>
          <p>{plat.price}</p>
        </div>
       <div className='w-100 m-1'>
          <button type='submit' style={{width:"150px"}}>Add to Card</button>
        </div>
     
    </div>
    
    </div>
    
  )
}
