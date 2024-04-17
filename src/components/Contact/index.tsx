import React from "react";
import Avatar from "../Avatar";
import styles from "./Contact.module.scss";
import RatingStar from "../../svg/RatingStar";

interface WardsProps {
  id: string;
  name: string;
  image: string;
}

interface UserProps {
  avatar: string;
  title: string;
  subtitle: string;
  rating: number;
  wards: Array<WardsProps>;
}

interface ContactProps {
  isOnline: boolean;
  user: UserProps;
}

const defaultProps: ContactProps = {
  isOnline: false,
  user: {
    title: "Иван Иванов",
    subtitle: "Подзаголовок",
    avatar: "",
    rating: 0,
    wards: [
      {
        id: "1",
        name: "ward1",
        image: "",
      },
      {
        id: "2",
        name: "ward2",
        image: "",
      },
    ],
  },
};

function Contact({ isOnline, user }: ContactProps): JSX.Element {
  const renderRating =
    user.rating > 0 ? (
      <span>
        (<RatingStar width={15} />
        {user.rating})
      </span>
    ) : (
      false
    );
  const currentWards = user.wards?.map((value, index) => {
    const currentGap = index * 20;
    return (
      <div
        key={user.title + value.id}
        className={styles.overflowWards}
        style={{ left: -currentGap }}
      >
        <Avatar
          src={value.image}
          alt={value.name}
          key={"avatar" + value.id}
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
            <p className={styles.name}>{user.title}</p>
            {renderRating}
          </div>
          <p className={styles.email}>{user.subtitle}</p>
        </div>
      </div>
      <div className={styles.rightPart}>{currentWards}</div>
    </div>
  );
}

Contact.defaultProps = defaultProps;

export default Contact;
