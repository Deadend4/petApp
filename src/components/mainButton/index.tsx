import React from "react";
import styles from "./MainButton.module.css";

interface MainButtonProps {
  label: string;
}
export default function MainButton({ label }: MainButtonProps): JSX.Element {
  return (
    <button type="button" className={styles.button}>
      {label}
    </button>
  );
}
