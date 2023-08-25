import React, { useEffect, useRef } from 'react'

function User(props) {
    const lastval=useRef()

    useEffect(() => {
        lastval.current=props.count
    })
    const privprops=lastval.current
  return (
    <div>
        <h1>current val :{props.count-privprops}</h1>
      
    </div>
  )
}

export default User