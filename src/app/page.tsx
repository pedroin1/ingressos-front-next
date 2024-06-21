import EventCard from "@/components/eventCard";
import TitleComponent from "@/components/title";
import { IEventModel } from "@/types/type";
import Image from "next/image";

export default function HomePage() {
  const events: IEventModel[] = [
    {
      id: "123",
      name: "Evento 1",
      location: "SP",
      image_url: "/images/event-1.jpg",
      date: "02-12-2015",
      organization: "Test",
      price: 100,
      rating: 2,
    },
    {
      id: "123",
      name: "Evento 1",
      location: "SP",
      image_url: "/images/event-1.jpg",
      date: "02-12-2015",
      organization: "Test",
      price: 100,
      rating: 2,
    },
    {
      id: "123",
      name: "Evento 1",
      location: "SP",
      image_url: "/images/event-1.jpg",
      date: "02-12-2015",
      organization: "Test",
      price: 100,
      rating: 2,
    },
  ];

  return (
    <main>
      <TitleComponent title="Eventos disponiveis" />
      <div className="mt-12 sm:grid sm:grid-cols-auto-fit-cards flex flex-wrap justify-center gap-x-2 gap-y-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  );
}
