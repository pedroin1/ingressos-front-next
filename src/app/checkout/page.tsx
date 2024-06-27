import { GetEventById } from "@/actions/get-events";
import FormPagamento from "@/components/formPagamento";
import { formatDateToBr } from "@/util/Date";
import { cookies } from "next/headers";

export default async function PageCheckOut() {
  const cookieStore = cookies();
  const eventId = cookieStore.get("eventId")?.value;
  const selectedSpots = JSON.parse(cookieStore.get("spots")?.value || "[]");
  const ticketKind = cookieStore.get("ticketKind")?.value;

  let event;
  if (eventId) {
    event = await GetEventById(eventId);
  } else {
    event = undefined;
  }

  let totalPrice;

  if (ticketKind === "full") {
    totalPrice = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(selectedSpots.length * (event ? event.price : 0));
  } else if (ticketKind === "half") {
    totalPrice = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(selectedSpots.length * (event ? event.price : 0 / 2));
  }

  return (
    <section className="flex gap-8 mt-10 medium:flex-col">
      <div className="w-full min-w-[320px] max-w-[350px] py-8 px-4 font-bold bg-secondary rounded-xl">
        <h1 className="text-2xl font-bold">Resumo da compra</h1>
        <div className="flex flex-col mt-6 mb-6">
          {event ? (
            <>
              <p className="font-semibold">{event.name}</p>
              <p className="font-semibold">{event.location}</p>
              <p className="font-semibold">{formatDateToBr(event.date)}</p>
              <p className="font-semibold">
                Assentos: {selectedSpots.join("-")}
              </p>
            </>
          ) : (
            <p className="font-semibold">Sem eventos.</p>
          )}
        </div>
        <p className="font-semibold">Preço Total: {totalPrice}</p>
      </div>
      <FormPagamento
        eventId={eventId}
        spots={selectedSpots}
        ticketKind={ticketKind}
      />
    </section>
  );
}
