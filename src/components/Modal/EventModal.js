import React, { useEffect, useState } from "react";
import "./EventModal.scss";

function EventModal({
  formData,
  modalType,
  isVisible,
  onControlModal,
  onAddEvent,
  onEditEvent,
}) {
  const defaultValue = {
    id: "",
    date: "",
    startTime: "",
    endTime: "",
    event: "",
    place: "",
  };

  const [eventInfo, setEventInfo] = useState(defaultValue);

  useEffect(() => {
    if (formData) {
      setEventInfo(formData);
    }
  }, [formData]);

  const handleCreateEvent = (eventInfo) => {
    onAddEvent({ ...eventInfo, id: Math.random().toString(36).slice(2) });
    handleCloseModal();
  };

  const handleEditEvent = (eventInfo) => {
    onEditEvent(eventInfo);
    handleCloseModal();
  };

  const handleCloseModal = () => {
    onControlModal();
    setEventInfo(defaultValue);
  };

  return (
    <>
      {isVisible && (
        <div className="EventModal">
          <div className="EventModal__modal">
            <div className="EventModal__modal__header">
              <div className="EventModal__modal__header__title">
                {modalType === "add" ? "New Event" : "Edit Event"}
              </div>
              <div
                className="EventModal__modal__header__button"
                onClick={handleCloseModal}
              >
                x
              </div>
            </div>

            <div className="EventModal__modal__body">
              <div className="time-date">
                <div className="time-date__item">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    name="date"
                    id=""
                    value={eventInfo.date}
                    onChange={(e) =>
                      setEventInfo((prev) => ({
                        ...prev,
                        date: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="time-date__item">
                  <label htmlFor="startTime">Start Time</label>
                  <input
                    type="time"
                    name="startTime"
                    id=""
                    value={eventInfo.startTime}
                    onChange={(e) =>
                      setEventInfo((prev) => ({
                        ...prev,
                        startTime: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="time-date__item">
                  <label htmlFor="endTime">End Time</label>
                  <input
                    type="time"
                    name="endTime"
                    id=""
                    value={eventInfo.endTime}
                    onChange={(e) =>
                      setEventInfo((prev) => ({
                        ...prev,
                        endTime: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>

              <div className="content">
                <label htmlFor="content">Content</label>
                <input
                  type="text"
                  name="content"
                  id=""
                  value={eventInfo.event}
                  onChange={(e) =>
                    setEventInfo((prev) => ({
                      ...prev,
                      event: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="place">
                <label htmlFor="place">Place</label>
                <input
                  type="text"
                  name="place"
                  id=""
                  value={eventInfo.place}
                  onChange={(e) =>
                    setEventInfo((prev) => ({
                      ...prev,
                      place: e.target.value,
                    }))
                  }
                />
              </div>
            </div>

            <div className="EventModal__modal__buttonGroup">
              <div
                className="EventModal__modal__buttonGroup__add"
                onClick={() =>
                  modalType === "add"
                    ? handleCreateEvent(eventInfo)
                    : handleEditEvent(eventInfo)
                }
              >
                {modalType === "add" ? "Add" : "Edit"}
              </div>
              <div
                className="EventModal__modal__buttonGroup__cancel"
                onClick={handleCloseModal}
              >
                Cancel
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EventModal;
