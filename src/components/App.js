import React, { useState } from "react";
import '../styles/App.css';



const App = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phoneNumber,setPhoneNumber]=useState('')
  const [gender,setGender]=useState('')
  const [msg,setMsg]=useState('');
  const verify=()=>{
     if(name==""||email==""||phoneNumber==""){
      setMsg("All fields are required")
     }
  }

  return (
    <div>
      <form>
        <label htmlFor="name" >Name</label>
        <input type="text" placeholder="name"  onChange={(e)=>{setName(e.target.value)}}></input>

        <label htmlFor="name" >email</label>
        <input type="email" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}></input>

        <label htmlFor="name" >phoneNumber</label>
        <input type="text" placeholder="PhoneNumber" onChange={(e)=>{setPhoneNumber(e.target.value)}}></input>
         
        <select onChange={(e)=>{setGender(e.target.value)}}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="others">other</option>
        </select>
        <input type="submit" value="Submit" onClick={verify}></input>
        {msg && <p>{msg}</p>}
      </form>
    </div>
  )
}


export default App;
