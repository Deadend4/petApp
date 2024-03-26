import React, { InputHTMLAttributes, forwardRef, useState } from "react";
import styles from "./Input.module.scss";
import openedEye from "../../../image/opened_eye.svg";
import closedEye from "../../../image/closed_eye.svg";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, ...otherProps }, ref): JSX.Element => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    const hiddenPassword = showPassword ? "text" : "password";

    return (
      <div className={styles.passwordBlock}>
        <input
          ref={ref}
          type={isPassword ? hiddenPassword : type}
          className={styles.password}
          {...otherProps}
        />
        {isPassword && (
          <button
            type="button"
            className={styles.passwordControl}
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            <img
              src={showPassword ? closedEye : openedEye}
              alt="show"
              className={styles.passwordOpened}
            />
          </button>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
