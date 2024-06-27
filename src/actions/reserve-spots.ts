"use server";

import { revalidateTag } from "next/cache";

export async function ReserveSpotsByEvent(
  eventId: string,
  spots: string[],
  ticketKind: string,
  email: string
) {
  try {
    console.log(ticketKind);

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
    console.log(data);

    if (!response.ok) {
      throw new Error(data.message);
    }

    revalidateTag("spots");
    return data;
  } catch (err) {
    throw new Error("Erro ao realizar requisicao");
  }
}
