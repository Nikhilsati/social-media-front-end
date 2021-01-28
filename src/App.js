import "./App.css";
import { makeStyles } from "@material-ui/core";
// import { Grid } from '@material-ui/core';
// import Paper from './components/paper/Paper';
import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import Timeline from "./components/timeline/Timeline";
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
});

function App() {
  const classes = useStyles();

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
      <header className="App-header">
        <Login />
        {/* <Timeline icons = {icons} /> */}
      </header>
    </div>
  );
}

export default App;
