"use client";

import { Dispatch, SetStateAction } from "react";

export default function InputComponent({
  label,
  placeholder,
  type,
  value = "",
  setValue,
  className,
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={`input-${label}`}>{label}</label>
      <input
        id={`input-${label}`}
        type={type}
        placeholder={placeholder ? placeholder : ""}
        className={`rounded-sm p-1 bg-primary placeholder-gray-600 ${className}`}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
      />
    </div>
  );
}

interface Props {
  className?: string;
  label: string;
  placeholder?: string;
  type: string;
  value: any;
  setValue: Dispatch<SetStateAction<any>>;
}
