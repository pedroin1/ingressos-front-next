import { IEventModel } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import image from "../../public/mockImage.jpg";

export default function EventCard({ event }: Props) {
  return (
    <Link href={`/event/${event.id}/spots-layout`}>
      <div className="flex w-[277px] h-[400px] flex-col rounded-2xl bg-slate-800">
        <Image
          className="w-full h-64 rounded-t-2xl"
          src={image}
          alt={event.name}
          width={100}
          height={80}
        />
        <div className="flex flex-col gap-y-2 px-4 py-6">
          <p className="text-sm uppercase text-subtitle">
            {new Date("03-05-2022").toLocaleDateString("pt-BR", {
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
