// EventsCard.js
import React from "react";
import styles from "../../styles/events.module.css";
import { FaUserLarge } from "react-icons/fa6";
import CustomButton from "../Buttons/CustomButton";

const EventsCard = ({ event, viewMode }) => {
  return (
    <>
      {viewMode === "list" ? (
        // Render as list item
        <div className={styles.listeventdetails}>
          <div className={styles.listeventinformation}>
            <p className={styles.listeventtitle}>{event.title}</p>
            <p className={styles.listeventdescription}>
              {event.description.length > 20
                ? `${event.description.substring(0, 10)}...`
                : event.description}
            </p>

            <p className={styles.listeventhost}>{event.host}</p>
            <p className={styles.listeventschedule}>
              {event.date} - {event.time}
            </p>
            <p className={styles.listeventattendees}>
              {event.attendees} of {event.maxCapacity}
            </p>
          </div>
          <CustomButton>JOIN</CustomButton>
        </div>
      ) : (
        // Render as box
        <div className={styles.boxeventdetails}>
          <div className={styles.boxeventschedule}>
            {event.date} - {event.time}
          </div>
          <br />

          <div className={styles.boxeventheader}>
            <span className={styles.boxeventtitle}>{event.title}</span>
            <span className={styles.boxeventhost}>{event.host}</span>
          </div>
          <br />
          <div className={styles.boxeventdescription}>{event.description}</div>
          <br />

          <div className={styles.boxeventfooter}>
            <div className={styles.boxeventattendees}>
              <FaUserLarge /> {event.attendees} of {event.maxCapacity}
            </div>
            <CustomButton>JOIN</CustomButton>
          </div>
        </div>
      )}
    </>
  );
};

export default EventsCard;
