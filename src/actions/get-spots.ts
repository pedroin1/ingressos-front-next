`use server`;
import { ISpotModel } from "@/types/type";

export async function GetSpotsByEvent(eventId: string) {
  const response = await fetch(
    `http://localhost:3000/events/${eventId}/spots`,
    {
      next: {
        tags: ["spots"],
      },
    }
  );
  const data = (await response.json()) as ISpotModel[];
  return data;
}
