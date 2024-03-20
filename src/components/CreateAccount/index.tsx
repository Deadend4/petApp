import React from "react";
import styles from "./CreateAccount.module.scss";
import MainButton from "../mainButton";
import Input from "../Input";
import CheckboxWithLabel from "../CheckboxWithLabel";
import { useForm, SubmitHandler } from "react-hook-form";

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
      <div className={styles.innerBlock}>
        <h1>Создать аккаунт</h1>
        <span>
          Добро пожаловать! Пожалуйста, введите свою информацию ниже и
          приступайте к работе.
        </span>
        <div className={styles.form}>
          <Input
            type="input"
            placeholder="Имя"
            value="name"
            register={register}
          />
          <Input
            type="email"
            placeholder="Email"
            value="email"
            register={register}
          />
          <Input
            type="password"
            placeholder="Пароль"
            value="password"
            register={register}
          />
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
    </form>
  );
}
