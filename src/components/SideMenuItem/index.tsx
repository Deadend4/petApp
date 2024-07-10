import styles from "./SideMenuItem.module.scss";
import { Link } from "react-router-dom";
import cx from "classnames";
import {useContext} from 'react';
import { MenuContext } from "src/context/MenuContext";

interface SideMenuItemProps {
  title: string;
  link?: string;
  icon: JSX.Element;
  isSelected?: boolean;
}

export default function SideMenuItem({
  title = "",
  link = "",
  icon,
  isSelected = false,
}: SideMenuItemProps): JSX.Element {
  const {setIsMenu} = useContext(MenuContext);
  const renderContent = (
    <div>
      {icon} {title}
    </div>
  );
  const renderItem =
      <Link
        to={link}
        className={cx({
          [styles.menuItem]: true,
          [styles.selectedItem]: isSelected,
          [styles.link]: true,
        })}
        onClick={() => {setIsMenu?.((isMenu) => !isMenu)}}
      >
        {renderContent}
      </Link>
  return renderItem;
}
