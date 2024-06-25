"use client";

export default function SelectComponent({ label, values }: Props) {
  return (
    <>
      {label && <label htmlFor="ticket-types">{label}</label>}
      <select
        className="p-2 rounded-md bg-primary"
        id="ticket-types"
        name="ticket-types"
      >
        <option disabled>Selecione...</option>
        {values.map((value) => (
          <option value={value}>{value}</option>
        ))}
      </select>
    </>
  );
}

interface Props {
  label?: string;
  values: any[];
}
