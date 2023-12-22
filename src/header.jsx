import React from 'react';
import { Grid, Button,Avatar,Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./header.css"
function Header() {
  return (
    <div>
      <Grid container spacing={2} id="header-full">
        <Grid item lg={12}xs={12} sx={{display:'flex',justifyContent:'space-between'}}>
        <Grid item lg={2} sx={2} id="header-left">
          <img src="logo.png" alt="" />
        </Grid>
        <Grid item lg={8} md={8} sx={4} id="header-right" gap={1}>
          <div id='header-box'>
            <Avatar src="cat.jpg" sx={{borderRadius:"50%",border:"1"}}/>
            <Typography sx={{color:"#333"}}>XYZ Enterprises Pvt. Ltd</Typography>
          </div>
          <Button variant='contained' id='header-button' sx={{background:"#fff"}}>
            <ExpandMoreIcon sx={{color:'#333'}} />
          </Button>
        </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;