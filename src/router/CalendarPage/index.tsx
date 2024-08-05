import SetRouterTitle from "utils/setRouterTitle";
import styles from "./CalendarPage.module.scss";
import { useMenuContext } from "src/context/MenuContext";
import MobileHeader from "src/components/MobileHeader";
import { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";

export default function CalendarPage(): JSX.Element {
  SetRouterTitle("Календарь");
  const { setIsMenuShown } = useMenuContext();
  const [date, setDate] = useState(new Date());
  return (
    <>
      <MobileHeader
        to=""
        onClick={() => {
          setIsMenuShown(true);
        }}
        title="Календарь"
      />
      <div className={styles.calendarPage}>
        <div className={styles.calendarSide}>
          <div className={styles.description}>
            <h1>Календарь</h1>
            <p>Отслеживайте Вашу историю активности</p>
          </div>
          <div className={styles.calendar}>
            <Calendar onChange={() => setDate} value={date} />
          </div>
        </div>
        <div className={styles.eventSide}>
          <h2>Ближайшие события</h2>
        </div>
      </div>
    </>
  );
}
