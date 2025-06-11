import { AppBar, Box, Button, colors, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom';

import React from 'react'

const NavBar = () => {
    return (
        <div className='nav'>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar sx={{ backgroundColor: '#fb1d1d' }}>
                    <Toolbar>
                        <h3>MyApp</h3> &nbsp; &nbsp; &nbsp; &nbsp;
                        <Button sx={{ backgroundColor: '#fb1d1d' }} variant="contained" href='./login'>Login</Button>&nbsp; &nbsp;
                        <Button sx={{ backgroundColor: '#fb1d1d' }} variant="contained" href='./signup'>Signup</Button>&nbsp;&nbsp;&nbsp;
                        <Button sx={{ backgroundColor: '#fb1d1d' }} variant="contained" href='./name'>Name</Button>&nbsp;&nbsp;&nbsp;
                        <Button sx={{ backgroundColor: '#fb1d1d' }} variant="contained" href='./count'>counter</Button>&nbsp;&nbsp;&nbsp;
                        <Button sx={{ backgroundColor: '#fb1d1d' }} variant="contained" href='./game'>Game</Button>&nbsp;&nbsp;&nbsp;
                        <Button sx={{ backgroundColor: '#fb1d1d' }} variant="contained" href='./user'>User</Button>&nbsp;&nbsp;&nbsp;
                        <Button sx={{ backgroundColor: '#fb1d1d' }} variant="contained" href='./pro'>Product</Button>
                    </Toolbar>
                </AppBar>
            </Box>

        </div>
    )
}

export default NavBar