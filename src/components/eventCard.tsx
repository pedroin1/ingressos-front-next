import { IEventModel } from "@/types/type";
import Link from "next/link";

export default function EventCard({ event }: Props) {
  return (
    <Link href={`/event/${event.id}/spots-layout`}>
      <div className="flex w-[277px] flex-col rounded-2xl bg-slate-800">
        <img src={event.image_url} alt={event.name} />
        <div className="flex flex-col gap-y-2 px-4 py-6">
          <p className="text-sm uppercase text-subtitle">
            {new Date(event.date).toLocaleDateString("pt-BR", {
              weekday: "long",
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </p>
          <p className="font-semibold">{event.name}</p>
          <p className="text-sm font-normal">{event.location}</p>
        </div>
      </div>
    </Link>
  );
}

interface Props {
  event: IEventModel;
}
