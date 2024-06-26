"use client";

import { selectTicketKind } from "@/actions/ticket-type-action";

export default function TicketKindSelect({ price, defaultValue }: Props) {
  const handleClickSelectValue = (value: string) => {
    if (value === "Inteira") {
      selectTicketKind("inteira");
    } else {
      selectTicketKind("meia");
    }
  };

  return (
    <>
      <label htmlFor="ticket-types mb-1">Selecione sua entrada</label>
      <select
        className="p-2 rounded-md bg-primary"
        id="ticket-types"
        name="ticket-types"
        defaultValue={defaultValue}
        onChange={(e) => handleClickSelectValue(e.target.value)}
      >
        <option selected disabled>
          Selecione...
        </option>
        {["Inteira", "Meia"].map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
}

interface Props {
  price: number;
  defaultValue?: string;
}
