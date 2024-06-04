import SetRouterTitle from "utils/setRouterTitle";
import styles from "./CalendarPage.module.scss";
import Calendar from "react-calendar";

export default function CalendarPage(): JSX.Element {
  SetRouterTitle("Календарь");
  return (
    <div className={styles.calendarPage}>
      <div className={styles.calendarSide}>
        <div className={styles.description}>
          <h1>Календарь</h1>
          <p>Отслеживайте Вашу историю активности</p>
        </div>
        <Calendar className={styles.calendar} />
      </div>
      <div className={styles.eventSide}>
        <h2>Ближайшие события</h2>
      </div>
    </div>
  );
}
