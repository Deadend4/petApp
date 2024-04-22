import React from "react";
import styles from "./PetLink.module.scss";
import Avatar from "../Avatar";
import { Link } from "react-router-dom";
import NewPet from "../../svg/NewPet";

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
  let renderPetLink;
  if (url) {
    renderPetLink = (
      <Link className={styles.petCard} to={url}>
        <Avatar width={60} alt={"your pet " + name} src={avatarSrc} />
        {name}
      </Link>
    );
  } else {
    renderPetLink = (
      <Link className={styles.petCard} to={url}>
        <NewPet />
        <span>{name}</span>
      </Link>
    );
  }
  return <>{renderPetLink}</>;
}
