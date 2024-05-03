import React from "react";
import styles from "./MainScreenPage.module.scss";
import UserCard from "../../components/UserCard";
import PawBuddyLogo from "../../svg/PawBuddyLogo";
import PetLink from "../../components/PetLink";
import SideMenuItem from "../../components/SideMenuItem";
import SideMenuIcon from "../../svg/SideMenu/SideMenuIcon";
import emptyPetProfile from "../../../assets/EmptyPetProfile.png";
import Button from "../../components/Button";

export default function MainScreenPage(): JSX.Element {
  return (
    <div className={styles.mainScreenBlock}>
      <div className={styles.sideMenu}>
        <PawBuddyLogo width={172} height={100} />
        <hr />
        <div className={styles.yourPetsBlock}>
          <p>Ваши питомцы</p>
          <div className={styles.yourPets}>
            <PetLink />
          </div>
        </div>
        <hr />
        <div className={styles.buttonsBlock}>
          <SideMenuItem
            icon={<SideMenuIcon type="dashboard" />}
            title="Доска"
          />
          <SideMenuItem
            icon={<SideMenuIcon type="contacts" />}
            title="Контакты"
          />
          <SideMenuItem
            icon={<SideMenuIcon type="calendar" />}
            title="Календарь"
          />
        </div>
        <hr />
        <div className={styles.buttonsBlock}>
          <SideMenuItem
            icon={<SideMenuIcon type="account" />}
            title="Аккаунт"
          />
          <SideMenuItem
            icon={<SideMenuIcon type="settings" />}
            title="Настройки"
          />
        </div>

        <UserCard />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.titleAndBody}>
          <h1>О нет!</h1>
          <p>
            Похоже, на данный момент у Вас нет настроенных профилей, Вы можете
            добавить своего питомца
          </p>
          <img
            src={emptyPetProfile}
            width={368}
            height={368}
            alt="Empty pet profile image"
          />
        </div>
        <Button isPrimary={true} label={"Добавить питомца"} />
      </div>
    </div>
  );
}
