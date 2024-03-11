// EventsCard.js
import React from "react";
// import "./eventsCard.module.css"; 

const EventsCard = ({ event, viewMode }) => {
  return (
    <div className={viewMode === "list" ? "list-item" : "box-item"}>
      {viewMode === "list" ? (
        // Render as list item
        <>
          {event.host} - {event.description}
        </>
      ) : (
        // Render as box
        <div className="box-content">
          {event.host} <br /> {event.description}
        </div>
      )}
    </div>
  );
};

export default EventsCard;
