import React, { useState } from "react";
import styles from "./LoginForm.module.scss";
import Button from "../Button";
import Input from "../Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import createAccountIcon from "../../../assets/createAccountIcon.svg";
import { useAuth } from "../../hooks/useAuth";
import { logInWithEmailAndPassword } from "../../utils/firebase";

interface IFormValues {
  email: string;
  password: string;
}
export default function LoginForm(): JSX.Element {
  let path = "/auth";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    try {
      let user = null;
      setIsSubmitting(true);
      user = await logInWithEmailAndPassword(data.email, data.password);
      if (user !== null) {
        const userData = {
          userId: user.uid || "",
          name: user.displayName || "",
          email: user.email || "",
        };
        login(userData);
        path = "/home";
      }
      setIsSubmitting(false);
      navigate(path);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("Unexpected error", err);
      }
      return null;
    }
  };
  return (
    <form
      className={styles.block}
      onSubmit={handleSubmit(onSubmit, console.error)}
    >
      <img src={createAccountIcon} className={styles.icon} />
      <div className={styles.innerBlock}>
        <h1>Войти в аккаунт</h1>
        <span>
          С возвращением! Пожалуйста, введите свои данные, чтобы зайти в
          аккаунт.
        </span>
        <div className={styles.form}>
          <Input type="email" placeholder="Email" {...register("email")} />
          <Input
            type="password"
            placeholder="Пароль"
            {...register("password")}
          />
          <Link to="/forgot-password" className={styles.link}>
            Забыли пароль?
          </Link>
        </div>
        {/* <Link to={path} className={styles.buttonLink}> */}
        <Button
          type="submit"
          label={isSubmitting ? "Загрузка..." : "Войти в аккаунт"}
          isPrimary={true}
          disabled={isSubmitting}
        />
        {/* </Link> */}

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
