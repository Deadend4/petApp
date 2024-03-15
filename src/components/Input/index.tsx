import React from "react";
import styles from "./InputEmail.module.css";

interface InputEmailProps {
  type: string;
  placeholder: string;
}
export default function Input({
  type,
  placeholder,
}: InputEmailProps): JSX.Element {
  return (
    <input type={type} className={styles.email} placeholder={placeholder} />
  );
}
