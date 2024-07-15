import { EventContext, EventContextProvider } from "@/context/eventContext";
import { useContext } from "react";

export default function useEvent() {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error(`O UseEvent necessita de um contexto`);
  }
  return context;
}
