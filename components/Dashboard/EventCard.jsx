// EventsCard.js
import React from "react";
import styles from "../../styles/events.module.css";
import { FaUserLarge } from "react-icons/fa6";
import EventCustomButton from "../Buttons/EventsButton";

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

const EventsCard = ({ event, viewMode }) => {
  return (
    <>
      {viewMode === "list" ? (
        // Render as list item
        <div className={styles.listeventdetails}>
          <p>{event.title}</p>
          <p>{event.description}</p>
          <p>{event.host}</p>
          <p>
            {event.date} - {event.time}
          </p>
          <p>
            {event.attendees} of {event.maxCapacity}
          </p>
          <EventCustomButton>JOIN</EventCustomButton>
        </div>
      ) : (
        // Render as box
        <div className={styles.boxeventdetails}>
          <div className={styles.eventschedule}>
            {event.date} - {event.time}
          </div>
          <br />

          <div className={styles.eventheader}>
            <span className={styles.eventtitle}>{event.title}</span>
            <span className={styles.eventhost}>{event.host}</span>
          </div>
          <br />
          <div className={styles.eventdescription}>{event.description}</div>
          <br />

          <div className={styles.eventfooter}>
            <div className={styles.eventattendees}>
              <FaUserLarge /> {event.attendees} of {event.maxCapacity}
            </div>
            <EventCustomButton>JOIN</EventCustomButton>
          </div>
        </div>
      )}
    </>
  );
};

export default EventsCard;
