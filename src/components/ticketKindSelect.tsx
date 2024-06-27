"use client";

import { selectTicketKind } from "@/actions/ticket-type-action";
import { ComponentProps, useId } from "react";

export default function TicketKindSelect({
  label,
  className,
  ...props
}: SelectProps) {
  const id = useId();

  const items = [
    {
      label: "Inteira",
      value: "full",
    },
    {
      label: "Meia",
      value: "half",
    },
  ];

  const handleClickSelectValue = (value: string) => {
    selectTicketKind(value);
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={id}
        className="p-2 rounded-md bg-primary mt-2"
        onChange={(e) => handleClickSelectValue(e.target.value)}
        {...props}
      >
        <option selected disabled>
          Selecione...
        </option>
        {items.map(({ label, value }, index) => (
          <option key={index} value={value}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
}

type SelectProps = ComponentProps<"select"> & {
  label: string;
  className?: string;
};
