"use client";

import { ComponentProps } from "react";

export default function ButtonComponent({ label, ...props }: ButtonProps) {
  return (
    <button
      className="bg-btn-primary uppercase text-secondary font-bold px-2 py-3 rounded-md 
      hover:bg-[#c1c1c1] 
      disabled:cursor-not-allowed disabled:bg-[#c1c1c1]"
      {...props}
    >
      {label}
    </button>
  );
}

interface ButtonProps extends ComponentProps<"button"> {
  label: string;
}
