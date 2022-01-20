import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
import Day from "../Day/Day";
import EventList from "../EventList/EventList";

function Month({ monthYear, eventData, onDeleteEvent, onControlModal }) {
  const [showEventList, setShowEventList] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const dt = new Date();
  const toDay = moment().format("DD/MM/YYYY");
  const { month, year } = monthYear;
  const monthDays = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const endDay = new Date(year, month + 1, 0).getDay();

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
        {[
          ...Array(firstDay)
            .concat([...Array(monthDays).keys()])
            .concat([...Array(6 - endDay)]),
        ].map((item, index) => {
          const dateInfo = item + 1 ? new Date(year, month, item + 1) : "";
          const test = moment(dateInfo).format("DD/MM/YYYY");
          const indx = eventData.findIndex(
            (item) =>
              moment(item.date, "YYYY-MM-DD").format("DD/MM/YYYY") === test
          );
          return (
            <Day
              key={index}
              value={dateInfo}
              isToday={moment(dateInfo).format("DD/MM/YYYY") === toDay}
              hasEvent={indx > -1}
              onDateClick={() => handleDateClick(dateInfo)}
            />
          );
        })}
      </Container>
      <EventList
        onControlModal={onControlModal}
        onDeleteEvent={onDeleteEvent}
        eventData={eventData}
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
