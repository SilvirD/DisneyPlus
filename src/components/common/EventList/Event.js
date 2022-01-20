import React from "react";
import moment from "moment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function Event({
  id,
  startTime,
  endTime,
  event,
  place,
  remainingTime,
  onDeleteEvent,
  onControlModal,
}) {
  return (
    <div className="EventList__list__item">
      <div className="appointmentTime">
        <div className="appointmentTime__start">
          {startTime ? moment(startTime, "hh:mm").format("LT") : ""}
        </div>
        <div className="appointmentTime__end">
          {endTime ? moment(endTime, "hh:mm").format("LT") : ""}
        </div>
      </div>

      <div className="event">
        <div className="event__content">
          <div className="event-text">{event}</div>
          <div className="buttonGroup">
            <div className="editBtn" onClick={() => onControlModal("edit", id)}>
              <EditIcon />
            </div>
            <div className="deleteBtn" onClick={() => onDeleteEvent(id)}>
              <DeleteIcon />
            </div>
          </div>
        </div>
        <div className="event__place-time">
          <div className="place">{place}</div>
          <div className="time">{remainingTime}</div>
        </div>
      </div>
    </div>
  );
}

export default Event;
