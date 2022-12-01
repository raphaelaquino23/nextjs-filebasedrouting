import Link from 'next/link';

function EventsPage() {
  const events = [
    { id: "1", name: "Event 1" },
    { id: "2", name: "Event 2" },
    { id: "3", name: "Event 3" },
  ];

  return (
    <div>
      <h1>All Events</h1>
      <h2>Listed Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link
              href={{
                pathname: "/events/[eventsid]",
                query: { eventsid: event.id },
              }}
            >
              {event.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsPage;
