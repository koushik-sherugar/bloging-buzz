import React from "react";
import { Card, CardContent, makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
const UseStyle = makeStyles({
  cover: {
    backgroundImage: `url(https://images.unsplash.com/photo-1615469038804-6b91aef7026f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max)`,
    backgroundPosition: "center",
    padding: "35px 25px",
  },
  btn: {
    cursor: "pointer",
    background: "transparent",
    boxShadow: "0px 0px 0px transparent",
    border: "0px solid transparent",
    textShadow: " 0px 0px 0px transparent",
    color: "skyblue",
  },
});
const Featured = () => {
  const classes = UseStyle();
  return (
    <>
      <Card className={classes.cover}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            Welcome To Blogging Buzz
          </Typography>
          <Typography variant="h5" gutterBottom>
            The award winning blogging site ,with more than 1 million users .
            The main motto of our content creaters is to spread the knowledge
            about the technology through out the world. All the blogs posted in
            our site are varified by the tech experts
          </Typography>
          <button variant="text" className={classes.btn}>
            Read more...
          </button>
        </CardContent>
      </Card>
      <br />
    </>
  );
};

export default Featured;
