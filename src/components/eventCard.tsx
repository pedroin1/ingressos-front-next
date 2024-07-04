import { IEventModel } from "@/types/type";
import { formatDateToBr } from "@/util/Date";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function EventCard({ event }: Props) {
  return (
    <Link href={`/event/${event.id}/spots-layout`}>
      <div className="flex w-[277px] h-[450px] flex-col rounded-2xl bg-slate-800">
        <Suspense fallback={<div>Carregando Imagem...</div>}>
          <Image
            className="w-full h-64 rounded-t-2xl"
            src={event.image_url}
            alt={event.name}
            width={100}
            height={100}
            quality={100}
          />
        </Suspense>
        <div className="flex flex-col gap-y-6 px-4 py-6">
          <p className="text-sm uppercase text-subtitle">
            {formatDateToBr(event.date)}
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
