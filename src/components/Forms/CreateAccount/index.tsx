import { yupResolver } from "@hookform/resolvers/yup";
import createAccountIcon from "assets/createAccountIcon.svg";
import Button from "components/Button";
import CheckboxWithLabel from "components/CheckboxWithLabel";
import Input from "components/Input";
import useAuth from "src/hooks/useAuth";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { InferType } from "yup";
import styles from "./CreateAccount.module.scss";
import formSchema from "./formSchema";

type IFormValues = InferType<typeof formSchema>;
export default function CreateAccount(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register: signUp } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(formSchema),
    reValidateMode: "onSubmit",
  });
  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    try {
      setIsSubmitting(true);
      await signUp(data.email, data.password);
      setIsSubmitting(false);
    } catch (err) {
      alert((err as Error).message);
    }
  };
  return (
    <div className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <img src={createAccountIcon} className={styles.icon} />
      <h1 className={styles.title}>Создать аккаунт</h1>
      <p className={styles.description}>
        Добро пожаловать! Пожалуйста, введите свою информацию ниже и приступайте
        к работе.
      </p>
      <form className={styles.form}>
        <Input
          type="email"
          error={!!errors.email}
          helper={errors.email?.message}
          label="Электронная почта"
          placeholder="email@example.com"
          {...register("email")}
        />
        <Input
          type="password"
          error={!!errors.password}
          helper={errors.password?.message}
          label="Пароль"
          placeholder="Пароль"
          {...register("password")}
        />
        <Input
          type="password"
          error={!!errors.passwordSubmit}
          helper={errors.passwordSubmit?.message}
          label="Повторите пароль"
          placeholder="Пароль"
          {...register("passwordSubmit")}
        />
        <CheckboxWithLabel
          label={
            <p>
              Я принимаю{" "}
              <a href="/terms" target="_blank" rel="noreferrer">
                Правила
              </a>{" "}
              и{" "}
              <a href="/conditions" target="_blank" rel="noreferrer">
                Условия
              </a>
            </p>
          }
          error={!!errors.acceptTNC}
          helper={errors.acceptTNC?.message}
          {...register("acceptTNC")}
        />
        <Button
          type="submit"
          label={isSubmitting ? "Загрузка..." : "Создать аккаунт"}
          isPrimary={true}
          disabled={isSubmitting}
        />
      </form>
      <p className={styles.haveAccount}>
        У вас уже есть аккаунт? <Link to="/sign-in">Войдите в систему</Link>
      </p>
    </div>
  );
}
