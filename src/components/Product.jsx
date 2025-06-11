import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import axios from 'axios';
import { Grid } from '@mui/material';

const Product = () => {
    var [user, setuser] = useState([])
    axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            setuser(res.data)
        })

    return (
        <div className='med'>
            <Grid container spacing={2} sx={{mr:10, ml:10}} >
                {user.map((val) => {
                    return (
                        <Grid size={"auto"} sx={{mt:10,}}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={val.image}
                                        alt="image"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {val.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {val.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                    )
                })}
            </Grid>

        </div>
    )
}

export default Product