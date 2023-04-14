import React from "react";

import styles from "./FloorContent.module.scss";

import firstFloor from "../../assets/first-floor.png";
import firstimg from "../../assets/firstFloorimg1.png";
import secondimg from "../../assets/firstFloorimg2.png";

import { MenuButton } from "../MenuButton";

export const FloorContent = () => {
  return (
    <div className={styles.section}>
      <img className={styles.floorImage} src={firstFloor} alt="firstFloor" />
      <div className={styles.description}>
        <h4 className={styles.descTitle}>План 1 этажа</h4>
        <p className={styles.text}>Кухня-гостиная: 40,0 м2</p>
        <p className={styles.text}>Спальня: 11,3 м2</p>
        <p className={styles.text}>Гардеробная: 9,0 м2</p>
      </div>
      <div className={styles.imagesBlock}>
        <div className={styles.imagesWrapper}>
          <img className={styles.smallImage} src={firstimg} alt="firstimg" />
          <img src={secondimg} alt="secondimg" />
        </div>
        <MenuButton
          title="Подробные планировки 1 этажа"
          className={styles.btnFloor}
        />
      </div>
    </div>
  );
};
