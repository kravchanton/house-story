import React from "react";

import styles from "./MenuDropdown.module.scss";

import { Basic } from "../Form";
import { Close } from "../../icons";
import { NavMenu } from "../NavMenu";

export const MenuDropdown = ({ isOpenMenu, closeMenu }) => {
  return (
    <div className={styles.wrapper}>
      <div onClick={closeMenu}>
        {isOpenMenu && <Close className={styles.closeIcon} />}
      </div>
      <div className={styles.inner}>
        <div className={styles.leftWrapper}>
          <NavMenu className={styles.nav} black={true} />
          <Basic
            lockText={true}
            titleForm="Оставьте заявку и мы с вами свяжемся в течении рабочего дня"
          />
        </div>
        <div className={styles.rightWrapper}></div>
      </div>
    </div>
  );
};
