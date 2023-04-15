import React from "react";

import styles from "./BuildingHouse.module.scss";

import bgBuilding1 from "../../assets/buildingBackground1.png";
import bgBuilding2 from "../../assets/buildingBackground2.png";
import tree from "../../assets/tree.png";
import buildingHouse from "../../assets/building-house.png";

export const BuildingHouse = () => {
  return (
    <>
      <img className={styles.bgBuilding} src={bgBuilding1} alt="" />
      <img className={styles.bgBuilding1} src={bgBuilding2} alt="" />
      <img className={styles.tree} src={tree} alt="tree" />
      <div className={styles.houseImages}>
        <img
          className={styles.buildingImage}
          src={buildingHouse}
          alt="buildingHouse"
        />
        <img
          className={styles.buildingImage}
          src={buildingHouse}
          alt="buildingHouse"
        />
        <img
          className={styles.buildingImage}
          src={buildingHouse}
          alt="buildingHouse"
        />
        <img
          className={styles.buildingImage}
          src={buildingHouse}
          alt="buildingHouse"
        />
        <img
          className={styles.buildingImage}
          src={buildingHouse}
          alt="buildingHouse"
        />
        <img
          className={styles.buildingImage}
          src={buildingHouse}
          alt="buildingHouse"
        />
      </div>
    </>
  );
};
