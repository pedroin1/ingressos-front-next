"use server";

import { revalidatePath } from "next/cache";

export async function ReserveSpotsByEvent(
  eventId: string,
  spots: string[],
  ticketKind: string,
  email: string
) {
  try {
    const response = await fetch(
      `http://localhost:3000/events/${eventId}/reserve`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          spots: spots,
          ticketKind: ticketKind,
          email: email,
        }),
      }
    );

    const data = await response.json();
    if (!response.ok) throw new Error(data.message);

    revalidatePath(`/event/${eventId}`);
  } catch (err) {
    throw new Error((err as Error).message);
  }
}
