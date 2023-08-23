import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Filter() {
    const[seacrhParam,setSearchParam]=useSearchParams()
    console.log(seacrhParam.get('age'))
    console.log(seacrhParam.get('city'))
    const age=seacrhParam.get('age')
    const city=seacrhParam.get('city')
  return (
    <div>
   <h1>Filter Page</h1> 
   <h3>age is :{age}</h3>
   <h3>city is :{city}</h3>
   <input type="text" placeholder='set text search parameter ' onChange={(e)=>{setSearchParam({text:e.target.value,age:30})}} /><br/><br/>
   <button onClick={()=>setSearchParam({age:40})}>set in Quary Params age to 40</button>
    </div>
  )
}

export default Filter