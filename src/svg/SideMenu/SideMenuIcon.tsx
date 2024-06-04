import AccountIcon from "./AccountIcon";
import CalendarIcon from "./CalendarIcon";
import ContactsIcon from "./ContactsIcon";
import DashboardIcon from "./DashboardIcon";
import SettingsIcon from "./SettingsIcon";

interface SideMenuIconProps {
  type: "account" | "calendar" | "contacts" | "dashboard" | "settings";
}

export default function SideMenuIcon({ type }: SideMenuIconProps): JSX.Element {
  switch (type) {
    case "account":
      return <AccountIcon />;
    case "calendar":
      return <CalendarIcon />;
    case "contacts":
      return <ContactsIcon />;
    case "dashboard":
      return <DashboardIcon />;
    case "settings":
      return <SettingsIcon />;
    default:
      return <></>;
  }
}
