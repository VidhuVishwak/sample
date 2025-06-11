import { Card, CardContent, Grid, TextField, Typography, Button } from '@mui/material'
import React from 'react'

const Welcome = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid size={6}>
                    <Card className='wel' sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <div >
                                <h1>Welcome to My APP</h1>
                                <p>Login or Signup to continue using our sevices</p>
                            </div>
                        </CardContent>
                    </Card>

                </Grid>
                <Grid size={6}>
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
                        <button>Login</button> or <a href="./signup">Signup</a>
                    </div>
                </Grid>

            </Grid>


        </div>
    )
}

export default Welcome