import styles from "./PetLink.module.scss";
import Avatar from "components/Avatar";
import { Link } from "react-router-dom";
import NewPet from "svg/NewPet";

interface PetLinkProps {
  title?: string;
  avatarSrc?: string;
  url?: string;
}

export default function PetLink({
  title = "Добавить",
  avatarSrc,
  url,
}: PetLinkProps): JSX.Element {
  let renderPetLink;
  if (url) {
    renderPetLink = (
      <Link className={styles.petCard} to={url}>
        <div className={styles.petAvatar}>
          <Avatar width={60} alt={"your pet " + title} src={avatarSrc} />
        </div>
        {title}
      </Link>
    );
  } else {
    renderPetLink = (
      <Link className={styles.petCard} to={url}>
        <NewPet />
        <span>{title}</span>
      </Link>
    );
  }
  return <>{renderPetLink}</>;
}
