import React from "react";
import "./EventList.scss";
import { mockData } from "./EventList.data";

function EventList({ isShow, onClose, selectedDate }) {
  const date =
    selectedDate &&
    `${selectedDate.getDate()}/${
      selectedDate.getMonth() + 1
    }/${selectedDate.getFullYear()}`;

  const eventDate = mockData.filter((item) => date && item.date === date);

  return (
    <>
      {isShow && (
        <div className="EventList">
          <div className="EventList__header">
            <div className="EventList__header__date">{date}</div>
            <div className="EventList__header__close" onClick={onClose}>
              X
            </div>
          </div>
          <div className="EventList__list">
            {eventDate.length > 0 ? (
              eventDate.map((item, index) => {
                const { timeStart, timeEnd, event, place, remainingTime } =
                  item;
                return (
                  <div className="EventList__list__item" key={index}>
                    <div className="appointmentTime">
                      <div className="appointmentTime__start">{timeStart}</div>
                      <div className="appointmentTime__end">{timeEnd}</div>
                    </div>

                    <div className="event">
                      <div className="event__content">{event}</div>
                      <div className="event__place-time">
                        <div className="place">{place}</div>
                        <div className="time">{remainingTime}</div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>No event on this day.</div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default EventList;
