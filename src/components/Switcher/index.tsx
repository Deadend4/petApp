import React from "react";
import styles from "./Switcher.module.scss";

interface SwitcherProps {
  hasLabel: boolean;
  switcherID: string;
}
export default function Switcher({
  hasLabel = false,
  switcherID,
}: SwitcherProps): JSX.Element {
  return (
    <div className={hasLabel ? styles.switcher : styles.switcherEmpty}>
      <input type="checkbox" className={styles.checkbox} id={switcherID} />
      <label className={styles.label} htmlFor={switcherID} />
    </div>
  );
}
