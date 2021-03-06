import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { AddIcon } from "../icons/Icons";
import { Row, Item } from "@mui-treasury/components/flex";
import { Info, InfoTitle, InfoSubtitle } from "@mui-treasury/components/info";
import { useTutorInfoStyles } from "@mui-treasury/styles/info/tutor";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
import { useDynamicAvatarStyles } from "@mui-treasury/styles/avatar/dynamic";

const useStyles = makeStyles(() => ({
  action: {
    backgroundColor: "#fff",
    boxShadow: "0 1px 4px 0 rgba(0,0,0,0.12)",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#000",
    },
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
];
const TutorCardDemo = React.memo(function TutorCard({
  profileImg,
  name,
  profileId,
}) {
  const styles = useStyles();
  const iconBtnStyles = useSizedIconButtonStyles({ padding: 6 });
  const avatarStyles = useDynamicAvatarStyles({ radius: 12, size: 48 });
  return (
    <Row p={1.5} gap={2} bgcolor={"#f5f5f5"} borderRadius={16}>
      <Item>
        <Avatar
          classes={avatarStyles}
          src={
            "https://www.biography.com/.image/t_share/MTU0ODUwMjQ0NjIwNzI0MDAx/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg"
          }
        />
      </Item>
      <Info position={"middle"} useStyles={useTutorInfoStyles}>
        <InfoTitle>Kenny Foster</InfoTitle>
        <InfoSubtitle>@fosterlive</InfoSubtitle>
      </Info>
      <Item ml={1} position={"middle"}>
        <IconButton className={styles.action} classes={iconBtnStyles}>
          <AddIcon />
        </IconButton>
        <IconButton className={styles.action} classes={iconBtnStyles}>
          X
        </IconButton>
      </Item>
    </Row>
  );
});
export default TutorCardDemo;
