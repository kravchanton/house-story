import React from "react";
import classNames from "classnames";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import "./Calendar.scss";

import { MenuButton } from "../MenuButton";

import styles from "../../pages/Appointment/Appointment.module.scss";

export const CalendarComponent = ({
  date,
  setDate,
  setAppointment,
  appointment,
}) => {
  return (
    <div className="wrapper">
      <Calendar
        minDate={new Date()}
        locale="ru"
        onChange={setDate}
        value={date}
      />
      <button onClick={() => setAppointment({ ...appointment, date })}>
        <MenuButton
          className={classNames(styles.btn, date && styles.btnActive)}
          title="Дальше"
        />
      </button>
    </div>
  );
};
