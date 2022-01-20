import React, { useEffect, useState } from "react";
import "./EventList.scss";
import { mockData } from "./EventList.data";
import moment from "moment";
import Event from "./Event";

function EventList({
  isShow,
  onClose,
  selectedDate,
  eventData,
  onDeleteEvent,
  onControlModal,
}) {
  const [eventDate, setEventDate] = useState(eventData);
  const fakeData = [...eventDate];

  const date =
    selectedDate &&
    `${selectedDate.getDate()}/${
      selectedDate.getMonth() + 1
    }/${selectedDate.getFullYear()}`;

  useEffect(() => {
    setEventDate(eventData);
  }, [eventData]);

  const filterByDate = eventDate.filter(
    (item) =>
      date &&
      moment(item.date, "YYYY-MM-DD").format("DD/MM/YYYY") ===
        moment(date, "DD/M/YYYY").format("DD/MM/YYYY")
  );

  const handleDeleteEvent = (id) => {
    onDeleteEvent(id);
  };

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
            {filterByDate.length > 0 ? (
              filterByDate.map((item) => {
                const { id, startTime, endTime, event, place, remainingTime } =
                  item;

                return (
                  <Event
                    key={id}
                    id={id}
                    startTime={startTime}
                    endTime={endTime}
                    event={event}
                    place={place}
                    remainingTime={remainingTime}
                    onDeleteEvent={handleDeleteEvent}
                    onControlModal={onControlModal}
                  />
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
