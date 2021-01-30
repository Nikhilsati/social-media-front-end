import React from "react";
import {
  Card as Cd,
  CardHeader,
  Avatar,
  IconButton,
  makeStyles,
  CardMedia,
  CardActions,
} from "@material-ui/core/";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { CommentIcon, LikeIcon, SendIcon } from "../icons/Icons";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: 20,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  seperatingIcons: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Card = ({ avatar, title, date, postImage, postImageTitle }) => {
  const classes = useStyles();
  return (
    <Cd className={classes.card}>
      <CardHeader
        avatar={<Avatar {...avatar} />}
        action={
          <IconButton aria-label="expand">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={date}
      />
      <CardMedia
        className={classes.media}
        image={postImage}
        title={postImageTitle}
      />
      <CardActions disableSpacing className={classes.seperatingIcons}>
        <div>
          <IconButton aria-label="add to favorites">
            <LikeIcon />
          </IconButton>
          <IconButton aria-label="share">
            <SendIcon />
          </IconButton>
        </div>
        <IconButton>
          <CommentIcon />
        </IconButton>
      </CardActions>
    </Cd>
  );
};

export default Card;
