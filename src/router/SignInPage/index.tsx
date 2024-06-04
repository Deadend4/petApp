import styles from "./SignInPage.module.scss";
// import logo from "assets/LogoPawBuddy.png";
// import splash from "assets/splashDog.png";
import LoginForm from "src/components/Forms/LoginForm";
import SetRouterTitle from "utils/setRouterTitle";

export default function SignInPage() {
  SetRouterTitle("Вход в аккаунт");
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
}
