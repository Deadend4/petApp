import React from "react";
import styles from "./Login.module.scss";
import logo from "../../../assets/LogoPawBuddy.png";
import splash from "../../../assets/splashDog.png";
import LoginForm from "../../components/LoginForm";
import SetRouterTitle from "../../utils/setRouterTitle";
import CreateAccount from "../../components/CreateAccount";

export default function Root() {
  SetRouterTitle("Вход в аккаунт");
  return (
    <div className={styles.block}>
      <div className={styles.innerBlock}>
        <img src={logo} alt="paw buddy logo" className={styles.logo} />
        <img src={splash} alt="splash" className={styles.splash} />
      </div>
      <LoginForm />
    </div>
  );
}
