`use server`;
import { IEventModel } from "@/types/type";

export async function GetEvents() {
  const response = await fetch("http://localhost:3000/events", {
    next: {
      revalidate: 5,
    },
  });
  const data = (await response.json()) as IEventModel[];
  return data;
}
