import React from "react";
import styled from "styled-components";
import Month from "../common/Month/Month";

function Calendar() {
  return (
    <Container>
      <Month />
    </Container>
  );
}

export default Calendar;

const Container = styled.div`
  padding: 0 50px;
  display: flex;
  gap: 15px;
  min-width: 550px;
`;
