import React from "react";
import styles from "./Catalog.module.scss";

export const CatalogItem = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.catalogItem}>
      <h4>{data.title}</h4>
    </div>
  );
};
