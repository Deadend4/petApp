import { yupResolver } from "@hookform/resolvers/yup";
import createAccountIcon from "assets/createAccountIcon.svg";
import Button from "components/Button";
import CheckboxWithLabel from "components/CheckboxWithLabel";
import Input from "components/Input";
import { useAuth } from "hooks/useAuth";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { registerWithEmailAndPassword } from "utils/firebase";
import { InferType } from "yup";
import styles from "./CreateAccount.module.scss";
import formSchema from "./formSchema";

type IFormValues = InferType<typeof formSchema>;
export default function CreateAccount(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
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
      let user = null;
      setIsSubmitting(true);
      user = await registerWithEmailAndPassword(data.email, data.password);
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
              <a
                href="https://www.figma.com/file/G6sv5hc8qywEs79DinOYdc/Pet-App-(Community)?type=design&node-id=1008-78018&mode=design&t=oRr8Sgb8HMt4JQDO-0"
                target="_blank"
                rel="noreferrer"
              >
                Правила
              </a>{" "}
              и{" "}
              <a
                href="https://www.figma.com/file/G6sv5hc8qywEs79DinOYdc/Pet-App-(Community)?type=design&node-id=1008-78018&mode=design&t=oRr8Sgb8HMt4JQDO-0"
                target="_blank"
                rel="noreferrer"
              >
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
        У вас уже есть аккаунт? <Link to="/auth/">Войдите в систему</Link>
      </p>
    </div>
  );
}
