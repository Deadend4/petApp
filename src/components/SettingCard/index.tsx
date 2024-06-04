import React from "react";
import styles from "./SettingCard.module.scss";
import placeholder from "assets/placeholder.png";
import SelectTimezone from "components/SelectTimezone";

interface SettingCardProps {
  settingIcon: string;
  title: string;
  description: string;
  element: JSX.Element;
}
export default function SettingCard({
  settingIcon = placeholder,
  title = "Title",
  description = "Description",
  element = <SelectTimezone />,
}: SettingCardProps): JSX.Element {
  return (
    <div className={styles.settingCard}>
      <div className={styles.leftSide}>
        <img src={settingIcon} width={54} height={54} />
        <div className={styles.description}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.rightSide}>{element}</div>
    </div>
  );
}
