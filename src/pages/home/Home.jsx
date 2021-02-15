import React from "react";
import Card from "../../components/card/Card";
import Paper from "../../components/paper/Paper";
import { makeStyles, Grid } from "@material-ui/core";
import Friends from "../../components/recommendation/Friends";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
  },
  paper: {
    padding: 50,
  },
}));

const postItems = [
  {
    title: "lorem ipsum",
    date: new Date().toString(),
    postImage:
      "https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    postImageTitle: "LoremIpsum",
  },
  {
    title: "lorem ipsum",
    date: new Date().toString(),
    postImage:
      "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    postImageTitle: "LoremIpsum",
  },
  {
    title: "lorem ipsum",
    date: new Date().toString(),
    postImage:
      "https://images.pexels.com/photos/744667/pexels-photo-744667.jpeg?cs=srgb&dl=pexels-rakicevic-nenad-744667.jpg&fm=jpg",
    postImageTitle: "LoremIpsum",
  },
  {
    title: "lorem ipsum",
    date: new Date().toString(),
    postImage:
      "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    postImageTitle: "LoremIpsum",
  },
  {
    title: "lorem ipsum",
    date: new Date().toString(),
    postImage:
      "https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    postImageTitle: "LoremIpsum",
  },
];

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} lg={3}>
        <Friends />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Paper glass className={classes.paper}>
          {postItems.map((item) => (
            <Card
              title={item.title}
              date={new Date().toString()}
              postImage={item.postImage}
              postImageTitle={item.postImageTitle}
            />
          ))}
        </Paper>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Friends />
      </Grid>
    </Grid>
  );
};

export default Home;
