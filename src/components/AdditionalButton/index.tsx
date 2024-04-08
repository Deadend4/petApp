import React, { ButtonHTMLAttributes } from "react";
import styles from "./AdditionalButton.module.scss";

interface AdditionalButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}
export default function AdditionalButton({
  label,
  ...otherProps
}: AdditionalButtonProps): JSX.Element {
  return (
    <button className={styles.button} {...otherProps}>
      {label}
    </button>
  );
}
