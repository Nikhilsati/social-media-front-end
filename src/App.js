import "./App.css";
import { makeStyles } from "@material-ui/core";
// import { Grid } from '@material-ui/core';
// import Paper from './components/paper/Paper';
import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import Timeline from "./components/timeline/Timeline";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/home/Home";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  ArrowDropUpIcon,
  ArrowDropDownIcon,
  AccountBalanceIcon,
  AddIcon,
  BookmarkBorderIcon,
  BrightnessIcon,
  CameraIcon,
  FilterCenterFocusIcon,
  HomeIcon,
  SendIcon,
  TagFacesIcon,
  LikeIcon,
  UserIcon,
} from "./components/icons/Icons.js";
const useStyles = makeStyles({
  root: {
    // backgroundColor: "black"
  },
  container: {
    height: "calc(100vh - 50px)",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

function App() {
  const classes = useStyles();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const icons = [
    {
      icon: <AccountBalanceIcon />,
    },
    {
      icon: <AddIcon />,
    },
    {
      icon: <BookmarkBorderIcon />,
    },
    {
      icon: <CameraIcon />,
    },
    {
      icon: <HomeIcon />,
    },
    {
      icon: <SendIcon />,
    },
    {
      icon: <TagFacesIcon />,
    },
    {
      icon: <LikeIcon />,
    },
    {
      icon: <UserIcon />,
    },
  ];
  return (
    <div className={classes.root}>
      <Header />
      <PerfectScrollbar className={classes.container}>
        <Switch>
          <Route path="/" exact>
            {isLoggedIn ? <Home /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login" exact>
            {isLoggedIn ? <Redirect to="/" /> : <Login />}
          </Route>
        </Switch>
      </PerfectScrollbar>
    </div>
  );
}

export default App;
