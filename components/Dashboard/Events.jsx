import React, { useState } from "react";
import EventsCard from "./EventCard";
import styles from "../../styles/events.module.css";
import { MdViewModule, MdViewAgenda } from "react-icons/md";

const mockEvents = [
  {
    id: 1,
    title: "Tech Innovations Conference",
    host: "InnovateX",
    description:
      "A conference exploring the latest in technology and innovation.",
    attendees: 150,
    date: "2023-04-15",
    time: "10:00 AM",
    maxCapacity: 200,
  },
  {
    id: 2,
    title: "Local Art Expo",
    host: "Artists Unite",
    description: "Showcasing the best local artists and their work.",
    attendees: 75,
    date: "2023-05-20",
    time: "02:00 PM",
    maxCapacity: 100,
  },
  {
    id: 3,
    title: "Sustainable Living Workshop",
    host: "GreenLife",
    description:
      "Learn about sustainable living practices and eco-friendly solutions.",
    attendees: 50,
    date: "2023-06-05",
    time: "09:00 AM",
    maxCapacity: 50,
  },
  {
    id: 4,
    title: "Culinary Delights Festival",
    host: "Gourmet Bites",
    description:
      "A festival celebrating international cuisines and culinary excellence.",
    attendees: 300,
    date: "2023-07-12",
    time: "11:00 AM",
    maxCapacity: 500,
  },
  {
    id: 5,
    title: "DIY Home Decor Workshop",
    host: "Crafty Homes",
    description:
      "Get creative with DIY projects for home decor and improvement.",
    attendees: 40,
    date: "2024-08-16",
    time: "01:00 PM",
    maxCapacity: 40,
  },
  {
    id: 6,
    title: "Digital Marketing Seminar",
    host: "MarketMasters",
    description:
      "A seminar on the latest trends and strategies in digital marketing.",
    attendees: 200,
    date: "2023-09-10",
    time: "10:00 AM",
    maxCapacity: 250,
  },
  {
    id: 7,
    title: "Community Health Fair",
    host: "HealthFirst",
    description:
      "A day dedicated to health screenings, wellness activities, and health education.",
    attendees: 180,
    date: "2023-10-25",
    time: "09:00 AM",
    maxCapacity: 200,
  },
  {
    id: 8,
    title: "Indie Film Night",
    host: "Cinephile Collective",
    description:
      "An evening of screenings of independent films followed by discussions.",
    attendees: 60,
    date: "2024-11-18",
    time: "07:00 PM",
    maxCapacity: 100,
  },
  {
    id: 9,
    title: "Startup Pitch Night",
    host: "VentureVision",
    description:
      "A night for startups to pitch their ideas to investors and industry experts.",
    attendees: 100,
    date: "2023-12-05",
    time: "06:00 PM",
    maxCapacity: 150,
  },
  {
    id: 10,
    title: "Fantasy Book Club Meeting",
    host: "Fable Fans",
    description:
      "Monthly meeting to discuss the latest fantasy novels and classics.",
    attendees: 25,
    date: "2024-12-22",
    time: "05:00 PM",
    maxCapacity: 30,
  },
];
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

const Events = () => {
  const [activeTab, setActiveTab] = useState("allEvents");
  const [viewMode, setViewMode] = useState("box");

  return (
    <div className={styles.eventcontainer}>
      <div className={styles.eventnav}>
        <div className={styles.eventfilter}>
          <button
            onClick={() => setActiveTab("allEvents")}
            className={activeTab === "allEvents" ? styles.active : ""}
          >
            ALL EVENTS
          </button>
          <button
            onClick={() => setActiveTab("futureEvents")}
            className={activeTab === "futureEvents" ? styles.active : ""}
          >
            FUTURE EVENTS
          </button>
          <button
            onClick={() => setActiveTab("pastEvents")}
            className={activeTab === "pastEvents" ? styles.active : ""}
          >
            PAST EVENTS
          </button>
        </div>
        <div className={styles.eventviewswitcher}>
          <button onClick={() => setViewMode("box")}>
            <MdViewModule />
          </button>
          <button onClick={() => setViewMode("list")}>
            <MdViewAgenda />
          </button>
        </div>
      </div>
      <section
        className={viewMode === "box" ? styles.boxview : styles.listview}
      >
        {mockEvents
          .filter((event) => {
            const now = new Date();
            const eventDate = new Date(event.date);
            return activeTab === "futureEvents"
              ? eventDate > now
              : activeTab === "pastEvents"
              ? eventDate < now
              : true; // Always true for 'all', to include every event
          })
          .map((event) => (
            <EventsCard key={event.id} event={event} viewMode={viewMode} />
          ))}
      </section>
    </div>
  );
};

export default Events;