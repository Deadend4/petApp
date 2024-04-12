import React from "react";
import styles from "./Avatar.module.scss";
import placeholder from "../../../assets/placeholder.png";

interface AvatarProps {
  src: string;
  width: number;
  alt: string;
}
export default function Avatar({
  src = placeholder,
  alt,
  width,
}: AvatarProps): JSX.Element {
  return (
    <img
      src={src || placeholder}
      width={width}
      className={styles.avatar}
      alt={alt}
    />
  );
}
