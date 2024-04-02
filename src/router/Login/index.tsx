import React from "react";
import styles from "./Login.module.scss";
import logo from "../../../assets/LogoPawBuddy.png";
import splash from "../../../assets/splashDog.png";
import LoginForm from "../../components/LoginForm";
import SetRouterTitle from "../../utils/setRouterTitle";

export default function Login() {
  SetRouterTitle("Логин");
  return (
    <div className={styles.block}>
      <LoginForm />
      <img src={logo} alt="paw buddy logo" className={styles.logo} />
      <img src={splash} alt="splash" className={styles.splash} />
    </div>
  );
}
