import React, { useEffect, useState } from "react";

import bgBuilding1 from "../../assets/buildingbackground1.png";
import bgBuilding2 from "../../assets/buildingbackground2.png";
import tree from "../../assets/tree.png";

import styles from "./BuildingHouse.module.scss";

export const BuildingHouse = ({ data }) => {
  const [count, setCount] = useState(6);

  useEffect(() => {
    if (document.documentElement.clientWidth < 480) {
      setCount(2);
    }
  }, []);
  return (
    <>
      <img className={styles.bgBuilding} src={bgBuilding1} alt="" />
      <img className={styles.bgBuilding1} src={bgBuilding2} alt="" />
      <img className={styles.tree} src={tree} alt="tree" />
      <div className={styles.houseImages}>
        {data?.slice(0, count).map((t, index) => (
          <img
            key={index}
            className={styles.buildingImage}
            src={`${process.env.REACT_APP_UPLOAD_URL}${t?.attributes?.url}`}
            alt="buildingHouse"
          />
        ))}
      </div>
    </>
  );
};
