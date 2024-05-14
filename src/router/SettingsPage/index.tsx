import React from "react";
import SetRouterTitle from "../../utils/setRouterTitle";
import styles from "./SettingsPage.module.scss";
import SettingCard from "../../components/SettingCard";
import getSettingsIcon from "../../utils/getSettingsIcon";
import SelectTimezone from "../../components/SelectTimezone";
import Selector from "../../components/Selector";
import Switcher from "../../components/Switcher";

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
            <SettingCard
              settingIcon={getSettingsIcon("timezone")}
              title="Часовой пояс"
              description="Выберите свой часовой пояс"
              element={<SelectTimezone />}
            />
            <SettingCard
              settingIcon={getSettingsIcon("language")}
              title="Язык"
              description="Выберите язык приложения"
              element={
                <Selector>
                  <option value="ru">Русский</option>
                  <option value="en">English</option>
                </Selector>
              }
            />
            <SettingCard
              settingIcon={getSettingsIcon("darkMode")}
              title="Темная тема"
              description="Выберите режим отображения"
              element={<Switcher switcherID="darkMode" hasLabel />}
            />
          </div>
        </div>
        <hr />
        <div className={styles.category}>
          <h2>Разрешения</h2>
          <div className={styles.settingsItems}>
            <SettingCard
              settingIcon={getSettingsIcon("locationAccess")}
              title="Доступ к местоположению"
              description="Доступ к Вашему местоположению"
              element={<Switcher switcherID="locationAccess" hasLabel />}
            />
            <SettingCard
              settingIcon={getSettingsIcon("photoAccess")}
              title="Доступ к фотографиям"
              description="Доступ к Вашим медиафайлам"
              element={<Switcher switcherID="photoAccess" hasLabel />}
            />
          </div>
        </div>
        <hr />
        <div className={styles.category}>
          <h2>Уведомления</h2>
          <div className={styles.settingsItems}>
            <SettingCard
              settingIcon={getSettingsIcon("appNotifications")}
              title="Уведомления приложения"
              description="Получение push-уведомлений"
              element={<Switcher switcherID="appNotifications" hasLabel />}
            />
            <SettingCard
              settingIcon={getSettingsIcon("emailNotifications")}
              title="Email-уведомления"
              description="Получение уведомлений на почту"
              element={<Switcher switcherID="emailNotifications" hasLabel />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
