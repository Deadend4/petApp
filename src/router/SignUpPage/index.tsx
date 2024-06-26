import styles from "./SignUpPage.module.scss";
import logo from "assets/LogoPawBuddy.png";
import splash from "assets/splashDog.png";
import CreateAccount from "components/Forms/CreateAccount";
import SetRouterTitle from "utils/setRouterTitle";

export default function SignUpPage() {
  SetRouterTitle("Авторизация");
  return (
    <div className={styles.container}>
      <div className={styles.innerBlock}>
        <img src={logo} alt="paw buddy logo" className={styles.logo} />
        <img src={splash} alt="splash" className={styles.splash} />
      </div>
      <CreateAccount />
    </div>
  );
}
