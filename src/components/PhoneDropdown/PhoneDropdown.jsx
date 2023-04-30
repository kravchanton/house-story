import React, { Fragment } from "react";

import styles from "./PhoneDropdown.module.scss";

export const PhoneDropdown = ({ contactItems }) => {
  return (
    <div className={styles.wrapper}>
      {contactItems.map((item) => (
        <Fragment key={item.id}>
          <p className={styles.name}>{item.description}</p>
          <h4 className={styles.phone}>
            <a className={styles.phoneNumber} href={`tel:${item.phone}`}>
              {item.phone}
            </a>
          </h4>
        </Fragment>
      ))}

      {/*<p className={styles.name}>Отдел продаж</p>*/}
      {/*<h4 className={styles.phone}>*/}
      {/*  <span>+7 (915) 168-55-50</span>*/}
      {/*</h4>*/}
      {/*<p className={styles.name}>Отдел маркетинга</p>*/}
      {/*<h4 className={styles.phone}>*/}
      {/*  <span>+7 (915) 168-55-50</span>*/}
      {/*</h4>*/}
    </div>
  );
};
