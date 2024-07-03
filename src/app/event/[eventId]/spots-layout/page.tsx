import { GetEventById } from "@/actions/get-events";
import { GetSpotsByEvent } from "@/actions/get-spots";

import ButtonNavigate from "@/components/buttonNavigate";

import SpotSeatIcon from "@/components/spotSeat";
import TicketKindSelect from "@/components/ticketKindSelect";
import TitleComponent from "@/components/title";
import { formatDateToBr } from "@/util/Date";
import { calculateTotalPriceOfTickets } from "@/util/Ticket";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Evento | Assentos",
  description: "Pagina do evento",
};

export default async function SpotsLayoutPage({ params }: Params) {
  const cookieStore = cookies();

  const event = await GetEventById(params.eventId);
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

  const selectedSpots = JSON.parse(cookieStore.get("spots")?.value || "[]");
  const ticketKind = cookieStore.get("ticketKind")?.value;
  let totalPrice = calculateTotalPriceOfTickets(
    ticketKind,
    selectedSpots.length,
    event.price
  );

  return (
    <section className="mt-10 h-full min-w-80 ">
      <div className="flex flex-col px-12 py-6 rounded-xl bg-secondary">
        <p className="text-lg text-subtitle font-bold">
          {formatDateToBr(event.date)}
        </p>
        <p className="text-2xl mt-2 mb-2 font-bold">{event.name}</p>
        <p>{event.location}</p>
        <div className="flex gap-x-12 gap-y-5 flex-wrap items-center mt-5 mb-12">
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Descrição</p>
            <p>{event.description}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Classificação</p>
            <p>{event.rating}</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <TitleComponent title="Escolha seu lugar" />
        <div className="flex flex-wrap items-stretch gap-x-4">
          <div className="flex w-full sm:w-[98%] md:min-w-[600px] lg:max-w-[1000px] flex-col px-12 py-6 rounded-xl bg-secondary mt-8">
            <div className="flex items-center justify-center min-w-full bg-primary p-6 rounded-xl">
              <div className="font-semibold text-[28px] uppercase">Palco</div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              {spotGroupedByRow.map(({ row, spots }, index) => (
                <div
                  key={index}
                  className="items-center justify-center flex gap-4 "
                >
                  {row}
                  {spots.map((spot, index) => (
                    <SpotSeatIcon
                      key={index}
                      spotId={spot.id}
                      eventId={params.eventId}
                      spotLabel={spot.name}
                      selected={selectedSpots.includes(spot.name)}
                      disabled={spot.status !== "available"}
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
          <div className="flex flex-col px-12 flex-grow max-w-full md:max-w-[500px] max-h-[400px] py-6 rounded-xl bg-secondary mt-8">
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
            <ButtonNavigate
              label="Ir Para Pagamento"
              navigateTo={"/checkout"}
              disabled={!ticketKind}
            />
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
