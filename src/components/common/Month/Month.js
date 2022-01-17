import React, { useState } from "react";
import styled from "styled-components";
import Day from "../Day/Day";
import EventList from "../EventList/EventList";

function Month() {
  const [showEventList, setShowEventList] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const dt = new Date();
  const toDay = dt.getDate();
  const month = dt.getMonth(); //0 - 11 => 0
  const year = dt.getFullYear(); //2022
  const monthDays = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handleDateClick = (item) => {
    if (item) {
      setSelectedDate(item);
      setShowEventList(true);
    }
  };

  const handleCloseList = () => {
    setShowEventList(false);
  };

  return (
    <>
      <Container>
        {daysOfWeek.map((day, index) => (
          <Day key={index} value={day} isWeekDay />
        ))}
        {[...Array(firstDay).concat([...Array(monthDays).keys()])].map(
          (item, index) => {
            const dateInfo = new Date(year, month, item + 1);
            return (
              <Day
                key={index}
                value={item + 1 || ""}
                isToday={item + 1 === toDay}
                hasEvent={item + 1 ? true : false}
                onDateClick={() => handleDateClick(dateInfo)}
              />
            );
          }
        )}
      </Container>
      <EventList
        isShow={showEventList}
        onClose={handleCloseList}
        selectedDate={selectedDate}
      />
    </>
  );
}

export default Month;

const Container = styled.div`
  width: 50%;
  min-width: 300px;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
`;
