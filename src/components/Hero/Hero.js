import React from "react";
import classes from "./Hero.module.css";
import Button from "../Button/Button";
const Hero = () => {
  return (
    <div className={classes.container}>
      <div>
        <h1>Personalized Third Party Logistics Provider Selection</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          pretium blandit tellus, sed mattis est euismod ut. Fusce maximus
          rutrum orci sed sagittis. Ut tincidunt mi eu varius euismod. Donec
          egestas magna vel volutpat ultricies. Pellentesque leo mauris,
          consectetur et tincidunt ac, congue in magna. Vestibulum quam dolor,
          rhoncus ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur pretium blandit tellus, sed mattis est euismod ut. Fusce
          maximus rutrum orci sed sagittis. Ut tincidunt mi eu varius euismod.
          Donec egestas magna vel volutpat ultricies. Pellentesque leo mauris,
          consectetur et tincidunt ac, congue in magna. Vestibulum quam dolor,
          rhoncus ut.
        </p>
        {/* <Button
          text="Contact us to get started."
          clicked={() => {
            console.log("asd");
          }}
        /> */}
      </div>
    </div>
  );
};

export default Hero;
