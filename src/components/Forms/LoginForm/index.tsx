import { useState } from "react";
import styles from "./LoginForm.module.scss";
import Button from "components/Button";
import Input from "components/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import createAccountIcon from "assets/createAccountIcon.svg";
import useAuth from "src/hooks/useAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";
import loginFormSchema from "./loginFormSchema";

type IFormValues = InferType<typeof loginFormSchema>;
export default function LoginForm(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(loginFormSchema),
    reValidateMode: "onSubmit",
  });

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    try {
      setIsSubmitting(true);
      await login(data.email, data.password);
      setIsSubmitting(false);
    } catch (err) {
      alert((err as Error).message);
    }
  };
  return (
    <div className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <img src={createAccountIcon} className={styles.icon} />
      <h1 className={styles.title}>Войти в аккаунт</h1>
      <p className={styles.description}>
        С возвращением! Пожалуйста, введите свои данные, чтобы зайти в аккаунт.
      </p>
      <form className={styles.form}>
        <Input
          type="email"
          error={!!errors.email}
          helper={errors.email?.message}
          label="Электронная почта"
          placeholder="Email"
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
        <Link to="/forgot-password" className={styles.link}>
          Забыли пароль?
        </Link>
        <Button
          type="submit"
          label={isSubmitting ? "Загрузка..." : "Войти в аккаунт"}
          isPrimary={true}
          disabled={isSubmitting}
        />
      </form>

      <p className={styles.haveAccount}>
        Нет аккаунта?{" "}
        <Link to="/sign-up" className={styles.link}>
          Создайте аккаунт
        </Link>
      </p>
    </div>
  );
}
