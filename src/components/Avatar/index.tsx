import React from "react";
import styles from "./Avatar.module.scss";

interface AvatarProps {
  src: string;
  width: number;
}
export default function Avatar({ src, width }: AvatarProps): JSX.Element {
  return <img src={src} width={width} className={styles.avatar} />;
}
