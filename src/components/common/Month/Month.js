import React from "react";
import styled from "styled-components";
import Day from "../Day/Day";

function Month() {
  const dt = new Date();
  const toDay = dt.getDate();
  const month = dt.getMonth(); //0 - 11 => 0
  const year = dt.getFullYear(); //2022
  const monthDays = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // const dateInMonth = [];

  // for (let i = 0; i < monthDays; i++) {
  //   dateInMonth.push(new Date(year, month, i + 1));
  // }

  // console.log(dateInMonth);

  return (
    <Container>
      {daysOfWeek.map((day, index) => (
        <Day key={index} value={day} />
      ))}
      {[...Array(firstDay).concat([...Array(monthDays).keys()])].map(
        (item, index) => {
          return (
            <Day
              key={index}
              value={item + 1 || ""}
              isToday={item + 1 === toDay}
              hasEvent={item + 1 ? true : false}
            />
          );
        }
      )}
    </Container>
  );
}

export default Month;

const Container = styled.div`
  min-width: 300px;
  max-width: 400px;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
`;
