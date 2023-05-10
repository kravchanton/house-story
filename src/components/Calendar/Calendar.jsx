import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

import "./Calendar.scss";

export const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  return <Calendar locale="ru" onChange={setDate} value={date} />;
};
