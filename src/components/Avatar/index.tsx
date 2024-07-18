import styles from "./Avatar.module.scss";
import placeholder from "assets/placeholder.png";
import OnlineCircle from "svg/OnlineCircle";
import cx from "classnames";

interface AvatarProps {
  src?: string;
  width: number;
  alt?: string;
  isOnline?: boolean;
  withOutline?: boolean;
}
export default function Avatar({
  src = placeholder,
  alt,
  width,
  isOnline,
  withOutline = false,
}: AvatarProps): JSX.Element {
 
  const circleWidth = width / 3;
  const online = isOnline ? <OnlineCircle width={circleWidth} /> : false;
  return (
    <div className={styles.avatarBlock}>
      <img
        src={src}
        width={width}
        className={cx({
          [styles.avatar]: true,
          [styles.avatarWithOutline]: withOutline,
        })}
        alt={alt}
        onError={(event)=> event.currentTarget.src = placeholder}
      />
      <div className={styles.online}>{online}</div>
    </div>
  );
}
