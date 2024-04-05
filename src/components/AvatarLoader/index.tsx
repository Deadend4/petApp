import React from "react";
import styles from "./AvatarLoader.module.scss";
import avatarImage from "../../../assets/LogoPawBuddy.png";

export default function AvatarLoader() {
  return (
    <>
      <input type="file" className={styles.avatarUploader} />
      <img src={avatarImage}></img>
    </>
  );
}
