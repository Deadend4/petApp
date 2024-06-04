import * as yup from "yup";

const loginFormSchema = yup.object({
  email: yup.string().email("Некорректный Email").required("Email обязателен"),
  password: yup.string().required("Пароль обязателен"),
});

export default loginFormSchema;
