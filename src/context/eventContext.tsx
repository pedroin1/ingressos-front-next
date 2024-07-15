"use client";
import { createContext, PropsWithChildren } from "react";

type IEventContext = {
  totalPrice: number;
};

export const EventContext = createContext<IEventContext | null>(null);

export function EventContextProvider({ children }: PropsWithChildren) {
  let totalPrice = 5;
  return (
    <EventContext.Provider value={{ totalPrice }}>
      {children}
    </EventContext.Provider>
  );
}
