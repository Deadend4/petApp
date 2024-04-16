import React from "react";
import styles from "./Avatar.module.scss";
import placeholder from "../../../assets/placeholder.png";
import OnlineCircle from "../../svg/OnlineCircle";

interface AvatarProps {
  src: string;
  width: number;
  alt: string;
  isOnline: boolean;
  isOutline: boolean;
}
export default function Avatar({
  src = placeholder,
  alt,
  width,
  isOnline,
  isOutline = false,
}: AvatarProps): JSX.Element {
  const circleWidth = width / 3;
  const online = isOnline ? <OnlineCircle width={circleWidth} /> : false;
  return (
    <div className={styles.avatarBlock}>
      <img
        src={src || placeholder}
        width={width}
        className={isOutline ? styles.avatarOutline : styles.avatar}
        alt={alt}
      />
      <div className={styles.online}>{online}</div>
    </div>
  );
}
