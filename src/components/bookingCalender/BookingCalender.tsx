import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const BookingCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await fetch("API_URL/bookings");
      const data = await res.json();
      const events = data.map(
        (booking: {
          id: any;
          title: any;
          start: string | number | Date;
          end: string | number | Date;
        }) => ({
          id: booking.id,
          title: booking.title,
          start: new Date(booking.start),
          end: new Date(booking.end),
        })
      );
      setEvents(events);
    };

    fetchBookings();
  }, []);

  return (
    <div style={{ height: "500px" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectEvent={(event) => console.log(event)}
        onSelectSlot={(slotInfo) =>
          console.log(`selected slot: ${slotInfo.start}`)
        }
      />
    </div>
  );
};

export default BookingCalendar;
