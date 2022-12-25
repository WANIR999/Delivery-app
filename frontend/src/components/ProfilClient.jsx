import { useState } from "react";
import axios from "axios";
import { useEffect,history } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { AiFillEdit, AiOutlineConsoleSql } from "react-icons/ai";

const ProfilClient=(req,res)=>{
    const [name,setName]=useState("")
    const [email,setemail]=useState("")
    const [getdataclient,setdataclient]=useState([])
    //get data  
    const GetclientData=async()=>{
       const getclientdata=await axios.get("http://localhost:8080/api/command/Profil")
       setdataclient(getclientdata.data)
    //    console.log(getclientdata.data)
    }
    useEffect(()=>{
        GetclientData()
    },[])

    // update
    const setData = (getclientdata) => {
        setName(getdataclient.name)
        setemail(getdataclient.email)
    }
        let dataclient={name,email}
    const  submitdata=async(e)=>{
        e.preventDefault()
        await axios.put("http://localhost:8080/api/command/updateProfil",dataclient)
       .then((responce)=>{
        // console.log(responce)
        toast.success('Update Profil success')
        window.location.reload(false); 
        }).catch((err)=>{
            toast.error('This is an error in update!');
            history.push('/auth/client/home')
        })
    }  
return(
<div>
    <div className="card m-4 p-4 w-100">
        <h5 className="card-header">Profil</h5>
        <div className="card-body">
            <div className="mb-1">
                    <label className="fs-5">Username</label>
            <input type="text" value={getdataclient.name} className="form-control p-2 fs-5" />
            </div>
            <div className="mb-1">
                <label className="fs-5">Email</label>
                <input type="email" value={getdataclient.email}   className="form-control p-2 fs-5" />
            </div>
            <div className="mb-1">
                <label className="fs-5">Role</label>
                <input type="text" value={getdataclient.role}  className="form-control p-2 fs-5" readOnly />
            </div>
        </div>
            <button className=""  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{setData(getdataclient)}}  ><AiFillEdit className="fs-3 text-success"/>Update your profil</button>
    </div>
{/* modal */}
    <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modifier Profil </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body text-dark">
                    <form method="POST" onSubmit={submitdata} >
                        <div>
                            <label className="fs-5">Modifier votre name</label>
                            <input type="text" name="name"  value={name} onChange={(e)=>setName(e.target.value)}  />

                            <label className="fs-5">Modifier votre email</label>
                            <input type="email" name="email" value={email} onChange={(e)=>{setemail(e.target.value)}}  />
                        </div>
                        <div style={{display:"flex"}}>
                            <button type="button" className="fs-5 btn-secondary me-3" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn-warning">save change</button>
                        </div>
                    </form>
                </div>
            
            </div>
        </div>
    </div>
    <ToastContainer/>

</div>
)
}
export default ProfilClient