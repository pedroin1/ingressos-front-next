`use server`;

import { GetEvents } from "@/actions/get-events";
import EventCard from "@/components/eventCard";
import TitleComponent from "@/components/title";

export default async function HomePage() {
  const events = await GetEvents();

  return (
    <main className="mt-10">
      <TitleComponent title="Eventos disponiveis" />
      <div className="mt-12 sm:grid sm:grid-cols-auto-fit-cards  flex flex-wrap justify-center gap-x-2 gap-y-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  );
}
