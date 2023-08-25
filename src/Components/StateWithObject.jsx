import React, { useState } from 'react'


function StateWithObject() {
    const [data,setData]=useState({
        name:'marmik',
        age:27
    })
  return (
    <div>
    
    <h1>StateWithObject</h1>
    <input type="text" placeholder='Enter your Name' value={data.name} onChange={(e)=>{setData({...data,name:e.target.value})}}></input>
    <input type="text" placeholder='Enter your age' value={data.age}onChange={(e)=>{setData({...data,age:e.target.value})}}></input>
    <h1>{data.name}</h1>
    <h1>{data.age}</h1>
    
    </div>
  )
}

export default StateWithObject