import React from "react";
import styles from "./PetLink.module.scss";
import Avatar from "../Avatar";
import { Link } from "react-router-dom";

interface PetLinkProps {
  name: string;
  avatarSrc: string;
  url: string;
}

export default function PetLink({
  name,
  avatarSrc,
  url,
}: PetLinkProps): JSX.Element {
  return (
    <Link className={styles.petCard} to={url}>
      <Avatar width={60} alt={"your pet " + name} src={avatarSrc} />
      {name}
    </Link>
  );
}
