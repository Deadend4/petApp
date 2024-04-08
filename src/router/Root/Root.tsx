import React from "react";
import styles from "./Root.module.scss";
import logo from "../../../assets/LogoPawBuddy.png";
import splash from "../../../assets/splashDog.png";
import CreateAccount from "../../components/CreateAccount";
import SetRouterTitle from "../../utils/setRouterTitle";

export default function Root() {
  SetRouterTitle("Регистрация");
  return (
    <div className={styles.block}>
      <div className={styles.innerBlock}>
        <img src={logo} alt="paw buddy logo" className={styles.logo} />
        <img src={splash} alt="splash" className={styles.splash} />
      </div>
      <CreateAccount />
    </div>
  );
}
