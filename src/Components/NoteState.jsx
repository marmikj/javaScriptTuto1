import React from 'react'
import NoteContext from './NoteContext'

const NoteState=(props)=> {
    const state ={
        "name" :'marmik',
        "class":"5b"
    }
  return (
    <div>
    <NoteContext.Provider value={state}>
    {props.children}
    </NoteContext.Provider>
    </div>
  )
}

export default NoteState