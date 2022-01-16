import React from "react";
import "./EventList.scss";

function EventList({ isShow, onClose, selectedDate }) {
  const date =
    selectedDate &&
    `${selectedDate.getDate()}/${
      selectedDate.getMonth() + 1
    }/${selectedDate.getFullYear()}`;

  return (
    <>
      {true && (
        <div className="EventList">
          <div className="EventList__header">
            <div className="EventList__header__date">{date}</div>
            <div className="EventList__header__close" onClick={onClose}>
              X
            </div>
          </div>
          <div className="EventList__list">
            <div className="EventList__list__item">
              <div className="appointmentTime">
                <div className="appointmentTime__start">4:00 PM</div>
                <div className="appointmentTime__end">4:20 PM</div>
              </div>

              <div className="event">
                <div className="event__content">Ghé lấy máy ảnh</div>
                <div className="event__place-time">
                  <div className="place">Nhà Xuân Minh</div>
                  <div className="time">in 4 hr</div>
                </div>
              </div>
            </div>
            {/* <div className="row">Su kien 1</div>
            <div className="row">Su kien 1</div>
            <div className="row">Su kien 1</div>
            <div className="row">Su kien 1</div>
            <div className="row">Su kien 1</div> */}
          </div>
        </div>
      )}
    </>
  );
}

export default EventList;
