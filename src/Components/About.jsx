import React, { useContext } from 'react'
import ContextApiEx from './NoteContext'

const About=()=>{
    const a = useContext(ContextApiEx)
  return (
    <div>About  :{a.name} <br /><br />  
    class:{a.class}
    </div>
  )
}

export default About