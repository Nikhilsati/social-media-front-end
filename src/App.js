import "./App.css";
import { makeStyles } from "@material-ui/core";
// import { Grid } from '@material-ui/core';
// import Paper from './components/paper/Paper';
import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/home/Home";
import Friends from "./components/recommendation/Friends.jsx";
import PerfectScrollbar from "react-perfect-scrollbar";

const useStyles = makeStyles({
  root: {
    // backgroundColor: "black"
  },
  container: {
    height: "calc(100vh - 64px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 64,
  },
});

function App() {
  const classes = useStyles();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className={classes.root}>
      <Header />
      <PerfectScrollbar className={classes.container}>
        <Switch>
          <Route path="/" exact>
            {isLoggedIn ? <Home /> : <Redirect to="/login" />}
          </Route>
          <Route path="/friends" exact>
            <Friends />
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
