import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Name=()=>{
    var [name,setName]=useState("Vidhu")
    var n1=(e)=>{
        setName(e.target.value)
    }
    var [a,seta]=useState('')
    var change=()=>{
        seta(name)
        
    }

    
    return (
        <div>
            <div className='sign'>
                <h1>Welcome {a}</h1>
                <TextField id="outlined-basic" label="Enter Name" variant="outlined" onChange={n1} /><br /><br />
                <button onClick={change}>Add name</button>
            </div>

        </div>
    )
}

export default Name