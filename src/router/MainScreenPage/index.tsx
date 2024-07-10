import styles from "./MainScreenPage.module.scss";
import PetLink from "components/PetLink";
import UserCard from "components/UserCard";
import PawBuddyLogo from "svg/PawBuddyLogo";
import SideMenuItem from "components/SideMenuItem";
import SideMenuIcon from "svg/SideMenu/SideMenuIcon";
import SetRouterTitle from "utils/setRouterTitle";
import { Link, Outlet } from "react-router-dom";
import useAuth from "src/hooks/useAuth";
import { useState } from "react";
import { MenuContext } from "src/context/MenuContext";

export default function MainScreenPage(): JSX.Element {
  SetRouterTitle("Ваши питомцы");
  const { user } = useAuth();
  const [isMenu, setIsMenu] = useState(true);
  const dashboard = <SideMenuItem icon={<SideMenuIcon type="dashboard" />} title="Доска"  key="dashboard"/>;
  const contacts = <SideMenuItem icon={<SideMenuIcon type="contacts" />} title="Контакты"  key="contacts"/>;
  const calendar = <SideMenuItem icon={<SideMenuIcon type="calendar" />} title="Календарь" link="/calendar" key="calendar"/>;
  const account = <SideMenuItem icon={<SideMenuIcon type="account" />} title="Аккаунт" link="/account" key="account" />
  const settings = <SideMenuItem icon={<SideMenuIcon type="settings" />} title="Настройки" link="/settings" key="settings" />
  return (
    <MenuContext.Provider value={{isMenu, setIsMenu}}>
      <div className={styles.background}>
      <div className={styles.mainScreenBlock}>
        <div className={isMenu ? styles.sideMenu : styles.sideMenuHidden}>
          <Link to="/home" className={styles.logo}>
            <PawBuddyLogo width={172} height={100} />
          </Link>
          <hr />
          <div className={styles.yourPetsBlock}>
            <p>Ваши питомцы</p>
            <div className={styles.yourPets}>
              <PetLink />
            </div>
          </div>
          <hr />
          <div className={styles.buttonsBlock}>
            {dashboard}
            {contacts}
            {calendar}
          </div>
          <hr />
          <div className={styles.buttonsBlock}>
            {account}
            {settings}
          </div>

          <UserCard
            user={{
              title: user!.name ? user!.name : user!.email,
              src: user!.photo,
            }}
          />
        </div>
        <div className={isMenu ? styles.rightSide : styles.rightSideShown}>
          <Outlet />
        </div>
      </div>
    </div>
    </MenuContext.Provider>
    
  );
}
