import styles from "./MainScreenPage.module.scss";
import PetLink from "components/PetLink";
import UserCard from "components/UserCard";
import PawBuddyLogo from "svg/PawBuddyLogo";
import SideMenuItem from "components/SideMenuItem";
import SideMenuIcon from "svg/SideMenu/SideMenuIcon";
import SetRouterTitle from "utils/setRouterTitle";
import { Link, Outlet } from "react-router-dom";
import useAuth from "src/hooks/useAuth";

export default function MainScreenPage(): JSX.Element {
  SetRouterTitle("Ваши питомцы");
  const { user } = useAuth();

  return (
    <div className={styles.background}>
      <div className={styles.mainScreenBlock}>
        <div className={styles.sideMenu}>
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
              link="/calendar"
            />
          </div>
          <hr />
          <div className={styles.buttonsBlock}>
            <SideMenuItem
              icon={<SideMenuIcon type="account" />}
              title="Аккаунт"
              link="/account"
            />
            <SideMenuItem
              icon={<SideMenuIcon type="settings" />}
              title="Настройки"
              link="/settings"
            />
          </div>

          <UserCard
            user={{
              title: user!.name ? user!.name : user!.email,
              src: user!.photo,
            }}
          />
        </div>
        <div className={styles.rightSide}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
