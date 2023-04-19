import React from "react";

import styles from "./Garanties.module.scss";
import { garanties, garantiesVariant } from "../../mockData/garanties";
import classNames from "classnames";

export const Garanties = ({
  title,
  garantiesVar,
  classNameCard,
  classNameWrapper,
}) => {
  return (
    <article className={classNames(styles.wrapper, classNameWrapper)}>
      {title && (
        <h3 className="titleBlock">
          Мы берем на себя <span>полную материальную ответственность</span> и
          прописываем гарантии
        </h3>
      )}

      <div className={classNames(styles.wrapperCard, classNameCard)}>
        {!garantiesVar &&
          garanties.map((item) => (
            <div key={item.id} className={styles.card}>
              <h3 className={styles.title}>{item.title}</h3>
              <div className={styles.descWeapper}>
                <div>{item.Icon}</div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        {garantiesVar &&
          garantiesVariant.map((item) => (
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
