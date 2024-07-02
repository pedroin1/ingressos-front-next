import { GetEventById } from "@/actions/get-events";
import FormPagamento from "@/components/formPagamento";

import { formatDateToBr } from "@/util/Date";
import { calculateTotalPriceOfTickets } from "@/util/Ticket";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Evento | Checkout",
  description: "Pagina do checkout",
};

export default async function PageCheckOut() {
  let event;
  let totalPrice;
  const cookieStore = cookies();
  const eventId = cookieStore.get("eventId")?.value;
  const selectedSpots = JSON.parse(cookieStore.get("spots")?.value || "[]");
  const ticketKind = cookieStore.get("ticketKind")?.value;

  if (eventId) {
    event = await GetEventById(eventId);
    totalPrice = calculateTotalPriceOfTickets(
      ticketKind,
      selectedSpots,
      event.price
    );
  }

  return (
    <section className="flex flex-wrap gap-8 mt-10 medium:flex-col">
      {event ? (
        <>
          <div className="w-full sm:w-auto min-w-[300px] max-w-[300px] py-8 px-4 font-bold bg-secondary rounded-xl">
            <h1 className="text-2xl font-bold">Resumo da compra</h1>
            <div className="flex flex-col mt-6 mb-6">
              <p className="font-semibold">{event.name}</p>
              <p className="font-semibold">{event.location}</p>
              <p className="font-semibold">{formatDateToBr(event.date)}</p>
              <p className="font-semibold">
                Assentos: {selectedSpots.join("-")}
              </p>
            </div>
            <p className="font-semibold">Preço Total: {totalPrice}</p>
          </div>
          <FormPagamento
            eventId={eventId}
            spots={selectedSpots}
            ticketKind={ticketKind}
          />
        </>
      ) : (
        <div className="flex justify-center w-full text-5xl italic">
          Sem Eventos...
        </div>
      )}
    </section>
  );
}
