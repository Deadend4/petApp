import Paw from "src/svg/AnimatedPaw";
import styles from "./Loader.module.scss";

export default function Loader(): JSX.Element {
  return (
    <div className={styles.loaderContainer}>
      <Paw />
    </div>
  );
}
