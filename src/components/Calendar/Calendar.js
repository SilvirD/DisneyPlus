import React from "react";
import styled from "styled-components";
import Month from "../common/Month/Month";

function Calendar() {
  return (
    <>
      <Header>
        <div className="date">January 2022</div>

        <ButtonGroup>
          <Button>SEARCH</Button>
          <Button>ADD</Button>
        </ButtonGroup>
      </Header>
      <Container>
        <Month />
      </Container>
    </>
  );
}

export default Calendar;

const Container = styled.div`
  margin-top: 30px;
  padding: 0 50px;
  display: flex;
  gap: 15px;
  min-width: 550px;
`;

const Header = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 50px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;

  .date {
    font-size: 25px;
    color: white;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
`;

const Button = styled.div`
  text-align: center;
  padding: 5px;
  color: white;
  border: 3px solid whitesmoke;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    border: 3px solid rgb(24, 116, 24);
    color: rgb(24, 116, 24);
  }
`;
