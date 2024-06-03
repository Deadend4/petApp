import styles from "./SideMenuItem.module.scss";
import { Link } from "react-router-dom";
import cx from "classnames";

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
  const renderContent = (
    <div>
      {icon} {title}
    </div>
  );
  const renderItem =
    link.length > 0 ? (
      <Link
        to={link}
        className={cx({
          [styles.menuItem]: true,
          [styles.selectedItem]: isSelected,
          [styles.link]: true,
        })}
      >
        {renderContent}
      </Link>
    ) : (
      <button
        className={cx({
          [styles.menuItem]: true,
          [styles.selectedItem]: isSelected,
        })}
      >
        {renderContent}
      </button>
    );
  return renderItem;
}
