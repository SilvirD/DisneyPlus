import React from "react";
import styled from "styled-components";
import Month from "../common/Month/Month";
import EventList from "../common/EventList/EventList";

function Calendar() {
  return (
    <Container>
      <Month />
      <EventList />
    </Container>
  );
}

export default Calendar;

const Container = styled.div`
  padding: 0 50px;
  display: flex;
  gap: 15px;
`;
