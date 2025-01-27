import React from "react";
import { TextField, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12}>
          <TextField
            id="Blogname"
            label="Blog Name"
            variant="outlined"sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', color: 'red',
              fontFamily: 'monospace', fontWeight: 'bold', padding: '10px', borderRadius: '5px'
            }}
          />
        </Grid>
        <Grid item xs={12}>
        <br />
        <br /> 
        <br />
          <TextField
            id="outlined-multiline-static"
            label="Description"
            variant="outlined"
            multiline
          rows={6}
          sx={{ position: 'absolute', left: '49.9%', transform: 'translateX(-52%)', color: 'red',
            fontFamily: 'monospace', fontWeight: 'bold', padding: '10px', borderRadius: '5px'
          }}
          />
        </Grid>
        <Grid item xs={12}>
          <br />
          <br />
          <br />
          <br /> 
          <br />
          <br /> 
          <br />
          <br /> 
          <br /> 

 
          <TextField
            id="Author"
            label="Author"
            variant="outlined"
            sx={{ position: 'absolute', left: '49.9%', transform: 'translateX(-49%)', color: 'red',
              fontFamily: 'monospace', fontWeight: 'bold', padding: '14px', borderRadius: '30px'
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Link to="/" style={{ textDecoration: "none" }}>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Blog;
