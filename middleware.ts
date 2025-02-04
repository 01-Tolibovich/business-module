import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  console.log("middleware");
  

  if (!token ) {
    return NextResponse.redirect(new URL("/info", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/result/:path", "/reporting", "/orders", "/analytics"],
};
