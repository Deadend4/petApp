import React, { ReactNode } from "react";
import styles from "./CheckboxWithLabel.module.scss";

interface CheckboxWithLabel {
  label: ReactNode;
}
export default function CheckboxWithLabel({
  label,
}: CheckboxWithLabel): JSX.Element {
  return (
    <label className={styles.checkboxBlock}>
      <input type="checkbox" className={styles.checkbox} />
      <div className={styles.fakeCheckbox} />
      {label}
    </label>
  );
}
