import { useRouter } from "next/router";

function EventDetailPage() {
  const router = useRouter();
  console.log(router.query);
  const eventId = router.query.eventId;

  return(
    <div>
      <h1>Detailed Page for Event #{eventId}</h1>
    </div>
  )
}

export default EventDetailPage;