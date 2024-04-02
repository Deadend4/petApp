import React, { useState } from "react";
import styles from "./Input.module.scss";
import { UseFormRegister } from "react-hook-form";
import openedEye from "../../../assets/opened_eye.svg";
import closedEye from "../../../assets/closed_eye.svg";

interface InputEmailProps {
  type: string;
  placeholder: string;
  value: "name" | "email" | "password";
  register: UseFormRegister<IFormValues>;
}
interface IFormValues {
  name: string;
  email: string;
  password: string;
}
export default function Input({
  type,
  placeholder,
  value,
  register,
}: InputEmailProps): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);
  switch (type) {
    case "password":
      return (
        <div className={styles.passwordBlock}>
          <input
            type={showPassword ? "text" : "password"}
            className={styles.password}
            placeholder={placeholder}
            {...register(value, { required: true, maxLength: 30 })}
          />
          <input
            type="checkbox"
            className={styles.passwordControl}
            id="eyeCreateAccount"
            onChange={(e) => {
              setShowPassword(e.target.checked);
            }}
          />
          <label htmlFor="eyeCreateAccount">
            <img
              src={showPassword ? closedEye : openedEye}
              alt="show"
              className={styles.passwordOpened}
            />
          </label>
        </div>
      );
    default:
      return (
        <>
          <input
            type={type}
            className={styles.email}
            placeholder={placeholder}
            {...register(value, { required: true, maxLength: 30 })}
          />
        </>
      );
  }
}
