import React from "react";
import classes from "./Profile.module.css";
import ProfileCards from "../ProfileCards/ProfileCards"

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div className={classes.name}>Company Name</div>
      <div className={classes.year}>Year</div>
      <div className={classes.desc}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.{" "}
      </div>
      <div className={classes.area}>Operation Area</div>
      <ProfileCards />
    </div>
  );
};

export default Profile;
