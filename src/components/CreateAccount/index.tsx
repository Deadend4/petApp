import React from "react";
import styles from "./CreateAccount.module.scss";
import MainButton from "../mainButton";
import Input from "../Input";
import CheckboxWithLabel from "../CheckboxWithLabel";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import createAccountIcon from "../../../assets/createAccountIcon.svg";

interface IFormValues {
  name: string;
  email: string;
  password: string;
}
export default function CreateAccount(): JSX.Element {
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <form className={styles.block} onSubmit={handleSubmit(onSubmit)}>
      <img src={createAccountIcon} className={styles.icon} />
      <div className={styles.innerBlock}>
        <h1>Создать аккаунт</h1>
        <span>
          Добро пожаловать! Пожалуйста, введите свою информацию ниже и
          приступайте к работе.
        </span>
        <div className={styles.form}>
          <Input
            type="email"
            placeholder="Email"
            required
            {...register("email")}
          />
          <Input
            type="password"
            placeholder="Пароль"
            required
            {...register("password")}
          />
          <CheckboxWithLabel
            label={
              <p>
                Я принимаю{" "}
                <a
                  className={styles.link}
                  href="https://www.figma.com/file/G6sv5hc8qywEs79DinOYdc/Pet-App-(Community)?type=design&node-id=1008-78018&mode=design&t=oRr8Sgb8HMt4JQDO-0"
                  target="_blank"
                  rel="noreferrer"
                >
                  Правила
                </a>{" "}
                и{" "}
                <a
                  className={styles.link}
                  href="https://www.figma.com/file/G6sv5hc8qywEs79DinOYdc/Pet-App-(Community)?type=design&node-id=1008-78018&mode=design&t=oRr8Sgb8HMt4JQDO-0"
                  target="_blank"
                  rel="noreferrer"
                >
                  Условия
                </a>
              </p>
            }
          />
        </div>

        <MainButton label="Создать аккаунт" />
        <span>
          У вас уже есть аккаунт?{" "}
          <Link to="/auth/" className={styles.link}>
            Войдите в систему
          </Link>
        </span>
      </div>
    </form>
  );
}
