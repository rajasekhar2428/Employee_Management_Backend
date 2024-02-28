import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddUsers() {


    let navigate =useNavigate()
const [user,setUsers]=useState({
    name:"",
    username:"",
    email:""
})
const{name,username,email}=user
const onInputChange=(e)=>{
    setUsers({...user,[e.target.name]:e.target.value})
}

//store data into db
const onSubmit = async(e) =>{
    e.preventDefault();
    await axios.post(`http://localhost:8080/user`,user)
    navigate("/")
};



    return (
    <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Register User</h2>
            <form onSubmit={(e)=> onSubmit(e)}>
            <div className="mb-3">
                <label htmlFor ="Name" className='form-lable'>
                 name
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="enter your name"
                name ="name"
                value={name}
                onChange={(e)=>onInputChange(e)}
                />
          </div>

          <div className="mb-3">
                <label htmlFor ="username" className='form-lable'>
                 username
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="enter your username"
                name ="username"
                value={username}
                onChange={(e)=>onInputChange(e)}
                />
          </div>

          <div className="mb-3">
                <label htmlFor ="Email" className='form-lable'>
                 E-mail
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="enter your e-mali address"
                name ="email"
                value={email}
                onChange={(e)=>onInputChange(e)}
                />
          </div>
          <button type ="submit" className="btn btn-outline-primary btn-lg p-2.5 w-4">Submit</button>
          <Link type ="Cancle" className="btn btn-outline-danger btn-lg mx-4 p-2.5 w-4 "to ="/">Cancle</Link>
          </form>
        </div>  
     </div>
    </div>
    );
  }
