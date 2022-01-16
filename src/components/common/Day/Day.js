import React from "react";
import "./Day.scss";

function Day({ isToday, hasEvent, value, onDateClick, isWeekDay }) {
  const today = isToday ? "today" : "";
  const weekDay = isWeekDay ? "weekDay" : "";
  const hasDate = !value ? "blankDate" : "";

  return (
    <div
      className={`Day-Container ${weekDay} ${hasDate}`}
      onClick={onDateClick}
    >
      <div className={`Day-Container__date ${today}`}>
        <p className={`Day-Container__date__text ${today} `}>{value}</p>
      </div>
      {hasEvent && <div className="Day-Container__eventDot" />}
    </div>
  );
}

export default Day;

// const Container = styled.div`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 2px;
//   border-top: 1px solid #d1d2d4;
//   border-bottom: 1px solid #d1d2d4;
//   background-color: whitesmoke;
//   margin-bottom: 10px;
// `;

// const Date = styled.div`
//   background-color: #f23f3f;
//   border-radius: 50%;
//   padding: 3px;
//   width: 30px;
//   height: 30px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   align-content: center;

//   p {
//     font-size: 20px;
//     color: white; //with background today
//   }
// `;

// const EventDot = styled.div`
//   width: 5px;
//   height: 5px;
//   border-radius: 50%;
//   background-color: gray;
// `;
