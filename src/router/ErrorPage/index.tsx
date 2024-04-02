import React from "react";
import styles from "./ErrorPage.module.scss";
import SetRouterTitle from "../../utils/setRouterTitle";

export default function ErrorPage(): JSX.Element {
  SetRouterTitle("404 Страница не найдена");
  return (
    <div className={styles.block}>
      <h1>404</h1>
      <p>Страница не найдена</p>
    </div>
  );
}
