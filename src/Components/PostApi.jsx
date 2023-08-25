import React, { useState } from 'react'

function PostApi() {
    const [fname,setFname]=useState("")
    const [lname,setLname]=useState("")
    const [email,setEmail]=useState("")

    function HandleSubmit(){
        console.warn({fname,lname,email})
        let data={fname,lname,email}

        fetch("https://fakestoreapi.com/users",
        {
            method: 'POST',
            headers: { 
            'Accept': 'application/json',
            'Content-type': 'application/json'},
            body: JSON.stringify(data)
        }).then((result) => {
            
            result.json().then((response) => {
                console.warn("response",response)
            })
            
        })
    }
  return (
   
    <div >
        <h1>Post Api Example</h1>
        <input type="text" value={fname}onChange={(e)=>{setFname(e.target.value)}} name='first name '/><br/><br/>
        <input type="text" value={lname}onChange={(e)=>{setLname(e.target.value)}} name='last name'/><br/><br/>
        <input type="text" value={email}onChange={(e)=>{setEmail(e.target.value)}} name='email'/><br/><br/>
        <button onClick={HandleSubmit}>submit</button>
    </div>
  )
}

export default PostApi