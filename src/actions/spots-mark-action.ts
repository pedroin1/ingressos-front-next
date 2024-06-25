"use server";

import { cookies } from "next/headers";

export async function selectSpotAction(eventId: string, spotName: string) {
  const cookieStorage = cookies();

  const spots = JSON.parse(cookieStorage.get("spots")?.value || "[]");
  if (!spots.includes(spotName)) {
    spots.push(spotName);
    cookieStorage.set("spots", JSON.stringify(spots));
    cookieStorage.set("eventId", eventId);
  }
}

export async function unselectSpotAction(spotName: string) {
  const cookieStorage = cookies();

  const spots = JSON.parse(cookieStorage.get("spots")?.value || "[]");
  const newSpots = spots.filter((spot: string) => spot !== spotName);
  cookieStorage.set("spots", JSON.stringify(newSpots));
}

export async function clearSportsAction() {
  const cookieStorage = cookies();
  cookieStorage.set("spots", "[]");
  cookieStorage.set("eventId", "");
}
