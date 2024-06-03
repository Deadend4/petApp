import * as yup from "yup";

const formSchema = yup.object({
  email: yup.string().email("Некорректный Email").required("Email обязателен"),
  password: yup
    .string()
    .required("Пароль обязателен")
    .min(8, "Пароль должен содержать не менее 8 символов"),
  passwordSubmit: yup
    .string()
    .required("Подтвердите пароль")
    .oneOf([yup.ref("password")], "Пароли не совпадают"),
  acceptTNC: yup
    .boolean()
    .isTrue(
      "Вы должны согласиться с пользовательским соглашением для продолжения",
    ),
});

export default formSchema;
