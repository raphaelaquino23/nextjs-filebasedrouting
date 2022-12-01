import { getAllEvents } from '../../dummy-data'
import { useRouter } from 'next/router';

import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

function EventsPage() {
  const events = getAllEvents()
  const router = useRouter();

  function findEventsHandler(year, month) {
    router.push({
      pathname: '/events/[year]/[month]',
      query: {year: year, month: month}
    })
  }

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler}/>
      <EventList items={events} />
    </div>
  );
}

export default EventsPage;
