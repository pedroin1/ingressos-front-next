import { ISpotModel } from "@/types/type";

`use server`;

export async function GetSpotsByEvent(eventId: string) {
  const response = await fetch(
    `http://localhost:3000/events/${eventId}/spots`,
    {
      next: {
        revalidate: 5,
      },
    }
  );
  const data = (await response.json()) as ISpotModel[];
  return data;
}
