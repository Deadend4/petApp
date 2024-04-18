import React from "react";
import styles from "./UserCard.module.scss";
import Avatar from "../Avatar";
import ExitIcon from "../../svg/ExitIcon";

interface UserCardProps {
  user: { title: string; src: string };
}

const defaultProps: UserCardProps = {
  user: { title: "Username", src: "" },
};

function UserCard({ user }: UserCardProps): JSX.Element {
  return (
    <div className={styles.userCardBlock}>
      <div className={styles.leftPart}>
        <Avatar
          isOnline={false}
          alt={user.title}
          withOutline={false}
          width={60}
          key="im-user"
          src={user.src}
        />
        <div className={styles.userCardContent}>
          <span>Привет,</span>
          <span>{user.title}</span>
        </div>
      </div>

      <button className={styles.exit}>
        <ExitIcon width={18} height={16} />
      </button>
    </div>
  );
}
UserCard.defaultProps = defaultProps;

export default UserCard;
