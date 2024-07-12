import styles from "./MobileUserCard.module.scss";
import Avatar from "../Avatar";

interface MobileUserCardProps {
  user: { title?: string; src?: string };
}

const defaultProps: MobileUserCardProps = {
  user: { title: "Username", src: "" },
};

function MobileUserCard({ user }: MobileUserCardProps): JSX.Element {
  return (
    <div className={styles.userCardBlock}>
      <div className={styles.leftPart}>
        <Avatar
          isOnline={false}
          alt={user.title}
          withOutline={false}
          width={45}
          key="im-user"
          src={user.src}
        />
        <div className={styles.userCardContent}>
          <span>Привет,</span>
          <span>{user.title}</span>
        </div>
      </div>
    </div>
  );
}
MobileUserCard.defaultProps = defaultProps;

export default MobileUserCard;
