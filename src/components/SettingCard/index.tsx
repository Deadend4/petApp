import React from "react";
import styles from "./SettingCard.module.scss";
import placeholder from "../../../assets/placeholder.png";
import SelectTimezone from "../SelectTimezone";

interface SettingCardProps {
  settingIcon: string;
  title: string;
  description: string;
}
export default function SettingCard({
  settingIcon = placeholder,
  title = "Title",
  description = "Description",
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
      <div className={styles.rightSide}>
        <SelectTimezone />
      </div>
    </div>
  );
}
