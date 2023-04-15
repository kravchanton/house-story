import React from "react";

import styles from "./BuildingHouse.module.scss";

import bgBuilding1 from "../../assets/buildingBackground1.png";
import bgBuilding2 from "../../assets/buildingBackground2.png";
import tree from "../../assets/tree.png";

export const BuildingHouse = ({data}) => {
        return (

    <>
      <img className={styles.bgBuilding} src={bgBuilding1} alt="" />
      <img className={styles.bgBuilding1} src={bgBuilding2} alt="" />
      <img className={styles.tree} src={tree} alt="tree" />
      <div className={styles.houseImages}>
          {data?.slice(0,5).map((t,index) => <img key={index}
          className={styles.buildingImage}
          src={`${process.env.REACT_APP_UPLOAD_URL}${t?.attributes?.url}`}
          alt="buildingHouse"
        />)}
      </div>
    </>
  );
};
