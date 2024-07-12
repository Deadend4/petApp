import SetRouterTitle from "utils/setRouterTitle";
import styles from "./CalendarPage.module.scss";
import Calendar from "react-calendar";
import { useMenuContext } from "src/context/MenuContext";
import BackButton from "src/components/BackButton";

export default function CalendarPage(): JSX.Element {
  SetRouterTitle("Календарь");
  const {setIsMenuShown} = useMenuContext();
  return (<>
  <BackButton to="" onClick={() => {setIsMenuShown(true)}} title="Календарь"/>
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
  </>
    
  );
}
