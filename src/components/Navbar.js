import React from "react";
import { Toolbar, Divider, IconButton, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {} from "@material-ui/core";
import { Typography, Badge } from "@material-ui/core";
import SideDrawer from "./SideDrawer";
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  tagline: {
    fontSize: 20,
    textTransform: "uppercase",
    justifyContent: "centre",
  },
}));
const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <Toolbar>
        <SideDrawer>
          <IconButton className="inherit">
            <MenuIcon />
          </IconButton>
        </SideDrawer>
        <Typography variant="h6" className={classes.title}>
          Bloging Buzz
        </Typography>

        <IconButton className="inherit">
          <Badge>
            <Badge badgeContent={4} color="secondary" />
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <IconButton className="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <Toolbar className={classes.tagline}>
        <h2>world of knowlege</h2>
      </Toolbar>
    </>
  );
};

export default Navbar;
