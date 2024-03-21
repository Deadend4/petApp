import React from "react";
import styles from "./MainButton.module.scss";

interface MainButtonProps {
  label: string;
}
export default function MainButton({ label }: MainButtonProps): JSX.Element {
  return (
    <button type="submit" className={styles.button}>
      {label}
    </button>
  );
}
