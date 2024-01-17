import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Box from "@mui/material/Box";
import "./booking-calender.scss";

const localizer = momentLocalizer(moment);

interface CampEvent {
  id: string;
  title: string;
  start: string | number | Date;
  end: string | number | Date;
}

const campData = [
  {
    id: "1",
    title: "Somewhere",
    start: new Date("2024-01-05T10:00:00"),
    end: new Date("2024-01-05T11:30:00"),
  },
  {
    id: "2",
    title: "Far AWay",
    start: new Date("2023-05-06T12:00:00"),
    end: new Date("2023-05-06T13:00:00"),
  },
  {
    id: "3",
    title: "Waterfall",
    start: new Date("2023-05-08T15:00:00"),
    end: new Date("2023-05-08T17:00:00"),
  },
  {
    id: "4",
    title: "Some Moutain",
    start: new Date("2023-05-10T14:00:00"),
    end: new Date("2023-05-10T15:30:00"),
  },
  {
    id: "5",
    title: "Cool Place",
    start: new Date("2023-05-12T09:00:00"),
    end: new Date("2023-05-12T10:30:00"),
  },
];

const BookingCalendar = ({ setDate }: any) => {
  const [events, setEvents] = useState<CampEvent[]>();

  useEffect(() => {
    const fetchBookings = async () => {
      // const res = await fetch("API_URL/bookings");
      // const data = await res.json();
      const events = campData.map((booking: CampEvent) => ({
        id: booking.id,
        title: booking.title,
        start: new Date(booking.start),
        end: new Date(booking.end),
      }));
      setEvents(events);
    };

    fetchBookings();
  }, []);

  return (
    <Box sx={{ height: "500px" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectEvent={(event) => console.log(event)}
        onSelectSlot={(slotInfo) => setDate(slotInfo.start)}
      />
    </Box>
  );
};

export default BookingCalendar;
