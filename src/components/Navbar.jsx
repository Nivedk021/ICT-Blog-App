import React from 'react'
import App from '../App'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar sx={{ backgroundColor:'azure' }}>
        <Toolbar>
        <Link to={"/"}>
        <Button variant="contained" color="error">HOME</Button>
        </Link> &nbsp;
        &nbsp; 
        <Link to={"/a"}>
        <Button variant="contained" color="error">BLOG </Button>
        </Link>&nbsp;
        &nbsp;
        <Typography variant="h3" sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', color: 'red',
          fontFamily: 'monospace', fontWeight: 'bold', padding: '10px', borderRadius: '5px'
        }}>
          BLOG
        </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
