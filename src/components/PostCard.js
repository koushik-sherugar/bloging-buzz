import {
  CardActionArea,
  Grid,
  Card,
  Hidden,
  makeStyles,
  CardContent,
  Typography,
  CardMedia,
} from "@material-ui/core";
import React from "react";
const UseStyle = makeStyles({
  card: {
    display: "flex",
  },
  carddetail: {
    flex: 1,
  },
  media: {
    width: 160,
  },
});
const PostCard = ({ post }) => {
  const classes = UseStyle();
  return (
    <>
      <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#">
          <Card className={classes.card}>
            <div className={classes.carddetail}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {post.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {post.date}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {post.description}
                </Typography>
                <Typography variant="subtitle1" style={{ color: "skyblue" }}>
                  Continue reading...
                </Typography>
              </CardContent>
            </div>

            <Hidden xs>
              <CardMedia
                className={classes.cardMedia}
                image={post.image}
                title={post.imageTitle}
              />
            </Hidden>
          </Card>
        </CardActionArea>
      </Grid>
    </>
  );
};

export default PostCard;
