// EventsCard.js
import React from "react";
import styles from "../../styles/events.module.css";
import { RiUser3Fill } from "react-icons/ri";

// {
//     id: 1,
//     title: "Tech Innovations Conference",
//     host: "InnovateX",
//     description: "A conference exploring the latest in technology and innovation.",
//     attendees: 150,
//     date: "2023-04-15",
//     time: "10:00 AM",
//     maxCapacity: 200
//   },

const EventsNav = ({ event, viewMode }) => {
  return (
    <>
      {viewMode === "list" ? (
        // Render as list item
        <div className={styles.listeventdetails}>
          {event.title} - {event.description} - {event.host}
        </div>
      ) : (
        // Render as box
        <div className={styles.boxeventdetails}>
          <div>
            {event.date} - {event.time}
          </div>
          <div>
            {event.title} <br /> {event.host}
          </div>
          <div>{event.description}</div>
          <div>
            <RiUser3Fill /> {event.attendees} of {event.maxCapacity}
          </div>
          <button>JOIN</button>
        </div>
      )}
    </>
  );
};

export default EventsCard;
