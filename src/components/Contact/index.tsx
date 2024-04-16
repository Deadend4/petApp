import React from "react";
import Avatar from "../Avatar";
import styles from "./Contact.module.scss";
import RatingStar from "../../svg/RatingStar";

interface PetProps {
  name: string;
  image: string;
}

interface UserProps {
  name: string;
  avatar: string;
  email: string;
  rating: string;
  specialization: string;
  isCustomer: boolean;
  pets: Array<PetProps>;
}

interface ContactProps {
  email: string;
  isOnline: boolean;
  user: UserProps;
}

export default function Contact({ isOnline, user }: ContactProps): JSX.Element {
  const renderRating = !user.isCustomer ? (
    <span>
      (<RatingStar width={15} />
      {user.rating})
    </span>
  ) : (
    false
  );
  const renderSpecialization = user.isCustomer
    ? user.email
    : user.specialization;
  const currentPets = user.pets?.map((value, index) => {
    const currentGap = index * 20;
    return (
      <div
        key={value.name}
        className={styles.overflowPets} //index > 0 ? styles.overflowPets : null
        style={{ left: -currentGap }}
      >
        <Avatar
          src={value.image}
          alt={value.name}
          key={value.name}
          isOnline={false}
          width={34}
          isOutline={true}
        />
      </div>
    );
  });
  return (
    <div className={styles.contactBlock}>
      <div className={styles.leftPart}>
        <Avatar
          src={user.avatar}
          width={54}
          alt="default avatar"
          isOnline={isOnline}
          isOutline={false}
        />
        <div className={styles.contactInfoBlock}>
          <div className={styles.rating}>
            <p className={styles.name}>{user.name}</p>
            {renderRating}
          </div>
          <p className={styles.email}>{renderSpecialization}</p>
        </div>
      </div>
      <div className={styles.rightPart}>{currentPets}</div>
    </div>
  );
}
