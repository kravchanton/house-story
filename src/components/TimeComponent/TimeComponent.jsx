import React from "react";

import styles from "./TimeComponent.module.scss";
import { MenuButton } from "../MenuButton";
import classNames from "classnames";
import { TimeItem } from "./TimeItem";

const times = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
];

export const TimeComponent = ({
  time,
  setTime,
  setAppointment,
  appointment,
  months,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h3>
          {`${appointment?.date?.toLocaleString().slice(0, 2)} ${months.filter(
            (day, index) => appointment.date.getMonth() === index
          )} ${appointment.date.getFullYear()} `}
        </h3>
        <h4>Московское время</h4>
      </div>
      <div className={styles.times}>
        {times.map((item, index) => (
          <TimeItem key={index} item={item} time={time} setTime={setTime} />
        ))}
      </div>
      <button onClick={() => setAppointment({ ...appointment, time })}>
        <MenuButton
          className={classNames(styles.btn, time && styles.btnActive)}
          title="Дальше"
        />
      </button>
    </div>
  );
};
