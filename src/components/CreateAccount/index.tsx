import React from "react";
import styles from "./CreateAccount.module.scss";
import MainButton from "../mainButton";
import Input from "../Input";
import CheckboxWithLabel from "../CheckboxWithLabel";
export default function CreateAccount(): JSX.Element {
  return (
    <div className={styles.block}>
      <div className={styles.innerBlock}>
        <h1>Создать аккаунт</h1>
        <span>
          Добро пожаловать! Пожалуйста, введите свою информацию ниже и
          приступайте к работе.
        </span>
        <div className={styles.form}>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <CheckboxWithLabel
            id={Date.now().toString()}
            label="Я принимаю Правила и Условия"
          />
        </div>

        <MainButton label="Создать аккаунт" />
        <span>
          У вас уже есть аккаунт?{" "}
          <a href="" className={styles.link}>
            Войдите в систему
          </a>
        </span>
      </div>
    </div>
  );
}
