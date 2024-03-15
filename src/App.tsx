import React from "react";
import styles from "./App.module.css";
import logo from "../image/LogoPawBuddy.png";
import splash from "../image/splashDog.png";
import CreateAccount from "./components/CreateAccount";

const App = () => {
  return (
    <div className={styles.block}>
      <CreateAccount />
      <img src={logo} alt="paw buddy logo" className={styles.logo} />
      <img src={splash} alt="splash" className={styles.splash} />
    </div>
  );
};
export default App;
