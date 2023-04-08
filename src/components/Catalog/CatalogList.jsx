import React from "react";
import styles from "./Catalog.module.scss";
import {CatalogItem} from "./CatalogItem";


export const CatalogList = ({data}) => {
    return <div className={styles.catalogList}>
        {data.item.map((t, index) => <CatalogItem key={index} data={t}/>)}
    </div>
}