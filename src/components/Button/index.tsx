import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isPrimary: boolean;
  label: string;
}
export default function Button({
  isPrimary = true,
  label,
  ...otherProps
}: ButtonProps): JSX.Element {
  return (
    <button
      className={isPrimary ? styles.primaryButton : styles.secondaryButton}
      {...otherProps}
    >
      {label}
    </button>
  );
}
