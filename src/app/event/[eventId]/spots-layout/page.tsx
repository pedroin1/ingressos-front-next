import { GetSpotsByEvent } from "@/actions/get-spots";
import TitleComponent from "@/components/title";
import { IEventModel } from "@/types/type";

export default async function SpotsLayoutPage({ params }: Params) {
  const spots = await GetSpotsByEvent(params.eventId);
  console.log(spots);

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
      <div className="mt-8">
        <TitleComponent title="Escolha seu lugar" />
        <div className="flex w-full items-stretch gap-x-4 medium:flex-col">
          <div className="flex w-[98%] max-w-[1000px] flex-col px-12 py-6 rounded-xl bg-secondary mt-8">
            <div className=" flex items-center justify-center min-w-full bg-primary p-6 rounded-xl">
              <p className="font-semibold text-[28px]">PALCO</p>
            </div>
          </div>
          <div className="flex flex-col px-12 grow-[1] py-6 rounded-xl bg-secondary mt-8">
            <p className="text-xl mt-2 mb-2 font-bold">
              Confira os valores do evento
            </p>
            <div className="mt-4 mb-4">
              <p>Inteira: {event.price}</p>
              <p>Meia Entrada: {event.price}</p>
            </div>
            <p>Select para saber se a entrada e meia ou inteira</p>
            <p className="mt-6 mb-6">total R$ preco total</p>
            <button className="bg-btn-primary text-secondary font-bold px-2 py-4 rounded-md hover:opacity-55 cursor-pointer">
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
