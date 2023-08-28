import React, {memo}from 'react'

function ChildA({learning,count}) {
    console.warn('child A ')

  return (
    <div>
    <h1>ChildA</h1>
    </div>
  )
}

export default memo(ChildA)