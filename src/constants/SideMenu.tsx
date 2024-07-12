import SideMenuItem from "src/components/SideMenuItem";
import SideMenuIcon from "src/svg/SideMenu/SideMenuIcon";

const dashboard = <SideMenuItem icon={<SideMenuIcon type="dashboard" />} title="Доска"  key="dashboard"/>;
const contacts = <SideMenuItem icon={<SideMenuIcon type="contacts" />} title="Контакты"  key="contacts"/>;
const calendar = <SideMenuItem icon={<SideMenuIcon type="calendar" />} title="Календарь" link="/calendar" key="calendar"/>;
const account = <SideMenuItem icon={<SideMenuIcon type="account" />} title="Аккаунт" link="/account" key="account" />;
const settings = <SideMenuItem icon={<SideMenuIcon type="settings" />} title="Настройки" link="/settings" key="settings" />;

export const sideAppButtons = [dashboard, contacts, calendar];
export const sideUserButtons = [account, settings];