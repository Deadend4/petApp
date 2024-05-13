import React from "react";
import styles from "./LoginForm.module.scss";
import Button from "../Button";
import Input from "../Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import createAccountIcon from "../../../assets/createAccountIcon.svg";

interface IFormValues {
  name: string;
  email: string;
  password: string;
}
export default function LoginForm(): JSX.Element {
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <form className={styles.block} onSubmit={handleSubmit(onSubmit)}>
      <img src={createAccountIcon} className={styles.icon} />
      <div className={styles.innerBlock}>
        <h1>Войти в аккаунт</h1>
        <span>
          С возвращением! Пожалуйста, введите свои данные, чтобы зайти в
          аккаунт.
        </span>
        <div className={styles.form}>
          <Input type="Email" placeholder="Email" register={register} />
          <Input type="password" placeholder="Пароль" register={register} />
          <Link to="/forgot-password" className={styles.link}>
            Забыли пароль?
          </Link>
        </div>
        <Link to="/home" className={styles.buttonLink}>
          <Button label="Войти" isPrimary={true} />
        </Link>

        <span>
          Нет аккаунта?{" "}
          <Link to="/" className={styles.link}>
            Создайте аккаунт
          </Link>
        </span>
      </div>
    </form>
  );
}
