import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { HomeIcon, UserIcon, SendIcon, CameraIcon } from "../icons/Icons";
import Timeline from "../timeline/Timeline";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/auth";
const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: 40,
  },
  middleMenu: {
    width: 180,
  },
}));

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    dispatch(logout());
    // setAnchorEl(null);
  };
  const user = useSelector((state) => state.auth);
  return (
    <AppBar position="fixed">
      <Toolbar variant="regular" className={classes.flex}>
        <div className={classes.flex}>
          <img
            className={classes.logo}
            src={require("../../assets/logo.png").default}
            alt="logo"
          />
        </div>
        <Timeline
          value="Home"
          showLabels
          icons={[
            {
              icon: <HomeIcon />,
              value: "Home",
              label: "Home",
            },
            {
              icon: <CameraIcon />,
              value: "Post",
              label: "Post",
            },
            {
              icon: <SendIcon />,
              value: "Message",
              label: "Message",
            },
          ]}
        />
        <div className={classes.flex}>
          {user.isLoggedIn ? (
            <div>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="user"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <UserIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <Typography variant="body1">Login</Typography>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
