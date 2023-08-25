import React, { useState } from 'react'

function PreviousState() {
    const [counter,setCounter]=useState(1);
    const UpdateCount=()=>{

    //    let rand =(Math.floor(Math.random()*10))
    //     setCounter((pre)=>{
    //         console.warn(pre)
    //         if(pre<5){
    //             alert("Low Value")
    //         }
    //         return rand
    //     })
  
    }
    


  return (
    <div>
        <h1>Previous State</h1>
        <h1>{counter}</h1>
        <button onClick={UpdateCount}>counter update</button>
    </div>
  )
}

export default PreviousState