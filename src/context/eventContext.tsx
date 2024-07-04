"use client";

import { cookies } from "next/headers";
import { createContext, useContext } from "react";

const EventContext = createContext<IEventContext>({ totalPrice: 0 });

export default function useEvent() {
  const context = useContext(EventContext);
  return context;
}

export function EventContextProvider({ children }: Props) {
  let totalPrice = 5;
  return (
    <EventContext.Provider value={{ totalPrice }}>
      {children}
    </EventContext.Provider>
  );
}

type IEventContext = {
  totalPrice: number;
};

type Props = {
  children: React.ReactNode;
};
