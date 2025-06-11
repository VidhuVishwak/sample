import { colors, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Game = () => {
   var [name,setName]=useState('')
   var js="JavaScript"
   var [c,setc]=useState("Black")
   var re="React"
   var an="Angular"
   var j=()=>{
        setc("#1d9efb")
        setName(js)
   }
   var r=()=>{
        setc("Green")
        setName(re)
   }
   var a=()=>{
        setc("#ba1dfb")
        setName(an)
   }
   useEffect(()=>{
        r()
   },[])

    return (
        <div>
            <div className='sign'>
                <h1 style={{color:c}}>Welcome to {name}</h1>
                <button onClick={j}>JavaScript</button>&nbsp;&nbsp;
                <button onClick={r}>React</button>&nbsp;&nbsp;
                <button onClick={a}>Angular</button>
            </div>
        </div>
    )
}

export default Game