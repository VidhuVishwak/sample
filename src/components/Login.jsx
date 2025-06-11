import { Grid, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
    return (
        <div>
            <Grid container spacing={2}>

                <Grid size={12}>
                    <div className='log'>
                        <h1>Login page</h1>
                        <TextField
                            id="outlined-basic"
                            variant='outlined'
                            label="Email/ Username"
                        /> <br /> <br />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"

                        /> <br /> <br />
                        <button>Login</button><br />
                        <br />
                        Don't have an account? <a href="./signup">Signup</a>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Login