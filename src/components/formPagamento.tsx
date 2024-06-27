"use client";

import { navigate } from "@/actions/navigate";
import { ReserveSpotsByEvent } from "@/actions/reserve-spots";
import { clearSportsAction } from "@/actions/spots-mark-action";
import { useState } from "react";
import InputComponent from "./input";

export interface Props {
  eventId?: string;
  spots: [];
  ticketKind?: string;
}

export default function FormPagamento({ eventId, spots, ticketKind }: Props) {
  const [email, setEmail] = useState<string>("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [ccv, setCcv] = useState("");

  const handleClickFinalzarPagamento = async () => {
    if (eventId && spots && ticketKind) {
      try {
        await ReserveSpotsByEvent(
          eventId,
          spots,
          parseTicketKind(ticketKind),
          email
        );
      } catch (err) {
        alert((err as Error).message);
      }
    }
    clearSportsAction();
    navigate("/");
    alert("Pagamento FInalziado");
  };

  function parseTicketKind(ticketKind: string) {
    if (ticketKind === "meia") {
      return "half";
    } else return "full;";
  }

  return (
    <div className="w-full flex-1 min-w-[320px] flex-col py-8 px-4 bg-secondary rounded-xl">
      <h1 className="text-2xl font-bold">Informacoes do pagamento</h1>
      <div className="flex gap-2 flex-col mt-6">
        <InputComponent
          label="E-mail"
          type="email"
          placeholder="Digite seu email..."
          className="min-w-[300px]"
          value={email}
          setValue={setEmail}
        />
        <InputComponent
          label="Nome no cartão"
          type="text"
          placeholder="Nome no cartão..."
          className="min-w-[300px]"
          value={cardName}
          setValue={setCardName}
        />
        <InputComponent
          label="Numero do cartão"
          type="number"
          placeholder="Numero do cartão..."
          className="min-w-[300px]"
          value={cardNumber}
          setValue={setCardNumber}
        />
        <div className="flex justify-between mb-4 gap-4 flex-shrink-1 small:flex-col">
          <InputComponent
            label="Vencimento"
            type="date"
            className="min-w-[100px] w-[250px]"
            value={expiryDate}
            setValue={setExpiryDate}
          />
          <InputComponent
            label="CCV"
            type="number"
            placeholder="ex: 111"
            className="min-w-[100px] max-w-[200px]"
            value={ccv}
            setValue={setCcv}
          />
        </div>
        <button
          onClick={handleClickFinalzarPagamento}
          className="bg-btn-primary uppercase text-secondary font-bold px-2 py-2 rounded-md hover:bg-[#c1c1c1]"
        >
          finalizar pagamento
        </button>
      </div>
    </div>
  );
}
