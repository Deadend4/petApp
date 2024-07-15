import { Link } from "react-router-dom";
import styles from "./MobileHeader.module.scss";
import ArrowButton from "src/svg/ArrowButton";

interface BackButtonProps {
  to: string;
  title?: string;
  onClick: () => void;
}

export default function MobileHeader({
  to = "",
  title = "Title",
  onClick,
}: BackButtonProps): JSX.Element {
  return (
    <div className={styles.backButton}>
      <Link to={to} onClick={onClick} className={styles.arrow}>
        {ArrowButton()}
      </Link>
      <div className={styles.title}>{title}</div>
      <div className={styles.arrow}></div>
    </div>
  );
}
