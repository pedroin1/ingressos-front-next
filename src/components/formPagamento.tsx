"use client";

import { navigate } from "@/actions/navigate";
import { ReserveSpotsByEvent } from "@/actions/reserve-spots";
import { clearSportsAction } from "@/actions/spots-mark-action";
import { useState } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
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
        clearSportsAction();
        toast.success("Pagamento finalizado");
        navigate("/");
      } catch (err) {
        toast.error((err as Error).message);
      }
    }
  };

  function parseTicketKind(ticketKind: string) {
    if (ticketKind === "meia") {
      return "half";
    } else return "full";
  }

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <div className="w-full flex-1 min-w-[320px] flex-col py-8 px-4 bg-secondary rounded-xl">
      <h1 className="text-2xl font-bold">Informacoes do pagamento</h1>
      <div className="flex gap-2 flex-col mt-6">
        <InputComponent
          label="E-mail"
          type="email"
          placeholder="Digite seu email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={email === ""}
          className="required: bg-red-50"
        />
        <InputComponent
          label="Nome no cartão"
          type="text"
          placeholder="Nome no cartão..."
          className="min-w-[300px]"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
        />
        <InputComponent
          label="Numero do cartão"
          type="number"
          placeholder="Numero do cartão..."
          className="min-w-[300px]"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <div className="flex justify-between mb-4 gap-4 flex-shrink-1 small:flex-col">
          <InputComponent
            label="Vencimento"
            type="date"
            className="min-w-[100px] w-[250px]"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
          <InputComponent
            label="CCV"
            type="number"
            placeholder="ex: 111"
            className="min-w-[100px] max-w-[200px]"
            value={ccv}
            onChange={(e) => setCcv(e.target.value)}
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
