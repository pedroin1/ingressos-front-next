`use server`;
import { IEventModel } from "@/types/type";

export async function GetEvents() {
  const response = await fetch("http://localhost:3000/events", {
    cache: "no-store",
  });
  const data = (await response.json()) as IEventModel[];
  return data;
}

export async function GetEventById(eventId: string) {
  const response = await fetch(`http://localhost:3000/events/${eventId}`, {
    cache: "no-store",
  });
  const data = (await response.json()) as IEventModel;
  return data;
}
