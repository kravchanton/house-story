import React from "react";

import styles from "./PhoneDropdown.module.scss";

export const PhoneDropdown = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.name}>Главный по строительству</p>
      <h4 className={styles.phone}>
        <span>+7 (915) 168-55-50</span>
      </h4>
      <p className={styles.name}>Отдел продаж</p>
      <h4 className={styles.phone}>
        <span>+7 (915) 168-55-50</span>
      </h4>
      <p className={styles.name}>Отдел маркетинга</p>
      <h4 className={styles.phone}>
        <span>+7 (915) 168-55-50</span>
      </h4>
    </div>
  );
};
