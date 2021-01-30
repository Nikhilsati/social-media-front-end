import React from "react";
import Card from "../../components/card/Card";
import Paper from "../../components/paper/Paper";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "50%",
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
  );
};

export default Home;
