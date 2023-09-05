import React from 'react'

function Users(props) {
  return (
    <div>Users : {props.data.name}<br/>
    Age : {props.data.age}
    </div>
  )
}

export default Users