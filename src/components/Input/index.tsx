import React, { InputHTMLAttributes, forwardRef, useState } from "react";
import styles from "./Input.module.scss";
import openedEye from "../../../assets/openedEye.svg";
import closedEye from "../../../assets/closedEye.svg";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helper?: string;
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, label, helper = "", error, ...otherProps }, ref): JSX.Element => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    const hiddenPassword = showPassword ? "text" : "password";
    const showLabel = <label className={styles.label}>{label}</label>;
    const showHelper = <label className={styles.helper}>{helper}</label>;
    const showError = <label className={styles.error}>{helper}</label>;
    return (
      <div className={styles.labelsBlock}>
        {showLabel}
        <div className={styles.passwordBlock}>
          <input
            ref={ref}
            type={isPassword ? hiddenPassword : type}
            className={error ? styles.errorInput : styles.input}
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
        {error ? showError : showHelper}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
