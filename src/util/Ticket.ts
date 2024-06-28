export function parseTicketKind(ticketKind: string) {
  if (ticketKind === "meia") {
    return "half";
  } else if (ticketKind === "inteira") {
    return "full";
  } else throw new Error("Tipo de ingresso inválido");
}

export function calculateTotalPriceOfTickets(
  ticketKind: string | undefined,
  qtdSpots: number,
  eventPrice: number
) {
  let totalPrice;
  if (ticketKind === "full") {
    totalPrice = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(qtdSpots * eventPrice);
  } else if (ticketKind === "half") {
    totalPrice = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(qtdSpots * (eventPrice / 2));
  } else {
    totalPrice = 0;
  }
  return totalPrice;
}
