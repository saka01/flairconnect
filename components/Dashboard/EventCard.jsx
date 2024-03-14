// EventsCard.js
import React from "react";
import styles from "../../styles/events.module.css";
import { FaUserLarge } from "react-icons/fa6";
import Button from "../Buttons/EventButton";
import { useRouter } from "next/router";


const EventsCard = ({ event, viewMode }) => {
  const router = useRouter();

  const handleActionClick = async () => {
    if (event.isOwner) {
      // Navigate to the edit page if the user is the event owner
      router.push(`/events/edit/${event.id}`);
    } else if (event.isAttendee) {
      // Attempt to leave the event if the user is an attendee
      try {
        await leaveEvent(event.id, user.id, jwtToken);
        // Handle success (e.g., update UI or state to reflect the change)
        alert("You have successfully left the event.");
      } catch (error) {
        console.error("Failed to leave event:", error);
        alert("Failed to leave event.");
      }
    } else {
      // Attempt to join the event if the user is neither the owner nor an attendee
      try {
        await joinEvent(event.id, user.id, jwtToken);
        // Handle success
        alert("You have successfully joined the event.");
      } catch (error) {
        console.error("Failed to join event:", error);
        alert("Failed to join event.");
      }
    }
  };

  return (
    <>
      {viewMode === "list" ? (
        // Render as list item
        <div className={styles.listeventdetails}>
          <div className={styles.listeventinformation}>
            <p className={styles.listeventtitle}>{event.title}</p>
            <p className={styles.listeventdescription}>
              {event.description.length > 30
                ? `${event.description.substring(0, 20)}...`
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
          <Button
            onClick={handleActionClick}
            isOwner={false}
            isAttendee={true}
          />
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
            <Button
              onClick={handleActionClick}
              isOwner={false}
              isAttendee={false}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EventsCard;
