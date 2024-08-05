import SpecIcon from "src/svg/SpecIcons/SpecIcon";
import Avatar from "../Avatar";
import styles from "./EventCard.module.scss";
import { specIconType } from "src/types/SpecIconTypes";
import { format } from "date-fns";

interface EventCardProps {
  avatar: string;
  date: number;
  type: specIconType;
  label: string;
}
export default function EventCard({
  avatar,
  date,
  label,
  type,
}: EventCardProps): JSX.Element {
  const formattedDate = format(date, "dd.MM.yyyy");
  const formattedTime = format(date, "kk:mm");
  return (
    <div className={styles.card}>
      <Avatar width={52} alt="Аватар" src={avatar} />
      <div className={styles.innerBlock}>
        <div className={styles.date}>
          <span>{formattedDate}</span>
          <div className={styles.vr} />
          <span>{formattedTime}</span>
        </div>
        <div className={styles.info}>
          <span className={styles.icon}>
            <SpecIcon color="primary" type={type} width={20} />
          </span>

          <span>{label}</span>
        </div>
      </div>
    </div>
  );
}
