import React from "react";
import styles from "./CheckboxWithLabel.module.scss";

interface CheckboxWithLabel {
  id: string;
  label: string;
}
export default function CheckboxWithLabel({
  id,
  label,
}: CheckboxWithLabel): JSX.Element {
  return (
    <div className={styles.checkboxBlock}>
      <input type="checkbox" id={id} className={styles.checkbox} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
