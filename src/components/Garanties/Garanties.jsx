import React from "react";

import styles from "./Garanties.module.scss";
import { garanties } from "../../mockData/garanties";

export const Garanties = () => {
  return (
    <article className={styles.wrapper}>
      <h3 className="titleBlock">
        Мы берем на себя <span>полную материальную ответственность</span> и
        прописываем гарантии
      </h3>
      <div className={styles.wrapperCard}>
        {garanties.map((item) => (
          <div key={item.id} className={styles.card}>
            <h3 className={styles.title}>{item.title}</h3>
            <div className={styles.descWeapper}>
              <div>{item.Icon}</div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};
