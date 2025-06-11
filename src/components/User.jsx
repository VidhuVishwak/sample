import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const User = () => {
    var [user, setuser] = useState([])
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            setuser(res.data)
        })



    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                    <TableHead >
                        <TableRow >
                            <TableCell sx={{  fontSize:"30px" }}>Name</TableCell>
                            <TableCell sx={{  fontSize:"30px" }}>Username</TableCell>
                            <TableCell sx={{  fontSize:"30px" }}>City</TableCell>
                        </TableRow>
                    </TableHead>



                    <TableBody>
                        {user.map((val) => {
                            return (
                                <TableRow>
                                    <TableCell>{val.name}</TableCell>
                                    <TableCell>{val.username}</TableCell>
                                    <TableCell>{val.address.city}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>


                </Table>
            </TableContainer>
        </div>
    )
}

export default User