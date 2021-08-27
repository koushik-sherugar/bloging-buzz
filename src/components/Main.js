import React from "react";
import { posts } from "../Data/Data";
import Grid from "@material-ui/core/Grid";
import { Divider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Markdown from "markdown-to-jsx";

const Main = ({ title }) => {
  return (
    <>
      <Grid item xs={12} md={8} spacing={1}>
        <Typography variant="h4" gutterBottom color="initial">
          {title}
        </Typography>
        <Divider />
        {posts.map((post) => (
          <Markdown key={post.body}>{post.body}</Markdown>
        ))}
      </Grid>
    </>
  );
};

export default Main;
