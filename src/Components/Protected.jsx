import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Protected(props) {
     const {Component}=props
     const navigate =useNavigate()

     useEffect(()=>{
        let login = localStorage.getItem('login')
        if(!login) {
            navigate('/login')
        }
     })
  return (
    <div>

    abc
    <Component/>
    </div>
    
  )
}

export default Protected