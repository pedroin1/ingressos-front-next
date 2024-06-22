import { IEventModel } from "@/types/type";

export default function SpotsLayoutPage({ params }: Params) {
  const event: IEventModel = {
    id: "123",
    name: "Evento 1",
    location: "Sao paulo",
    image_url: "/images/event-1.jpg",
    date: "02-12-2015",
    organization: "Test",
    price: 100,
    rating: 2,
  };

  return (
    <section className="mt-10 h-full min-w-80 ">
      <div className="flex flex-col px-12 py-6 rounded-xl bg-secondary">
        <p className="text-sm text-subtitle font-bold">
          {new Date(event.date).toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </p>
        <p className="text-2xl mt-2 mb-2 font-bold">{event.name}</p>
        <p>{event.location}</p>
        <div className="flex gap-x-12 gap-y-5 flex-wrap items-center mt-5 mb-12 m-w-[300px]">
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Organizador</p>
            <p>{event.organization}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Classificação</p>
            <p>{event.rating}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

type Params = {
  params: {
    eventId: number;
  };
};
