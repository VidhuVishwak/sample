import { TextField } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [n1,setn1]=useState(0)

    var add=()=>{
        setn1(n1+1)
    }
    var sub=()=>{
        setn1(n1-1)
    }

  return (
    <div>
       <div className='sign'>
        <h1>Counter: {n1}</h1>
        
        <button onClick={sub}>-</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={add}>+</button>
       </div>
    </div>
  )
}

export default Counter