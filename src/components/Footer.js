import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(4),
    padding: theme.spacing(6, 0),
  },
}));
export default function Footer({ title, description }) {
  const classes = useStyles();
  return (
    <footer className={classes.RightNavFooter}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center">
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          align="center"
          component="p"
        >
          {description}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" align="center">
          {" "}
          Copyright &copy; koushik sherugar
          {/* <Link color="inherent" href="https://www.netflix.com/browse">
            your website
          </Link> */}
          &nbsp; | &nbsp; {new Date().getFullYear()}
        </Typography>
      </Container>
    </footer>
  );
}
