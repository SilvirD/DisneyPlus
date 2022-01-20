import React from "react";
import "./Day.scss";

function Day({ isToday, hasEvent, value, onDateClick, isWeekDay }) {
  const checkWeekendDay = (date) => {
    if (!isWeekDay && date) {
      if (date.getDay() === 0 || date.getDay() === 6) {
        return true;
      }
      return false;
    }
  };

  const today = isToday ? "today" : "";
  const weekDay = isWeekDay ? "weekDay" : "";
  const hasDate = !value ? "blankDate" : "";
  const date = !isWeekDay && value ? new Date(value).getDate() : value;
  const isWeekend = checkWeekendDay(value) ? "weekend" : "";
  const dayHasEvent = hasEvent ? "day-has-event" : "";

  return (
    <div
      className={`Day-Container ${weekDay} ${hasDate}`}
      onClick={onDateClick}
    >
      <div className={`Day-Container__date ${today}`}>
        <p className={`Day-Container__date__text ${today} ${isWeekend}`}>
          {date}
        </p>
      </div>
      <div className={`Day-Container__eventDot ${dayHasEvent}`} />
    </div>
  );
}

export default Day;
