import React, { useState } from "react";

import styles from "./Timer.module.scss";
export const Timer = ({ handleClose }) => {
  const [counter, setCounter] = useState(30);

  React.useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    } else {
      handleClose();
    }
  }, [counter]);

  return (
    <div className={styles.timer}>
      <p>00:{counter < 10 ? `0${counter}` : counter}</p>
    </div>
  );
};
