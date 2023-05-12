import React from "react";
import classNames from "classnames";

import styles from "./TimeComponent.module.scss";

export const TimeItem = ({ setTime, item, time }) => {
  return (
    <button
      onClick={() => setTime(item)}
      className={classNames(styles.item, time && styles.itemActive)}
    >
      <p>{item}</p>
    </button>
  );
};
