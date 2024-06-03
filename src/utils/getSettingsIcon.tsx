import EmailNotifications from "assets/settingsIcon/EmailNotifications.png";
import AppNotifications from "assets/settingsIcon/AppNotifications.png";
import LocationAccess from "assets/settingsIcon/LocationAccess.png";
import PhotoAccess from "assets/settingsIcon/PhotoAccess.png";
import DarkMode from "assets/settingsIcon/DarkModeIcon.png";
import TimeZone from "assets/settingsIcon/TimeZone.png";
import Language from "assets/settingsIcon/Language.png";

type settingsIconType =
  | "timezone"
  | "language"
  | "darkMode"
  | "emailNotifications"
  | "appNotifications"
  | "locationAccess"
  | "photoAccess";
export default function getSettingsIcon(settingIcon: settingsIconType) {
  switch (settingIcon) {
    case "timezone":
      return TimeZone;
    case "language":
      return Language;
    case "darkMode":
      return DarkMode;
    case "emailNotifications":
      return EmailNotifications;
    case "appNotifications":
      return AppNotifications;
    case "locationAccess":
      return LocationAccess;
    case "photoAccess":
      return PhotoAccess;
    default:
      return "/assets/placeholder.png";
  }
}
