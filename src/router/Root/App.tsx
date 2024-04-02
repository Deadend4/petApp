import React from "react";
import styles from "./App.module.scss";
import logo from "../../../assets/LogoPawBuddy.png";
import splash from "../../../assets/splashDog.png";
import CreateAccount from "../../components/CreateAccount";
import SetRouterTitle from "../../utils/setRouterTitle";

const App = () => {
  SetRouterTitle("Регистрация");
  return (
    <div className={styles.block}>
      <CreateAccount />
      <img src={logo} alt="paw buddy logo" className={styles.logo} />
      <img src={splash} alt="splash" className={styles.splash} />
    </div>
  );
};
export default App;
