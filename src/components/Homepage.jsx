import {Card,CardContent,Grid,Typography,
  } from "@mui/material";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  const Homepage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          console.log(res.data);
          setPosts(res.data);
        })
        .catch((err) => console.log(err));
    }, []);
  
    return (
      <div style={{ margin: "2%" }}>
        <Grid container spacing={2}>
          {posts.map((post) => (
            <Grid item xs={12} md={4} key={post.id}>
              <Card>
                <CardContent>
                  <Typography>
                    <br />
                    ID: {post.id}
                  </Typography>
                  <Typography>
                    Title: {post.title}
                  </Typography>
                  <Typography>
                    Body: {post.body}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  };
  
  export default Homepage;