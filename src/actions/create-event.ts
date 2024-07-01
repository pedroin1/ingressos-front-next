"use server";

import { CreateEventData, IEventModel } from "@/types/type";

export async function CreateEvent(event: CreateEventData) {
  try {
    const response = await fetch("http://localhost:3000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data as IEventModel;
  } catch (error: unknown) {
    throw new Error((error as Error).message || (error as Error).stack);
  }
}
