import React, {useState} from "react";
import styles from "./ArticlePage.module.scss";
import {MenuButton} from "../../components";


export const Images = ({data}) => {
    let [count, setCount] = useState(3)
    console.log(count)
    return <div> <div className={styles.images}>
        {data.slice(0, count).map((t, index) => <img key={index}
                                               className={styles.image}
                                               src={`${process.env.REACT_APP_UPLOAD_URL}${t?.attributes?.url}`}
                                               alt=""/>)
}
    </div>
<div onClick={() => setCount(count + 3)}><MenuButton className={styles.btn}  title="Больше фото"/></div></div>}