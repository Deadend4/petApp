import styles from "./MainScreenPage.module.scss";
import PetLink from "components/PetLink";
import UserCard from "components/UserCard";
import PawBuddyLogo from "svg/PawBuddyLogo";
import SetRouterTitle from "utils/setRouterTitle";
import { Link, Outlet } from "react-router-dom";
import useAuth from "src/hooks/useAuth";
import { useState } from "react";
import MobileUserCard from "src/components/MobileUserCard";
import CrossButton from "src/svg/CrossButton";
import { MenuContext } from "src/context/MenuContext";
import { sideAppButtons, sideUserButtons } from "src/constants/SideMenu";

export default function MainScreenPage(): JSX.Element {
  SetRouterTitle("Ваши питомцы");
  const { user } = useAuth();
  const [isMenuShown, setIsMenuShown] = useState(false);
  return (
    <MenuContext.Provider value={{ isMenuShown, setIsMenuShown }}>
      <div className={styles.background}>
        <div className={styles.mainScreenBlock}>
          <div
            className={isMenuShown ? styles.sideMenu : styles.sideMenuHidden}
          >
            <div className={styles.mobileUserCard}>
              <MobileUserCard
                user={{
                  title: user!.name ? user!.name : user!.email,
                  src: user!.photo,
                }}
              />
              <div
                tabIndex={1}
                className={styles.closeButton}
                onClick={() => {
                  setIsMenuShown(false);
                }}
              >
                {CrossButton()}
              </div>
            </div>
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
            <div className={styles.buttonsBlock}>{sideAppButtons}</div>
            <hr />
            <div className={styles.buttonsBlock}>{sideUserButtons}</div>
            <div className={styles.userCard}>
              <UserCard
                user={{
                  title: user!.name ? user!.name : user!.email,
                  src: user!.photo,
                }}
              />
            </div>
          </div>
          <div
            className={isMenuShown ? styles.rightSide : styles.rightSideShown}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </MenuContext.Provider>
  );
}
