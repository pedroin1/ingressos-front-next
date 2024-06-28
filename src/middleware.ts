import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  if (request.nextUrl.pathname === "/") {
    ["ticketKind", "eventId", "spots"].forEach((item) =>
      response.cookies.delete(item)
    );
  }

  return response;
}

export const config = {
  matcher: "/",
};
