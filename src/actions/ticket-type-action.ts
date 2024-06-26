"use server";

import { cookies } from "next/headers";

export async function selectTicketKind(ticketKind: string) {
  const cookieStorage = cookies();
  cookieStorage.set("ticketKind", ticketKind);
}
