import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ notifications }) {
  return (
    <ol className={styles.wrapper}>
      {notifications.map((noti) => (
        <li key={noti.id} className={styles.toastWrapper}>
          <Toast variant={noti.variant}>{noti.message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
