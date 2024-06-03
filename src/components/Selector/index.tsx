import { SelectHTMLAttributes } from "react";
import styles from "./Selector.module.scss";
import selectArrow from "assets/selectArrow.svg";

interface SelectorProps extends SelectHTMLAttributes<HTMLSelectElement> {}
export default function Selector({
  ...otherProps
}: SelectorProps): JSX.Element {
  return (
    <div className={styles.selector}>
      <img src={selectArrow} className={styles.selectArrow} />
      <select {...otherProps}></select>
    </div>
  );
}
