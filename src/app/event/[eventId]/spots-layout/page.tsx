import { GetSpotsByEvent } from "@/actions/get-spots";

import SpotSeatIcon from "@/components/spotSeat";
import TicketKindSelect from "@/components/ticketKindSelect";
import TitleComponent from "@/components/title";
import { IEventModel } from "@/types/type";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Evento | Assentos",
  description: "Pagina do evento",
};

export default async function SpotsLayoutPage({ params }: Params) {
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

  const spots = await GetSpotsByEvent(params.eventId);
  const rowLetters = spots.map((spot) => spot.name[0]);
  const uniqueRowLetters = rowLetters.filter(
    (row, index) => rowLetters.indexOf(row) === index
  );
  const spotGroupedByRow = uniqueRowLetters.map((row) => {
    return {
      row,
      spots: spots.filter((spot) => {
        return spot.name[0] === row;
      }),
    };
  });

  const cookieStore = cookies();
  const selectedSpots = JSON.parse(cookieStore.get("spots")?.value || "[]");
  const ticketKind = cookieStore.get("ticketKind")?.value;
  let totalPrice;

  if (ticketKind === "full") {
    totalPrice = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(selectedSpots.length * event.price);
  } else if (ticketKind === "half") {
    totalPrice = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(selectedSpots.length * (event.price / 2));
  } else {
    totalPrice = 0;
  }

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
      <div className="mt-8">
        <TitleComponent title="Escolha seu lugar" />
        <div className="flex w-full items-stretch gap-x-4 medium:flex-col">
          <div className="flex w-[98%] max-w-[1000px] flex-col px-12 py-6 rounded-xl bg-secondary mt-8">
            <div className=" flex items-center justify-center min-w-full bg-primary p-6 rounded-xl">
              <div className="font-semibold text-[28px]">PALCO</div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              {spotGroupedByRow.map(({ row, spots }) => (
                <div className="items-center justify-center flex gap-4 ">
                  {row}
                  {spots.map((spot, index) => (
                    <SpotSeatIcon
                      key={index}
                      spotId={spot.id}
                      eventId={params.eventId}
                      spotLabel={spot.name}
                      selected={selectedSpots.includes(spot.name)}
                      disabled={false}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="flex justify-around mt-12 mb-12">
              <div className="flex items-center">
                <span className="mr-1 block w-4 h-4 rounded-full bg-[#00A96E]" />
                Disponivel
              </div>
              <div className="flex items-center">
                <span className="mr-1 block w-4 h-4 rounded-full bg-[#A6ADBB]" />
                Ocupado
              </div>
              <div className="flex items-center">
                <span className="mr-1 block w-4 h-4 rounded-full bg-[#7480ff]" />
                Selecionado
              </div>
            </div>
          </div>
          <div className="flex flex-col px-12 grow-[1] flex-shrink-0 max-w-[400px] max-h-[400px] py-6 rounded-xl bg-secondary mt-8">
            <p className="text-xl mt-2 mb-2 font-bold">
              Confira os valores do evento
            </p>
            <div className="mt-4 mb-4">
              <p>Inteira - R${event.price}</p>
              <p>Meia Entrada - R${event.price / 2}</p>
            </div>
            <TicketKindSelect
              label="Selecione sua entrada"
              defaultValue={ticketKind}
            />
            <p className="mt-6 mb-6">
              {ticketKind
                ? `Total: R$ ${totalPrice}`
                : "Selecione o tipo de entrada para verficar os valores..."}
            </p>
            <button className="bg-btn-primary text-secondary font-bold px-2 py-4 rounded-md hover:bg-[#c1c1c1]">
              IR PARA PAGAMENTO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

type Params = {
  params: {
    eventId: string;
  };
};
