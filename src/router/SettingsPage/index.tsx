import React from "react";
import SetRouterTitle from "../../utils/setRouterTitle";
import styles from "./SettingsPage.module.scss";
import SettingCard from "../../components/SettingCard";
export default function SettingsPage(): JSX.Element {
  SetRouterTitle("Настройки");
  return (
    <div className={styles.settings}>
      <div className={styles.description}>
        <h1>Настройки</h1>
        <p>Тут Вы можете поменять настройки аккаунта</p>
      </div>
      <div className={styles.categories}>
        <div className={styles.category}>
          <h2>Персонализация</h2>
          <div className={styles.settingsItems}>
            <SettingCard />
            <SettingCard />
            <SettingCard />
          </div>
        </div>
        <hr />
        <div className={styles.category}>
          <h2>Разрешения</h2>
          <div className={styles.settingsItems}>
            <SettingCard />
            <SettingCard />
          </div>
        </div>
        <hr />
        <div className={styles.category}>
          <h2>Уведомления</h2>
          <div className={styles.settingsItems}>
            <SettingCard />
            <SettingCard />
          </div>
        </div>
      </div>
    </div>
  );
}
