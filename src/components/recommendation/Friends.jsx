import React from "react";
import Paper from "../paper/Paper";
import Friend from "./Friend";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

const Friends = () => {
  const classes = useStyles();
  return (
    <Paper glass className={classes.root}>
      <Friend />
      <Friend />
      <Friend />
    </Paper>
  );
};

export default Friends;
