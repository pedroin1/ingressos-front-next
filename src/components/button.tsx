"use client";

import { navigate } from "@/actions/navigate";

export default function ButtonNavigate({ label, navigateTo, ...props }: Props) {
  const handleClickNavigate = () => {
    navigate(navigateTo);
  };

  return (
    <button
      onClick={() => handleClickNavigate()}
      className="bg-btn-primary uppercase text-secondary font-bold px-2 py-4 rounded-md 
      hover:bg-[#c1c1c1] 
      disabled:cursor-not-allowed disabled:bg-[#c1c1c1]"
      {...props}
    >
      {label}
    </button>
  );
}

interface Props {
  label: string;
  navigateTo: string;
  [key: string]: any;
}
