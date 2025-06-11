import { Grid, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid size={12}>
                    <div className='sign'>
                        <h1>Welcome to signup page </h1>
                        <TextField
                            id="outlined-basic"
                            variant='outlined'
                            label="Name"
                        /> &nbsp;&nbsp;&nbsp;
                        <TextField
                            id="outlined-basic"
                            variant='outlined'
                            label="Email"
                        /> <br /> <br />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="password"
                        /> &nbsp;&nbsp;&nbsp;
                        <TextField
                            id="outlined-password-input"
                            label="Re enter Password"
                            type="password"
                            autoComplete="password"
                        /> <br /> <br />
                        <button>Signup!</button><br /> <br />   
                        Already have an Account? <a href="./login">Login</a>

                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Signup