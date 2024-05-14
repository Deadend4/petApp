import React from "react";
import styles from "./YourPetsPage.module.scss";
import Button from "../../components/Button";
import emptyPetProfile from "../../../assets/EmptyPetProfile.png";
import SetRouterTitle from "../../utils/setRouterTitle";

export default function YourPetsPage(): JSX.Element {
  SetRouterTitle("Ваши питомцы");
  return (
    <div className={styles.yourPetsPage}>
      <div className={styles.titleAndBody}>
        <h1>О нет!</h1>
        <p>
          Похоже, на данный момент у Вас нет настроенных профилей, Вы можете
          добавить своего питомца
        </p>
        <img
          src={emptyPetProfile}
          width={368}
          height={368}
          alt="Empty pet profile image"
        />
      </div>
      <Button isPrimary={true} label={"Добавить питомца"} />
    </div>
  );
}
