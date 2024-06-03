import { ReactNode, forwardRef } from "react";
import styles from "./CheckboxWithLabel.module.scss";

interface CheckboxWithLabel
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
  helper?: string;
  error?: boolean;
}
const CheckboxWithLabel = forwardRef<HTMLInputElement, CheckboxWithLabel>(
  function CheckboxWithLabel(
    { label, helper, error, ...restInputProps },
    ref,
  ): JSX.Element {
    const showHelper = <label className={styles.helper}>{helper}</label>;
    const showError = <label className={styles.error}>{helper}</label>;
    return (
      <div>
        <label className={error ? styles.errorContainer : styles.container}>
          <input
            type="checkbox"
            className={styles.checkbox}
            ref={ref}
            {...restInputProps}
          />
          <div className={styles.fakeCheckbox} />
          {label}
        </label>
        {error ? showError : showHelper}
      </div>
    );
  },
);
export default CheckboxWithLabel;
