import React, { useState } from "react";
import styled from "styled-components";
import Month from "../common/Month/Month";
import EventModal from "../Modal/EventModal";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { mockData } from "../common/EventList/EventList.data";

const month = new Date().getMonth(); //0 - 11 => 0
const year = new Date().getFullYear(); //2022

const monthName = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const defaultMonthYear = {
  month: month,
  year: year,
};

function Calendar() {
  const [showModal, setShowModal] = useState(false);
  const [monthYear, setMonthYear] = useState(defaultMonthYear);
  const [eventData, setEventData] = useState(mockData);
  const [formData, setFormData] = useState();
  const [modalType, setModalType] = useState("");

  const handleShowModal = (type, id) => {
    setShowModal(!showModal);
    type && setModalType(type);
    let test = eventData.find((item) => item.id === id);
    setFormData(test);
  };

  const handleMoveNextMonth = () => {
    if (monthYear.month === 11) {
      monthYear.month = -1;
      monthYear.year = monthYear.year + 1;
    }
    setMonthYear({
      ...monthYear,
      month: monthYear.month + 1,
      year: monthYear.year,
    });
  };

  const handleMovePrevMonth = () => {
    if (monthYear.month === 0) {
      monthYear.month = 12;
      monthYear.year = monthYear.year - 1;
    }
    setMonthYear({
      ...monthYear,
      month: monthYear.month - 1,
      year: monthYear.year,
    });
  };

  const handleCreateEvent = (event) => {
    setEventData([...eventData, event]);
  };

  const handleEditEvent = (event) => {
    const indx = eventData.findIndex((item) => item.id === event.id);
    eventData.splice(indx, 1, event);
    setEventData([...eventData]);
  };

  const handleDeleteEvent = (id) => {
    const indx = eventData.findIndex((item) => item.id === id);
    eventData.splice(indx, 1);
    setEventData([...eventData]);
  };

  return (
    <>
      <Header>
        <div className="date">
          <div className="arrowBtn" onClick={handleMovePrevMonth}>
            <ArrowBackIosIcon />
          </div>
          <div className="date__monthYear">
            {monthName[monthYear.month]} {monthYear.year}
          </div>
          <div className="arrowBtn" onClick={handleMoveNextMonth}>
            <ArrowForwardIosIcon />
          </div>
        </div>
        <ButtonGroup>
          <Button>SEARCH</Button>
          <Button onClick={() => handleShowModal("add")}>ADD</Button>
        </ButtonGroup>
      </Header>
      <Container>
        <Month
          monthYear={monthYear}
          eventData={eventData}
          onDeleteEvent={handleDeleteEvent}
          onControlModal={handleShowModal}
        />
      </Container>
      <EventModal
        formData={formData}
        modalType={modalType}
        isVisible={showModal}
        onControlModal={handleShowModal}
        onAddEvent={handleCreateEvent}
        onEditEvent={handleEditEvent}
      />
    </>
  );
}

export default Calendar;

const Container = styled.div`
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
    display: flex;
    align-items: center;

    .arrowBtn {
      cursor: pointer;
    }

    &__monthYear {
      width: 120px;
      text-align: center;
    }
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
