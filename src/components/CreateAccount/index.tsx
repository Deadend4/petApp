import React, { useState } from "react";
import styles from "./CreateAccount.module.scss";
import Button from "../Button";
import Input from "../Input";
import CheckboxWithLabel from "../CheckboxWithLabel";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import createAccountIcon from "../../../assets/createAccountIcon.svg";
import { useAuth } from "../../hooks/useAuth";
import { registerWithEmailAndPassword } from "../../utils/firebase";

interface IFormValues {
  name: string;
  email: string;
  password: string;
}
export default function CreateAccount(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    try {
      let user = null;
      setIsSubmitting(true);
      user = await registerWithEmailAndPassword(
        data.name,
        data.email,
        data.password,
      );
      if (user !== null) {
        const userData = {
          userId: user.uid || "",
          name: user.displayName || "",
          email: user.email || "",
        };
        login(userData);
      }
      setIsSubmitting(false);
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
    <form className={styles.block} onSubmit={handleSubmit(onSubmit)}>
      <img src={createAccountIcon} className={styles.icon} />
      <div className={styles.innerBlock}>
        <h1>Создать аккаунт</h1>
        <span>
          Добро пожаловать! Пожалуйста, введите свою информацию ниже и
          приступайте к работе.
        </span>
        <div className={styles.form}>
          <Input type="text" placeholder="Имя" {...register("name")} />
          <Input type="email" placeholder="Email" {...register("email")} />
          <Input
            type="password"
            placeholder="Пароль"
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

        <Button
          type="submit"
          label={isSubmitting ? "Загрузка..." : "Создать аккаунт"}
          isPrimary={true}
          disabled={isSubmitting}
        />

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
